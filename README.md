# RepElementsInJsFiles

按规则替换js文件中的元素的自动化脚本

## 项目运行

1. git clone 项目到本地
2. npm install 安装依赖
3. 进入控制台修改配置项
4. **修改配置项后**(请一定记得改)，在控制台运行 node xxx/index.js

## 项目结构

resources: 资源文件夹

* rules: 配置文件.txt

src: 源码文件夹

* index.js: 主程序
* readFiles.js: 读取符合要求的文件
* readRules.js: 读取规则文件
* transform.js: 转换读取的规则
* autoReplace.js: 按照规则替换文件内容

## 运行过程中的预期

* 可以在控制台中查看到相关信息
* 会出现进度 => 当前进度:  1067 / 1269
* 会出现替换成功的文件名 => 替换完成:  ../../src/utils/Yyb.js
* 是否有替换发生 => Replacement results: [ { file: '../../a5-web-front/src/utils/Yyb.js', hasChanged: true } ] haschanged: true or false means if there were replacements happened in the file
