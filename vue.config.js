/**
 * create by zx on 2020-6-11 9:56
 * 类注释：
 * 备注：
 */
'use strict'
const path = require('path')

//引入该插件
const CompressionWebpackPlugin = require("compression-webpack-plugin")
//匹配此 {RegExp} 的资源
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    publicPath: './',
    //  构建时的输出目录
    outputDir: 'dist',
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
    configureWebpack: config => {
        const plugins = []
        // start 生成 gzip 压缩文件
        plugins.push(
            new CompressionWebpackPlugin({
                filename: "[path].gz[query]", //目标资源名称
                algorithm: "gzip",
                test: productionGzipExtensions, //处理所有匹配此 {RegExp} 的资源
                threshold: 10240,//只处理比这个值大的资源。按字节计算(楼主设置10K以上进行压缩)
                minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
            })
        );

        // End 生成 gzip 压缩文件
        config.plugins = [...config.plugins, ...plugins];

        resolve = {
            alias: {
                '@': resolve('src'),
                'components': resolve('src/components'),
                'views': resolve('src/views'),
            },
        }
    }, //(Object | Function)
    chainWebpack: (config) => {
        //移除 prefetch 插件（解决首次进入页面所有资源预加载）
        config.plugins.delete('prefetch');
    },

    // 配置 webpack-dev-server 行为。
    devServer: {
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: true,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/pcpages': {
                target: "http://tacc.radio.cn/pcpages",
                pathRewrite: {
                    "^/pcpages": ""
                }
            },
            '/audio2020': {
                target: "http://cnvod.cnr.cn/audio2020",
                pathRewrite: {
                    "^/audio2020": ""
                }
            },
            '/getBoxList': {
                target: "http://piaofang.maoyan.com/getBoxList",
                pathRewrite: {
                    "^/getBoxList": ""
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
