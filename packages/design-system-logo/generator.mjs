import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import globAsync from "fast-glob";
import Mustache from "mustache";
import { transform } from "@svgr/core";
import camelCase from "lodash/camelCase.js";
import upperFirst from "lodash/upperFirst.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const outputPath = "src/generated";

function getComponentName(name, isDark) {
  let componentName = upperFirst(camelCase(name));

  componentName = componentName
    .replace("GatewayConfigurationManager", "GCM")
    .replace("ScopeIo", "ScopeIO")
    .replace("Dbt", "DBT")
    .replace("ChestCt", "ChestCT")
    .replace("Cxr", "CXR")
    .replace("Mmg", "MMG")
    .replace("PdL", "PDL")
    .replace("Her", "HER");

  if (isDark === "True") {
    componentName = `${componentName}Dark`;
  }
  return componentName.includes("Lunit")
    ? componentName
    : `Lunit${componentName}`;
}

async function handler() {
  const [svgPaths, storiesTemplate, indexTemplate] = await Promise.all([
    globAsync("src/assets/logo/*.svg"),
    fse.readFile(path.join(__dirname, "src/logo.stories.mustache"), {
      encoding: "utf8",
    }),
    fse.readFile(path.join(__dirname, "src/logo.index.mustache"), {
      encoding: "utf8",
    }),
  ]);

  await fse.rm(path.join(outputPath), {
    recursive: true,
    force: true,
  });
  await fse.mkdir(path.join(outputPath));

  const logoList = [];

  for await (let svgPath of svgPaths) {
    // make logo components
    const filePattern =
      /^src\/assets\/logo\/Name=([a-zA-Z0-9_-]+), Dark=(\w+).svg/;
    const [_, logoName, isDark] = svgPath.match(filePattern);

    const componentName = getComponentName(logoName, isDark);

    let svgContent = await fse.readFile(path.join(__dirname, svgPath), {
      encoding: "utf8",
    });

    const componentString = await transform(
      svgContent,
      {
        typescript: true,
        jsxRuntime: "automatic",
      },
      { componentName }
    );

    await fse.mkdir(path.join(outputPath, componentName));
    await fse.writeFile(
      path.join(outputPath, componentName, "index.tsx"),
      componentString
    );

    logoList.push({
      componentName,
      darkBg: isDark === "True",
    });
  }

  // make an index file
  const indexString = Mustache.render(indexTemplate, { logoList });
  await fse.writeFile(path.join(outputPath, "index.ts"), indexString);

  // make stories
  await fse.rm(path.join("src/stories/logo"), {
    recursive: true,
    force: true,
  });
  await fse.mkdir(path.join("src/stories/logo"), { recursive: true });
  const storiesString = Mustache.render(storiesTemplate, { logoList });
  await fse.writeFile(
    path.join("src/stories/logo", "logo.stories.tsx"),
    storiesString
  );
}
handler();
