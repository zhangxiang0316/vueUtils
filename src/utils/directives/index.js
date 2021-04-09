import copy from './copy'
import emoji from './emoji'
import longpress from './longpress'
import waterMarker from './waterMarker'
import draggable from './draggable'
import permission from "./permission";
import maxLen from "./maxLen";
import {debounce,throttle,debounceTime} from "./debouce-throttle";
import clickOutside from "./clickOutside";
import inputNumber from "./inputNumber";
import dialogSize from './dialogSize'
import clampy from "./clampy";


// 自定义指令
const directives = {
    copy,
    emoji,
    longpress,
    debounce,
    throttle,
    debounceTime,
    waterMarker,
    draggable,
    permission,
    maxLen,
    clickOutside,
    inputNumber,
    dialogSize,
    clampy
}
// 这种写法可以批量注册指令
export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    }
}
