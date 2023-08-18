// options: {
//     caseInsensitive: boolean, 大小写不敏感
//     wholeWord: boolean, 全词匹配
//     global: boolean 匹配全部
//     castTolowerCase: boolean, 规则转换为小写
//     castToUpperCase: boolean, 规则转换为大写
// }

// 默认配置
const _options = {
  caseInsensitive: false, // 大小写敏感
  wholeWord: true, // 全词匹配
  global: true, // 匹配全部
  castTolowerCase: false, // 规则转换为小写
  castToUpperCase: false, // 规则转换为大写
};

const transformRules = (rules, options = _options) => {
  return transformToRegex(rules, options);
};

// 将字符串传唤为正则匹配规则
// (array): array {}
function transformToRegex(rules, options) {
  let option = "";
  // 添加大小写不敏感
  if (options.caseInsensitive) {
    option += "i";
  }
  // 添加全局匹配
  if (options.global) {
    option += "g";
  }
  return rules.map((rule) => {
    let processedRule = rule;
    // 转换为小写
    if (options.castTolowerCase) {
      processedRule = processedRule.toLowerCase();
    }
    // 转换为大写
    if (options.castToUpperCase) {
      processedRule = processedRule.toUpperCase();
    }
    // 添加全词匹配 边界
    if (options.wholeWord) {
      processedRule = "\\b" + processedRule + "\\b";
    }
    return new RegExp(processedRule, option);
  });
}

// console.log(
//   transformRules(["small poop", "medium poop", "big poop", "huge poop"])
// );

exports.transformRules = transformRules;
