import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const faviconPath = path.join(__dirname, "favicon");

// remove favicon directory
if (fse.existsSync(faviconPath)) {
  fse.rmdir(faviconPath, { recursive: true, force: true });
}
