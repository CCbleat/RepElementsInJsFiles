const fs = require("fs");

const _filePath = "./resources/rules/表字段替换20230814_1004.txt";

// 读取txt文件内容
const readRules = async (filePath = _filePath) => {
  // 定义数组用于存放左侧和右侧数据
  const oldArray = [];
  const expectedArray = [];
  await fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // 分割数据行
    const lines = data.trim().split("\n");

    // 遍历每一行数据
    lines.forEach((line) => {
      // 根据"&"分割数据
      // const parts = line.split("&");

      // 如果包含"&"则跳过此轮遍历
      // 表名的替换 这里不需要
      if (line.includes("&")) {
        return;
      }
      // 根据"|"分割数据
      const keyValue = line.split("|");
      if (keyValue.length === 2) {
        const [key, value] = keyValue;
        if (key && value) {
          // 存储到数组中
          oldArray.push(key);
          // slice 用于去除最后一个字符 \r换行符的一部分
          expectedArray.push(value.slice(0, value.length - 1));
        }
      }
    });
    // return [oldArray, expectedArray];
  });
  console.log("Left Array:", oldArray);
  console.log("Right Array:", expectedArray);
  console.log("Left Array Length:", oldArray.length);
  console.log("Right Array Length:", expectedArray.length);
};

exports.readRules = readRules;
