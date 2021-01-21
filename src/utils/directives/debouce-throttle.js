/**
 * create by zhangxiang on 2020/12/17 15:25
 * 类注释：
 * 防抖  触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 <button v-debounce="handleClick"></button>
 节流   高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 <button v-throttle="handleClick"></button>

 使用方法1
 <button v-debounce="handleClick">方法1</button>
 使用方法2
 <button v-debounce="{fun: 'handleClick', event: 'click', args: 'test'}"></button>
 使用方法3
 <button v-debounce.dblclick.stop="handleDblclick"></button>

 event    String    false    click    事件名称
 args    Any    false    null    附加参数
 wait    Number    false    200    等待时间
 * 备注：
 */
// 存储指令所需参数
let eventParams = {}
// 支持事件对象
const hasEventKey = makeMap('click,dblclick,keyup,keydown,keypress,mouseup,mousedown,mouseover,mouseleave,scroll')

export const debounce = {
    bind(el, binding, vnode) {
        let defaultConfig = initEventParams(binding)
        eventParams = defaultConfig
        bindElementEvent(el, vnode.context, 'debounce')
    },
    update(el, binding, vnode) {
        let defaultConfig = initEventParams(binding)
        eventParams = defaultConfig
    }
}

export const debounceTime = {
    inserted(el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, binding.value || 1000)
            }
        })
    }
}

export const throttle = {
    bind(el, binding, vnode) {
        let defaultConfig = initEventParams(binding)
        eventParams = defaultConfig
        bindElementEvent(el, vnode.context, 'throttle')
    },
    update(el, binding, vnode) {
        let defaultConfig = initEventParams(binding)
        eventParams = defaultConfig
    }
}

// 初始化指令参数
function initEventParams(binding) {
    let defaultConfig = {
        fun: '',
        event: 'click',
        args: '',
        wait: 1000,
        modifiers: {}
    }
    let modifierList = Object.keys(binding.modifiers).filter(key => binding.modifiers[key])
    defaultConfig.modifierList = binding.modifiers
    if (modifierList.length > 0) {
        let eventArr = modifierList.filter(vv => hasEventKey(vv))
        defaultConfig.event = eventArr.length === 0 ? 'click' : modifierList[0]
    }
    if (isObject(binding.value)) {
        Object.assign(defaultConfig, binding.value)
    } else if (isFunction(binding.value)) {
        defaultConfig.fun = binding.expression
    }
    return defaultConfig
}

function bindElementEvent(el, context, type) {
    let {fun, event, args, wait, modifiers} = eventParams
    if (!isFunction(context[fun])) {
        console.warn(`方法名【${fun}】在组件中未定义`)
        return
    }
    // el.removeEventListener(event, noop)
    if (type === 'debounce') {
        el.addEventListener(event, debounced(e => {
            if (modifiers.stop) e.stopPropagation();
            if (modifiers.prev) e.preventDefault()
            context[fun].call(null, e, args)
        }, wait))
    } else if (type === 'throttle') {
        el.addEventListener(event, throttled(e => {
            if (modifiers.stop) e.stopPropagation();
            if (modifiers.prev) e.preventDefault()
            context[fun].call(null, e, args)
        }, wait))
    }
}

export function isFunction(fun) {
    return Object.prototype.toString.call(fun) === '[object Function]'
}

export function isObject(fun) {
    return Object.prototype.toString.call(fun) === '[object Object]'
}

// 空函数
export function noop() {
}

export function makeMap(str) {
    let arr = str.split(',')
    let obj = {}
    arr.forEach(vv => {
        obj[vv] = true
    });
    return function () {
        let args = arguments
        return obj[args[0]]
    }
}

export function debounced(fn, delay = 50) {
    let timer = null
    return function () {
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

export function throttled(fn, delay = 50) {
    let originTime = new Date().getTime()
    return function () {
        let args = arguments
        let currentTime = new Date().getTime()
        if (currentTime - originTime > delay) {
            fn.apply(this, args)
            originTime = currentTime
        }
    }
}
