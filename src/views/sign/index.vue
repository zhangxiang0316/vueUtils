/**
* create by zhangxiang on 2021-01-25 15:43
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <VueSignaturePad id="signature" width="100%" height="500px" ref="signaturePad" :options="options"/>
    <el-button class="btn btn-outline-secondary" @click="undo">上一步</el-button>
    <el-button class="btn btn-outline-secondary" @click="clear">清空</el-button>
    <el-button class="btn btn-outline-primary" @click="save">保存</el-button>
    <el-button class="btn btn-outline-primary" @click="change">改颜色</el-button>
    <el-button class="btn btn-outline-primary" @click="savePng">保存png</el-button>
    <el-button class="btn btn-outline-primary" @click="saveJpg">保存jpg</el-button>
    <el-button class="btn btn-outline-primary" @click="saveSvg">保存svg</el-button>
    <img :src="imgsrc" style="width: 200px;height: 100px;background: white">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      options: {
        penColor: "#c0f",
      },
      imgsrc: ""
    }
  },
  computed: {},
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature()
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const {isEmpty, data} = this.$refs.signaturePad.saveSignature();
      this.imgsrc = data
      console.log(isEmpty);
      console.log(data);
    },
    change() {
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      let color = "rgb(" + r + "," + g + "," + b + ")";
      this.options = {
        penColor: color
      };
    },
    savePng() {

      console.log("------>", this.$refs.signaturePad.saveSignature("image/png"))
      // if (this.$refs.signaturePad.isEmpty()) {
      //   alert("Please provide a signature first.");
      // } else {
      //   let dataURL = this.$refs.signaturePad.signaturePad.toDataURL();
      //   this.download(dataURL, "signature.png");
      // }
    },

    saveJpg() {
      console.log("------>", this.$refs.signaturePad.saveSignature("image/jpeg"))
      // if (this.$refs.signaturePad.isEmpty()) {
      //   alert("Please provide a signature first.");
      // } else {
      //   let dataURL = this.$refs.signaturePad.toDataURL("image/jpeg");
      //   this.download(dataURL, "signature.jpg");
      // }
    },

    saveSvg() {
      console.log("------>", this.$refs.signaturePad.saveSignature("image/svg+xml"))
      // if (this.$refs.signaturePad.isEmpty()) {
      //   alert("Please provide a signature first.");
      // } else {
      //   let dataURL = this.$refs.signaturePad.toDataURL('image/svg+xml');
      //   this.download(dataURL, "signature.svg");
      // }
    },

    download(dataURL, filename) {
      if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1) {
        window.open(dataURL);
      } else {
        var blob = this.dataURLToBlob(dataURL);
        var url = window.URL.createObjectURL(blob);

        var a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
      }
    },
    dataURLToBlob(dataURL) {
      var parts = dataURL.split(';base64,');
      var contentType = parts[0].split(":")[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;
      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], {type: contentType});
    },
  },


  activated() {
  },
  mounted() {
  },
  created() {
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
  radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>