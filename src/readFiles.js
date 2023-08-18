const fs = require("fs");
const path = require("path");

// 在目录及其子目录中查找所有 .js 文件的函数，排除特定的子目录
function findJSFiles(directoryPath, fileList = []) {
  // 要排除的子目录
  // 例子 const excludedSubdirectories = ['node_modules', 'exclude_dir1', 'exclude_dir2'];
  const excludedSubdirectories = ["node_modules"];

  // 读取目录内容
  const files = fs.readdirSync(directoryPath);

  // 遍历目录中的每个文件
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      // 跳过排除的子目录
      if (excludedSubdirectories.includes(file)) {
        return;
      }

      findJSFiles(filePath, fileList);
    }
    // 匹配后缀为js的文件
    else if (fileStat.isFile() && path.extname(file) === ".js") {
      fileList.push(path.relative(__dirname, filePath));
    }
  });

  return fileList;
}

// 指定要搜索 .js 文件的目录路径
const directoryPath = "../"; // 用实际目录路径替换

// 调用 findJSFiles 函数并将结果存储在 jsFiles 数组中
const jsFiles = findJSFiles(directoryPath);

// 打印 .js 文件的数量以及它们的相对路径
console.log("JS 文件数量:", jsFiles.length);
console.log("JS 文件路径:", jsFiles);

exports.findJSFiles = findJSFiles;
