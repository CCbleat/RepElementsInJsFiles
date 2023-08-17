const fs = require("fs");

function readRules(filePath) {
  return new Promise((resolve, reject) => {
    // 使用 fs.readFile 读取文件内容
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // 如果发生错误，reject Promise 并传递错误信息
        reject(err);
        return;
      }

      // 分割文件内容的行
      const lines = data.trim().split("\n");

      // 定义数组用于存放左侧和右侧数据
      const leftArray = [];
      const rightArray = [];

      // 遍历每一行数据
      lines.forEach((line) => {
        // 根据"&"分割数据块
        const dataBlocks = line.split("&");
        dataBlocks.forEach((dataBlock) => {
          // 根据"|"分割数据
          const keyValue = dataBlock.split("|");
          if (keyValue.length === 2) {
            const [key, value] = keyValue;
            if (key && value) {
              // 存储到数组中
              leftArray.push(key);
              // slice 用于去除最后一个字符 \r换行符的一部分
              rightArray.push(value.slice(0, value.length - 1));
            }
          }
        });
      });

      // 解析完成后，resolve Promise 并传递左右数组
      resolve({ leftArray, rightArray });
    });
  });
}

// const _filePath = "./resources/rules/表字段替换20230814_1004.txt";

// 调用函数
// readRules(_filePath)
//   .then((result) => {
//     console.log("Left Array:", result.leftArray);
//     console.log("Right Array:", result.rightArray);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

exports.readRules = readRules;
