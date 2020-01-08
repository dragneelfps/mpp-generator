const mustache = require("mustache");
const path = require("path");
const fs = require('fs');

module.exports = (templateName, variables) => {
  return mustache.render(fs.readFileSync(path.resolve(__dirname, "./../templates/" + templateName)).toString(), variables);
};
