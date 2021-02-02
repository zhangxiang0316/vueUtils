/**
 * create by zhangxiang on 2021-02-01 14:12
 * 类注释：
 * 备注：
 */

const compiler = require('vue-template-compiler')

exports.handlers = {
    beforeParse: function (e) {
        if (/\.vue$/.test(e.filename)) {
            var output = compiler.parseComponent(e.source)
            e.source = output.script ? output.script.content : ''
        }
    }
}