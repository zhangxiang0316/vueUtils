// module.exports = {
//   devServer: {
//     proxy: "http://10.6.109.109:8868/perbanksrv-controller",
//   },
//   // 公共路径
//   publicPath: "./",
//   outputDir: process.env.outputDir,
// };
'use strict'
 const path = require('path')

 function resolve(dir) {
   return path.join(__dirname, dir)
 }

 module.exports = {
   // 基本路径
   publicPath: './',
   //  构建时的输出目录
   outputDir: 'bank',
   // 放置静态资源的目录
   assetsDir: 'static',
   // html 的输出路径
   indexPath: 'index.html',
   // 文件名哈希
   filenameHashing: true,
   // 是否在保存的时候使用 `eslint-loader` 进行检查。
   lintOnSave: false,
   // 是否使用带有浏览器内编译器的完整构建版本
   runtimeCompiler: false,
   //  babel-loader 默认会跳过 node_modules 依赖。
   transpileDependencies: [/* string or regex */],
   //  是否为生产环境构建生成 source map？
   productionSourceMap: true,
   //  设置生成的 HTML 中 <link rel='stylesheet'> 和 <script> 标签的 crossorigin 属性。
   crossorigin: '',
   //  在生成的 HTML 中的 <link rel='stylesheet'> 和 <script> 标签上启用 Subresource Integrity (SRI)。
   integrity: false,
   //  调整内部的 webpack 配置
   configureWebpack: () => {
     return {
       resolve: {
         alias: {
           '@': resolve('src'),
           'components': resolve('src/components'),
           'views': resolve('src/views'),
           'vue-elementui-freedomen': resolve('src/components/plug')
         },
       },
     }
   }, //(Object | Function)
   chainWebpack: (config) => {
     //移除 prefetch 插件（解决首次进入页面所有资源预加载）
     config.plugins.delete('prefetch');
   },
   // 配置 webpack-dev-server 行为。
   devServer: {
     open: process.platform === 'darwin',
     host: '0.0.0.0',
     port: 8088,
     https: false,
     hotOnly: true,
     // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
      proxy: {
       '/testApi': {
         target: "http://10.6.10.109:8868",
         changeOrigin: true,
         secure: false,
         pathRewrite: {
          '^/testApi': '/'
         }
       },
     }, // string | Object
     before: app => {
     },
     compress: true,
     disableHostCheck: true
   },
   // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
   // 在多核机器下会默认开启。
   parallel: require('os').cpus().length > 1,
   // PWA 插件的选项。
   // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
   pwa: {},
   // 三方插件的选项
   pluginOptions: {
     // ...
   }
 }


