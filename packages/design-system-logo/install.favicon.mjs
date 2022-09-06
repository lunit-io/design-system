import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootPath = __dirname.split("node_modules")[0];
const faviconPath = path.join(__dirname, "favicon");
const publicPath = path.join(rootPath, "public");

async function handler() {
  // check path exist
  if (!fse.existsSync(publicPath)) {
    console.log(
      "The favicon files aren't installed because the public directory does not exist."
    );
    return;
  }

  if (!fse.existsSync(faviconPath)) {
    console.log("The pavicon directory does not exist.");
    return;
  }

  fse.readdir(faviconPath, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    // move favicon files
    files.forEach((file) => {
      fse.rename(path.join(faviconPath, file), path.join(publicPath, file));
    });

    fse.rmdir(faviconPath, { recursive: true, force: true });
  });
}

handler();
