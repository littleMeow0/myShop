# 项目初始化

- 技术选型：uni-app + vue3 + vite + pinia + javascript + uni-ui + scss

- 编辑器：vscode  
- 插件：
    1. uni-app-snippets (代码片段提示)
    2. uni-create-view (快速创建页面)
    3. uniapp小程序扩展 (快速文档定位)

- 项目创建：命令行创建
  npx degit dcloudio/uni-preset-vue#vite my-vue3-project

- 项目运行：
    1. pnpm dev:h5  (项目根目录的h5文件是用来运作浏览器页面的)
    2. pnpm dev:mp-weixin  (项目根目录会生成dist文件夹，用微信开发者工具打开即可)

# 文件目录

    src
        pages
        components
        composables
        service
        store
        utils
        styles
        static

# 注意

    1. 调用的 API 尽量使用 uni 官方提供的，它会根据你打包的环境自动做对应的替换，也就是自动兼容

# 遇到的问题

- 1. 使用 uni-ui，在微信小程序中查看样式不起作用 (需要重启微信开发者工具)
- 2. 在 pages 下新建页面，打包输出的微信小程序包路径不对 (pages.json路由配置路径有问题)
- 3. uni-app 提供的生命周期函数在微信中运行没有效果 (vite中配置代码压缩导致,注意vue3的语法)

# 明日计划

- 1. 封装请求
- 2. 自定义封装组件，自动导入
- 3. h5 端做请求代理
