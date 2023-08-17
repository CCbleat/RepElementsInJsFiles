const fs = require("fs");

function parseFileContent(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null, null);
      return;
    }

    const lines = data.trim().split("\n");
    const leftArray = [];
    const rightArray = [];

    lines.forEach((line) => {
      // const dataBlocks = line.split('&');
      // 如果包含"&"则跳过此轮遍历
      // 表名的替换 这里不需要
      if (line.includes("&")) {
        return;
      }
      const keyValue = line.split("|");
      if (keyValue.length === 2) {
        const [key, value] = keyValue;
        if (key && value) {
          leftArray.push(key);
          // slice 用于去除最后一个字符 \r换行符的一部分
          rightArray.push(value.slice(0, value.length - 1));
        }
      }
    });

    callback(null, leftArray, rightArray);
  });
}

const filePath = "./resources/rules/表字段替换20230814_1004.txt";

// 调用函数
parseFileContent(filePath, (err, leftArray, rightArray) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Left Array:", leftArray);
  console.log("Right Array:", rightArray);
});
