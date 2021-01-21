/**
 * create by zhangxiang on 2020/12/20 10:33
 * 类注释：复制内容
 *  <button v-copy="copyText">复制</button>
 * 备注：
 */

const copy = {
    bind(el, {value}) {
        el.$value = value // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
        el.handler = () => {
            if (!el.$value) {
                // 值为空的时候，给出提示。可根据项目UI仔细设计
                console.log('无复制内容')
                return
            }
            // 动态创建 textarea 标签
            const textarea = document.createElement('textarea')
            // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
            textarea.readOnly = 'readonly'
            textarea.style.position = 'absolute'
            textarea.style.left = '-9999px'
            // 将要 copy 的值赋给 textarea 标签的 value 属性
            textarea.value = el.$value
            // 将 textarea 插入到 body 中
            document.body.appendChild(textarea)
            // 选中值并复制
            textarea.select()
            const result = document.execCommand('Copy')
            if (result) {
                console.log('复制成功') // 可根据项目UI仔细设计
            }
            document.body.removeChild(textarea)
        }
        // 绑定点击事件，就是所谓的一键 copy 啦
        el.addEventListener('click', el.handler)
    },
    // 当传进来的值更新的时候触发
    componentUpdated(el, {value}) {
        el.$value = value
    },
    // 指令与元素解绑的时候，移除事件绑定
    unbind(el) {
        el.removeEventListener('click', el.handler)
    }
}

export default copy
