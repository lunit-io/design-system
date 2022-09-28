#! /usr/bin/env node
import fse from "fs-extra";
import https from "https";
import chalk from "chalk";
import semver from "semver";
import { Command } from "commander";
import { execSync } from "child_process";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const currentPath = process.cwd();
const filePath = path.join(__dirname, "favicon");

function getLatestVersion() {
  return new Promise((resolve, reject) => {
    https
      .get(
        "https://registry.npmjs.org/-/package/@lunit/design-system-logo/dist-tags",
        (res) => {
          if (res.statusCode === 200) {
            let body = "";
            res.on("data", (data) => (body += data));
            res.on("end", () => {
              resolve(JSON.parse(body).latest);
            });
          } else {
            reject();
          }
        }
      )
      .on("error", (err) => {
        console.log();
        console.error(
          "Unable to get the latest version information: ",
          chalk.yellow(err)
        );
        console.log();
        process.exit(1);
      });
  });
}

async function moveToFavicon(faviconPath) {
  if (!fse.existsSync(faviconPath)) {
    await fse.mkdir(faviconPath);
  }

  if (!fse.existsSync(filePath)) {
    console.log();
    console.error(chalk.yellow("The favicon files don't exist."));
    console.log();
    return;
  }

  fse.readdir(filePath, (err, files) => {
    if (err) {
      console.log();
      console.error(chalk.yellow(err));
      console.log();
      return;
    }

    // move favicon files
    files.forEach((file) => {
      fse.rename(path.join(filePath, file), path.join(faviconPath, file));
    });

    console.log();
    console.log(chalk.green("success"), "Saved the favicon");
    console.log();
    console.log(
      chalk.blue("Info"),
      "See README.md for favicon settings: https://github.com/lunit-io/design-system/tree/main/packages/design-system-logo#favicon"
    );
    console.log();
  });
}

function installPackage(option) {
  let packageManager = option;
  if (!packageManager) {
    if (fse.existsSync(path.join(currentPath, "yarn.lock"))) {
      packageManager = "yarn";
    }
    if (fse.existsSync(path.join(currentPath, "package-lock.json"))) {
      packageManager = "npm";
    }

    if (packageManager !== "yarn" && packageManager !== "npm") {
      console.log();
      console.error(
        chalk.yellow(
          "Unable to determine package manager type. Please set the options."
        )
      );
      console.log();
    }
  }

  console.log();
  console.log(`Installing ${chalk.cyan("@lunit/design-system-logo")}...`);
  console.log();
  if (packageManager === "yarn") {
    execSync("yarn add @lunit/design-system-logo", { stdio: "inherit" });
  }
  if (packageManager === "npm") {
    execSync("npm install @lunit/design-system-logo", { stdio: "inherit" });
  }
}

async function init() {
  const packageJson = JSON.parse(
    await fse.readFile(path.join(__dirname, "package.json"), {
      encoding: "utf8",
    })
  );

  const program = new Command(packageJson.name)
    .version(packageJson.version)
    .option("--favicon-path <path>", "Path to save the favicon")
    .option("--package-manager <type>", "Please set either yarn or npm");

  const options = program.opts();
  const latest = await getLatestVersion();

  program.parse(process.argv);

  if (latest && semver.lt(packageJson.version, latest)) {
    console.log();
    console.error(
      chalk.yellow(
        `You are running \`@lunit/design-system-logo\` ${packageJson.version}, which is behind the latest release (${latest}).\n\n` +
          "We recommend always using the latest version of @lunit/design-system-logo if possible."
      )
    );
    console.log();
    process.exit(1);
  }

  installPackage(options.packageManager);

  if (options.faviconPath) {
    const faviconPath = path.join(currentPath, options.faviconPath);
    moveToFavicon(faviconPath);
  } else {
    console.log();
    console.log(
      chalk.blue("Info"),
      "If you want to install favicon, please set the path option."
    );
    console.log();
  }
}

init();
