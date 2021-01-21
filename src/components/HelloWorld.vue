<template>
  <div class="hello" v-waterMarker="waterMarker">
    <div>
      <button v-debounce="2000" @click="debounceClick" v-clickOutside="clickOutside">防抖</button>
    </div>
    <div>
      <button v-copy="copyText">复制</button>
    </div>

    <div>
      <input type="text" v-model="copyText" v-emoji/>
    </div>
    <div>
      <button v-longpress="longpress">长按</button>
    </div>
    <div>
      <button v-permission="'1'">权限按钮1</button>
      <!-- 不显示 -->
      <button v-permission="'5'">权限按钮2</button>
    </div>
    <div>

      <el-input type="textarea" v-model="copyText" v-maxLen></el-input>
      <el-form>
        <el-form-item>
          <el-input type="text" v-model="copyText" v-maxLen></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="dialogVisible = true">展示dialog</el-button>
    <el-dialog
        title="提示"
        v-draggable
        :visible.sync="dialogVisible"
        width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>s

<script>

export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      dialogVisible: false,
      waterMarker: {text: '版权所有', textColor: 'rgba(180, 180, 180, 0.4)'},
      copyText: "fdsafsdaffdsa"
    }
  },
  methods: {
    clickOutside() {
      console.log("clickOutside")
    },
    longpress() {
      console.log("长按指令生效")
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
