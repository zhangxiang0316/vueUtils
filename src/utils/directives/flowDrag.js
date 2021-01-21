/**
 * create by zhangxiang on 2020/12/21 13:28
 * 类注释：
 * 备注：
 */
const flowDrag={
    bind(el, binding, vnode, oldNode) {
        if (!binding) {
            return
        }
        el.onmousedown = (e) => {
            if (e.button == 2) {
                // 右键不管
                return
            }
            //  鼠标按下，计算当前原始距离可视区的高度
            let disX = e.clientX
            let disY = e.clientY
            el.style.cursor = 'move'

            document.onmousemove = function (e) {
                // 移动时禁止默认事件
                e.preventDefault()
                const left = e.clientX - disX
                disX = e.clientX
                el.scrollLeft += -left

                const top = e.clientY - disY
                disY = e.clientY
                el.scrollTop += -top
            }

            document.onmouseup = function (e) {
                el.style.cursor = 'auto'
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
}

export default flowDrag