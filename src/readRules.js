const fs = require("fs");

// 定义一个同步函数来解析txt文件
function readRules(filePath) {
  try {
    // 使用readFileSync以同步方式读取文件内容
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n"); // 将内容按行分割

    const leftArray = [];
    const rightArray = [];

    // 遍历每一行数据
    lines.forEach((line) => {
      const parts = line.split("|"); // 将行数据按 "|" 分割
      if (parts.length === 2) {
        leftArray.push(parts[0].trim()); // 存储左侧数据
        rightArray.push(parts[1].trim()); // 存储右侧数据
      }
    });

    return {
      leftArray,
      rightArray,
    };
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

// // 定义文件路径
// const filePath = "./resources/rules/表字段替换20230814_1004.txt"; // 替换成你的文件路径

// // 调用同步函数并获取结果
// const { leftArray, rightArray } = readRules(filePath);

// // 检查结果并打印
// if (leftArray && rightArray) {
//   console.log("Left Array:", leftArray);
//   console.log("Right Array:", rightArray);
//   console.log("Left Array Length:", leftArray.length);
//   console.log("Right Array Length:", rightArray.length);
// } else {
//   console.log("An error occurred.");
// }

exports.readRules = readRules;
