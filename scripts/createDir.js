const mkdirp = require("mkdirp");

module.exports = (dirPaths) => {
  for (const dirPath of dirPaths) {
    console.log("Creating dir " + dirPath)
    // mkdirp.sync(dirPath);
  }
};
