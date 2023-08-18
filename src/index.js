const { findJSFiles } = require("./readFiles");
const { readRules } = require("./readRules");
const { transformRules } = require("./transformRules");
const { autoReplace } = require("./autoReplace");

// 配置搜索路径 (即你要替换的文件所在的目录，这里使用的是相对路径，你也可以使用绝对路径)
const filesPath = "../";
// 获取需要的文件路径 array
const jsFiles = findJSFiles(filesPath);
console.log("JS 文件数量: ", jsFiles.length);

// 配置规则文件路径
const rulesPath = "../resources/rules/表字段替换20230814_1004.txt";
// 获替换取规则 和 想要替换的结果
const { leftArray, rightArray } = readRules(rulesPath);

// 转换规则配置
const transformOptions = {
  caseInsensitive: false, // 大小写敏感
  wholeWord: true, // 全词匹配
  global: true, // 匹配全部
  castTolowerCase: false, // 规则转换为小写
  castToUpperCase: false, // 规则转换为大写
};
// 转换规则
const processedRules = transformRules(leftArray, transformOptions);

const length = jsFiles.length;
for (let i = 0; i < length; i++) {
  // 配置替换规则
  const options = {
    files: jsFiles[i], // Path to environment.prod.ts
    from: processedRules, // Regex for the key-value pair
    to: rightArray, // What to replace it with
  };
  // 执行替换
  autoReplace(options);
  console.log("当前进度: ", i + 1, "/", length, "\n替换完成: ", jsFiles[i]);
}
