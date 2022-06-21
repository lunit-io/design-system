import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import globAsync from "fast-glob";
import Mustache from "mustache";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Return Pascal-Cased component name.
 * @param {string} name
 * @returns {string} class name
 */
export function getComponentName(name) {
  const parts = name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.substring(1));

  return parts.join("");
}

export async function handler() {
  const [svgPaths, componentTemplate, componentIndexTemplate, indexTemplate] =
    await Promise.all([
      globAsync("src/assets/*.svg"),
      fse.readFile(path.join(__dirname, "src/component.mustache"), {
        encoding: "utf8",
      }),
      fse.readFile(path.join(__dirname, "src/componentIndex.mustache"), {
        encoding: "utf8",
      }),
      fse.readFile(path.join(__dirname, "src/index.mustache"), {
        encoding: "utf8",
      }),
    ]);

  const icons = [];
  for await (let svgPath of svgPaths) {
    const filePattern = /^src\/assets\/ic_(\w+)=(\w+)_20px.svg/;
    const found = svgPath.match(filePattern);
    if (!found) {
      continue;
    }
    const [, name, variant] = found;
    const componentName = getComponentName(name);

    const iconIndex = icons.findIndex((icon) => icon.name === name);
    if (iconIndex > -1) {
      icons[iconIndex].variants.push(variant);
    } else {
      icons.push({
        name,
        componentName,
        variants: [variant],
      });
    }
  }

  await fse.rm(path.join(__dirname, "generated"), {
    recursive: true,
    force: true,
  });
  await fse.mkdir(path.join(__dirname, "generated"));
  const indexString = Mustache.render(indexTemplate, {
    icons,
  });
  await fse.writeFile(
    path.join(__dirname, "generated", "index.ts"),
    indexString
  );

  for await (let icon of icons) {
    const { name, componentName, variants } = icon;
    console.log(name, componentName, variants);
    if (!variants.includes("outlined")) {
      continue;
    }
    const componentString = Mustache.render(componentTemplate, {
      name,
      componentName,
    });
    // const indexString = Mustache.render(componentIndexTemplate, {
    //   componentName,
    // });

    await fse.mkdir(path.join(__dirname, "generated", componentName));
    await fse.writeFile(
      path.join(__dirname, "generated", componentName, `index.tsx`),
      componentString
    );
    // await fse.writeFile(
    //   path.join(__dirname, "generated", componentName, `index.tsx`),
    //   indexString
    // );
  }
}
handler();
