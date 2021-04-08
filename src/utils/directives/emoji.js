/**
 * create by zhangxiang on 2021-04-08 13:58
 * 类注释：禁止输入表情
 * 备注：<input type="text" v-model="copyText" v-emoji/>
 */

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

const emoji = {
  bind: function (el, binding, vnode) {
    var regRule = /[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
    let $inp = findEle(el, 'input')
    el.$inp = $inp
    $inp.handle = function () {
      let val = $inp.value
      console.log("-------", val)
      $inp.value = val.replace(regRule, '')
      trigger($inp, 'input')
    }
    $inp.addEventListener('keyup', $inp.handle)
  },
  unbind: function (el) {
    el.$inp.removeEventListener('keyup', el.$inp.handle)
  }
}

export default emoji
