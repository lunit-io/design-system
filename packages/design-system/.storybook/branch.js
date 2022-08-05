const path = require("path");
const fs = require("fs");

const PATH_SEP = path.sep;
const REF_BRANCH = /^ref: refs\/heads\/(.*)\n/;

function getRepoDirname(startPath = module.parent.filename) {
  if (!startPath.length) {
    throw new Error("No git repository found");
  }

  const gitDirname = path.resolve(startPath, ".git");

  if (!fs.existsSync(gitDirname)) {
    const paths = startPath.split(PATH_SEP);
    paths.pop();
    return getRepoDirname(paths.join(PATH_SEP));
  }

  return gitDirname;
}

function getBranchName() {
  const repoDirname = getRepoDirname();

  const head = fs.readFileSync(path.resolve(repoDirname, "HEAD"), "utf8");
  const branchName = head.match(REF_BRANCH)?.[1];

  return branchName ?? head.trim();
}

function getChromaticBranchName() {
  return getBranchName()?.toLowerCase().replace("/g", "-");
}

module.exports = {
  getBranchName,
  getChromaticBranchName,
};
