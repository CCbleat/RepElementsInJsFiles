1. npm install 安装依赖
2. 进入控制台修改配置项
3. node xxx/index.js 在控制台运行程序

## 项目结构
resources: 资源文件夹
    - rules: 配置文件.txt

src: 源码文件夹
    - index.js: 主程序 
    - readFiles.js: 读取符合要求的文件
    - readRules.js: 读取规则文件
    - transform.js: 转换读取的规则
    - autoReplace.js: 按照规则替换文件内容