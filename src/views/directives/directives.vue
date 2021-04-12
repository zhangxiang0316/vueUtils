<template>
  <div class="hello" v-waterMarker="waterMarker">
    <p v-clampy="2" style="width: 200px">Long text to clamp here Long text to clamp hereLong text to clamp hereLong text
      to clamp here</p>
    <div>
      <el-button v-debounce="debounceClick" v-click-outside="clickOutside">防抖</el-button>
      <el-button v-throttle="debounceClick">节流</el-button>
    </div>
    <div>
      <el-button v-copy="copyText" @click="copyOK">复制</el-button>
    </div>
    <div>
      <el-input placeholder="不能输入表情" type="text" v-model="copyText" v-emoji/>
    </div>

    <div>
      <el-input placeholder="只能输入正整数" v-model="inputNumber" v-inputNumber/>
    </div>
    <div>
      <el-button v-longpress="longpress">长按</el-button>
    </div>
    <div>
      <el-button v-permission="'1'">权限按钮1</el-button>
      <!-- 不显示 -->
      <el-button v-permission="'5'">权限按钮2</el-button>
    </div>
    <div>
      <el-button @click="dialogVisible = true">展示dialog</el-button>
    </div>
    <el-dialog
        title="提示"
        v-draggable
        v-dialogSize
        :visible.sync="dialogVisible"
        width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      inputNumber: "",
      canClick: true,
      dialogVisible: false,
      waterMarker: {text: '版权所有', textColor: 'rgba(180, 180, 180, 0.4)'},
      copyText: "fdsafsdaffdsa"
    }
  },
  methods: {
    copyOK() {
      this.$message.success('复制成功')
    },
    clickOutside() {
      console.log("------>", '点击了外面')
    },
    longpress() {
      console.log("长按指令生效")
    },
    handleClick() {
      console.log("----handleClick-----")
    },
    debounceClick() {
      console.log('只触发一次')
    }
  },
  created() {
  }
}
</script>
<style scoped>
/*.hello {
  position: absolute;
}*/

.el-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  box-sizing: border-box;
  width: 50%;
  height: 100px;
}

div {
  margin-top: 30px;
}
</style>
