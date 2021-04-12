/**
* create by zhangxiang on 2021-04-12 11:28
* 类注释：
* 备注：
*/
<template>
  <div class="qrcode">
    <button @click="clickCode">打开相机</button>
    <qrcode-reader
        :qrcode="qrcode"
        v-show="qrcode"
        :camera="camera"
        :torchActive="torchActive"
        @switchCamera="switchCamera"
        @ClickFlash="ClickFlash"
        @turnCameraOff="turnCameraOff"
        @onDecode="onDecode"
        @onInit="onInit"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import qrcodeReader from "@/components/qr/qrcodeReader";

export default {
  name: "index",
  components: {
    qrcodeReader
  },
  data() {
    return {
      qrcode: false,
      torchActive: false,
      camera: 'off',
    }
  },
  mounted() {
  },
  methods: {
    // 打开相机
    clickCode() {
      // camera:: 'rear'--前摄像头，'front'后摄像头，'off'关闭摄像头，会获取最后一帧显示，'auto'开始获取摄像头
      this.qrcode = true
      this.camera = 'rear'
    },
    // 扫码结果回调
    onDecode(result) {
      console.log(result)
      this.turnCameraOff()
    },
    // 相机反转
    switchCamera() {
      switch (this.camera) {
        case 'front':
          this.camera = 'rear'
          break
        case 'rear':
          this.camera = 'front'
          break
        default:
      }
    },
    // 关闭相机？？？？？？
    turnCameraOff() {
      this.camera = 'off'
      this.qrcode = false
    },
    // 打开手电筒
    ClickFlash() {
      switch (this.torchActive) {
        case true:
          this.torchActive = false
          break
        case false:
          this.torchActive = true
          break
        default:
      }
    },
    // 检查是否调用摄像头
    async onInit(promise) {
      console.log(promise)
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
        } else if (error.name === 'NotAllowedError') {
          this.errorMessage = 'Hey! I need access to your camera'
        } else if (error.name === 'NotFoundError') {
          this.errorMessage = 'Do you even have a camera on your device?'
        } else if (error.name === 'NotSupportedError') {
          this.errorMessage =
              'Seems like this page is served in non-secure context (HTTPS, localhost or file://)'
        } else if (error.name === 'NotReadableError') {
          this.errorMessage =
              "Couldn't access your camera. Is it already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.errorMessage =
              "Constraints don't match any installed camera. Did you asked for the front camera although there is none?"
        } else {
          this.errorMessage = 'UNKNOWN ERROR: ' + error.message
        }
        this.$message.error(this.errorMessage)
      }
    },
  },

}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
