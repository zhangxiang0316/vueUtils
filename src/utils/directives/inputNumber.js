/**
 * create by zhangxiang on 2020/12/23 13:41
 * 类注释：根据正则表达式，设计自定义处理表单输入规则的指令,这里只能输入正整数
 * 将需要校验的输入框加上 v-inputNumber 即可
 * <input type="text" v-model="note" v-inputNumber />
 * 备注：
 */

let findEle = (parent, type) => {
    return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el, type) => {
    const e = document.createEvent('HTMLEvents')
    e.initEvent(type, true, true)
    el.dispatchEvent(e)
}

const inputNumber={
    bind: function (el, binding, vnode) {
        // 正则规则可根据需求自定义
        var regRule = /[^0-9]/g
        let $inp = findEle(el, 'input')
        el.$inp = $inp
        $inp.handle = function () {
            let val = $inp.value
            $inp.value = val.replace(regRule, '')
            trigger($inp, 'input')
        }
        $inp.addEventListener('keyup', $inp.handle)
    },
    unbind: function (el) {
        el.$inp.removeEventListener('keyup', el.$inp.handle)
    }
}

export default inputNumber