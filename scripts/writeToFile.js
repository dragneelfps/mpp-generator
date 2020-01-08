const write = require("write");

module.exports = (filePath, data) => {
  console.log("Creating file " + filePath + " with data: " + data);
  // write.sync(filePath, data);
};
