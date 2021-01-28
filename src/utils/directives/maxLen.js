/**
 * create by zhangxiang on 2020/12/15 10:59
 * 类注释：
 * 备注：
 */
import {Message} from 'element-ui'

let findEle = (parent, type) => {
    return parent.tagName.toLowerCase() === type
        ? parent
        : parent.querySelector(type)
}

const trigger = (el, type) => {
    const e = document.createEvent('HTMLEvents')
    e.initEvent(type, true, true)
    el.dispatchEvent(e)
}

const maxLen = {
    bind: function (el, binding, vnode) {
        let $inp = findEle(el, 'textarea') || findEle(el, 'input')
        el.$inp = $inp
        $inp.handle = function () {
            let val = $inp.value
            if ($inp.type == 'text' && val.length > binding.value || 20) {
                $inp.value = val.substring(0, binding.value || 20)
                trigger($inp, 'input')
                clearTimeout(this.time)
                this.time = setTimeout(() => {
                    Message.error(`最多${binding.value || 20}字`)
                }, 500)
            } else if ($inp.type == 'textarea' && val.length > binding.value || 500) {
                $inp.value = val.substring(0, binding.value || 500)
                trigger($inp, 'textarea')
                clearTimeout(this.time)
                this.time = setTimeout(() => {
                    Message.error(`最多${binding.value || 500}字`)
                }, 500)
            }
        }
        $inp.addEventListener('keyup', $inp.handle)
    },
    unbind: function (el) {
        el.$inp.removeEventListener('keyup', el.$inp.handle)
    }
}

export default maxLen
