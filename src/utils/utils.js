/**
 * create by zhangxiang on 2021-01-27 17:24
 * 类注释：
 * 备注：
 */
function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
export function clone(data) {
    if (Array.isArray(data)) {
        let newArr = []
        for (let value of data) {
            newArr.push(clone(value))
        }
        return newArr
    } else {
        let model = {}
        for (let item in data) {
            if (data[item] instanceof Array) {
                model[item] = new Array();
                for (let i = 0; i < data[item].length; i++) {
                    if (isPlainObject(data[item][i])) {
                        model[item].push(clone(data[item][i]));
                    } else {
                        model[item].push(data[item][i])
                    }
                }
            } else {
                model[item] = data[item];
            }
        }
        return model;
    }
}