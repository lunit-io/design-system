import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import globAsync from "fast-glob";
import Mustache from "mustache";

const deprecatedIcons = ["LunitLogo"];
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Return Pascal-Cased component name.
 * @param {string} name
 * @returns {string} class name
 */
export function getComponentName(name, size) {
  const parts = name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.substring(1));
  if (size !== "20") {
    parts.push(size);
  }
  return parts.join("");
}

export async function handler() {
  const [svgPaths, componentTemplate, indexTemplate] = await Promise.all([
    globAsync("src/assets/*.svg"),
    fse.readFile(path.join(__dirname, "src/component.mustache"), {
      encoding: "utf8",
    }),
    fse.readFile(path.join(__dirname, "src/index.mustache"), {
      encoding: "utf8",
    }),
  ]);

  const icons = [];
  for await (let svgPath of svgPaths) {
    const filePattern = /^src\/assets\/ic_(\w+)=(\w+)_(\d+)px.svg/;
    const found = svgPath.match(filePattern);
    if (!found) {
      continue;
    }
    const [, name, variant, size] = found;
    const componentName = getComponentName(name, size);

    const iconIndex = icons.findIndex(
      (icon) => icon.componentName === componentName
    );
    if (variant === "2tone") {
      continue;
    }
    if (iconIndex > -1) {
      icons[iconIndex].variants.push({ variant, name, size });
    } else {
      icons.push({
        name,
        componentName,
        variants: [{ variant, name, size }],
        isDeprecated: deprecatedIcons.includes(componentName),
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
    const { componentName } = icon;
    const componentString = Mustache.render(componentTemplate, icon);

    await fse.mkdir(path.join(__dirname, "generated", componentName));
    await fse.writeFile(
      path.join(__dirname, "generated", componentName, `index.tsx`),
      componentString
    );
  }
}
handler();
