// 想一下，怎么批量读入规则 从txt文件
// 1. 读入规则
// 想一下，怎么递归js文件
// 然后用规则替换
// const replace = require("replace-in-file");
const { readRules } = require("./readRules");
const { transformRules } = require("./transformRules");

// async function temp() {
//   const { leftArray, rightArray } = await readRules(
//     "../resources/rules/表字段替换20230814_1004.txt"
//   );
//   const processedRule = transformRules(leftArray);

//   console.log(processedRule);
// const options = {
//   files: "./test.js", // Path to environment.prod.ts
//   from: [/jjdm/g, /jjmc/g], // Regex for the key-value pair
//   to: ["Big poop", "Small poop"], // What to replace it with
// };

// try {
//   const results = replace.sync(options);
//   console.log("Replacement results:", results);
// } catch (error) {
//   console.error("Error occurred:", error);
// }
// }

// temp();

// const options = {
//   files: "./test.js", // Path to environment.prod.ts
//   from: [/jjdm/g, /jjmc/g], // Regex for the key-value pair
//   to: ["Big poop", "Small poop"], // What to replace it with
// };

// try {
//   const results = replace.sync(options);
//   console.log("Replacement results:", results);
// } catch (error) {
//   console.error("Error occurred:", error);
// }

function autoReplace(options) {
  try {
    const results = replace.sync(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

exports.autoReplace = autoReplace;
