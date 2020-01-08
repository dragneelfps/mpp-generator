const writeToFile = require("./writeToFile");
const createDir = require("./createDir");
const renderFile = require("./renderFile");

module.exports = (input) => {

  createDir(commonSrcs);

  if (input.commonJvm) {
    createDir(jvmSrcs);
  }

  if (input.commonAndroid) {
    createDir(androidSrcs);
  }

  // Create build.gradle.kts
  const variables = {
    jvm: input.commonJvm
  };

  const build = renderFile("common.build_gradle.kts.mustache", variables);

  writeToFile("common/build.gradle.kts", build);

};

const commonSrcs = src("common/src/commonMain").concat(
    src("common/src/commonTest"));

const jvmSrcs = src("common/src/jvmMain").concat(src("common/src/jvmTest"));

const androidSrcs = src("common/src/androidMain").concat(src(
    "common/src/androidTest"));

function src(srcPath) {
  return [srcPath + "/kotlin", srcPath + "/resources"];
}
