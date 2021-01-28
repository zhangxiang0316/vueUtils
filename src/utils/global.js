/**
 * create by zhangxiang on 2021-01-28 15:36
 * 类注释：
 * 备注：
 */

setShow = (vue, formCols, prop, show) => {
    let two = -1;
    let one = formCols.findIndex((item, i) => {
        let iIndex = item.findIndex(iItem => {
            return iItem.prop === prop
        })
        if (iIndex !== -1) {
            two = iIndex
            return true
        }
    })
    if (one === -1 || two === -1) {
        console.log('找不到设置的字段')
        return
    }
    vue.$set(formCols[one][two], 'noShow', show)
}