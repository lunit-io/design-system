import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import globAsync from "fast-glob";
import Mustache from "mustache";
import camelCase from "lodash/camelCase.js";
import upperFirst from "lodash/upperFirst.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getComponentName(name, grey, isDark) {
  let compoenentName = upperFirst(camelCase(name));

  compoenentName = compoenentName
    .replace("GatewayConfigurationManager", "GCM")
    .replace("ScopeIo", "ScopeIO")
    .replace("Dbt", "DBT")
    .replace("ChestCt", "ChestCT")
    .replace("Cxr", "CXR")
    .replace("Mmg", "MMG")
    .replace("PdL", "PDL")
    .replace("Her", "HER");

  if (isDark === "True") {
    compoenentName = `${compoenentName}Dark`;
  }
  if (grey === "On") {
    compoenentName = `${compoenentName}grey`;
  }
  return compoenentName.includes("Lunit")
    ? compoenentName
    : `Lunit${compoenentName}`;
}

async function handler() {
  const [svgPaths, componentTemplate, storiesTemplate, indexTemplate] =
    await Promise.all([
      globAsync("src/assets/logo/*.svg"),
      fse.readFile(path.join(__dirname, "src/logo.mustache"), {
        encoding: "utf8",
      }),
      fse.readFile(path.join(__dirname, "src/logo.stories.mustache"), {
        encoding: "utf8",
      }),
      fse.readFile(path.join(__dirname, "src/logo.index.mustache"), {
        encoding: "utf8",
      }),
    ]);

  await fse.rm(path.join("src/components"), {
    recursive: true,
    force: true,
  });
  await fse.mkdir(path.join("src/components"));

  const logoList = [];

  for await (let svgPath of svgPaths) {
    // make logo components
    const filePattern =
      /^src\/assets\/logo\/logo=([a-zA-Z0-9_-]+),(?: grey=(\w+),)? dark=(\w+).svg/;
    const [_, logoName, grey, isDark] = svgPath.match(filePattern);

    const componentName = getComponentName(logoName, grey, isDark);

    let svgContent = await fse.readFile(path.join(__dirname, svgPath), {
      encoding: "utf8",
    });

    svgContent = svgContent.replace("<svg", "<svg {...prop}");

    const componentString = Mustache.render(componentTemplate, {
      componentName,
      svgContent,
    });

    await fse.mkdir(path.join("src/components", componentName));
    await fse.writeFile(
      path.join("src/components", componentName, "index.tsx"),
      componentString
    );

    logoList.push({
      componentName,
      darkBg: grey === "On" || isDark === "True",
    });
  }

  // make an index file
  const indexString = Mustache.render(indexTemplate, { logoList });
  await fse.writeFile(path.join("src/components", "index.ts"), indexString);

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
