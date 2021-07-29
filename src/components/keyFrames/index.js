import keyFrames from './keyFrames'

keyFrames.install = function (Vue) {
    Vue.component(keyFrames.name, keyFrames)
}

export default keyFrames