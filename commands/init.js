const prompts = require("prompts");

const createCommon = require("./../scripts/createCommon");

exports.command = "init";

exports.describe = "Generates a new MPP project";

exports.handler = handler;

const inputs = [{
  type: "text",
  name: "projectName",
  message: "Project Name:"
}, {
  type: "confirm",
  name: "commonJvm",
  message: "Common: Add JVM support?",
  initial: false
}, {
  type: "confirm",
  name: "commonAndroid",
  message: "Common: Add Android support?",
  initial: false
}];

function handler(argv) {
  (async () => {
    const input = await prompts(inputs, {onCancel});

    if (!input.__cancelled__) {
      handleInput(input);
    }
  })()
}

function handleInput(input) {
  console.log(input);

  createCommon(input);
}

function onCancel(prompt, answers) {
  console.log("Exiting....");
  answers.__cancelled__ = true;
  return false
}
