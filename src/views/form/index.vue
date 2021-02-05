/**
* create by zhangxiang on 2020-12-25 09:44
* 类注释：
* 备注：
*/
<template>
  <div>
    <el-header style="background: #63a35c">
      <el-button @click="showDialog=!showDialog"> 查看json数据</el-button>
      <el-button @click="showSetJson=!showSetJson"> 导入Json数据</el-button>
    </el-header>
    <el-dialog :visible.sync="showDialog">
      <el-button @click="copyJson" v-copy="JSON.stringify(formCols)"> 复制Json</el-button>
      <el-button @click="exportJson"> 导出Json</el-button>
      <json-view :data="formCols"/>
    </el-dialog>
    <el-dialog :visible.sync="showSetJson">
      <el-input type="textarea" :rows="20" v-model="jsonCols"></el-input>
      <el-button @click="setJsonOk"> 确定</el-button>
    </el-dialog>
    <div class="index">
      <div class="left">
        <vuedraggable @end="end" @start="start" :sort="false">
          <el-row>
            <el-button>输入框</el-button>
          </el-row>
          <el-row>
            <el-button>按钮</el-button>
          </el-row>
          <el-row>
            <el-button>单选</el-button>
          </el-row>
          <el-row>
            <el-button>单选按钮</el-button>
          </el-row>
          <el-row>
            <el-button>多选</el-button>
          </el-row>
          <el-row>
            <el-button>多选按钮</el-button>
          </el-row>
          <el-row>
            <el-button>InputNumber</el-button>
          </el-row>
          <el-row>
            <el-button>日期</el-button>
          </el-row>
          <el-row>
            <el-button>下拉框</el-button>
          </el-row>
          <el-row>
            <el-button>时间选择器</el-button>
          </el-row>
          <el-row>
            <el-button>Switch</el-button>
          </el-row>
        </vuedraggable>
      </div>
      <div class="center" ref="efContainer">
        <m-form
            ref="mForm"
            :formData="formData"
            :formCols="formCols"
            :rules="rules"
            @formItemClick="formItemClick">
        </m-form>
      </div>
      <div class="right">
        <m-form
            labelPosition="top"
            ref="mForm"
            :formData="formSetData"
            :formCols="formSetCols"
        >
        </m-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vuedraggable from 'vuedraggable'
import mForm from "@/components/form/zxForm";
import jsonView from 'vue-json-views';

export default {
  name: "index",
  components: {
    vuedraggable,
    mForm,
    jsonView
  },
  props: {},
  data() {
    return {
      jsonCols: '',
      showDialog: false,
      showSetJson: false,
      draggableModel: {},
      draggableOptions: {
        preventOnFilter: false,
        sort: false,
        disabled: false,
        ghostClass: 'tt',
        // 不使用H5原生的配置
        forceFallback: true,
      },
      formSetData: {},
      formSetCols: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{
          label: "是否展示label",
          eType: "Switch",
          prop: 'noFormItem',
        }],
        [{label: "options", eType: "Input", prop: 'options'}],
      ],
      formData: {},
      formCols: [[]],
      rules: {},
    }
  },
  computed: {},
  methods: {
    copyJson() {
      this.$message({
        type: "success",
        message: "复制成功"
      })
    },
    exportJson() {
      var datastr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.formCols, null, '\t'));
      var downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute("href", datastr);
      downloadAnchorNode.setAttribute("download", 'formCols.json')
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      this.$message.success("正在下载中,请稍后...")
    },
    setJsonOk() {
      this.formCols = JSON.parse(this.jsonCols)
      this.showSetJson = false
    },
    end(evt) {
      let type = evt.item.innerText
      let screenX = evt.originalEvent.clientX,
          screenY = evt.originalEvent.clientY
      let efContainer = this.$refs.efContainer
      var containerRect = efContainer.getBoundingClientRect()
      var left = screenX, top = screenY
      if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
        this.$message.error("请把节点拖入到画布中")
        return
      }
      this.setFormCols(type)
    },
    setFormCols(type) {
      let item = {};
      switch (type) {
        case '输入框':
          item = {eType: 'Input', label: "Input", prop: 'name1', span: 24}
          break
        case '按钮':
          item = {eType: 'Button', value: "提交", type: "success", prop: 'submit', span: 2,}
          break
        case "单选":
          item = {
            eType: 'Radio',
            label: "Radio",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date10',
            span: 24,
          }
          break
        case "单选按钮":
          item = {
            eType: 'RadioButton',
            label: "RadioButton",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date11',
            span: 24,
          }
          break
        case "多选":
          item = {
            eType: 'Check',
            label: "CheckBox",
            options: '手机,电脑',
            prop: 'date13',
            span: 24,
          }
          break
        case "多选按钮":
          item = {
            eType: 'CheckButton',
            label: "CheckButton",
            noShow: false,
            options: ['手机', '电脑'],
            prop: 'date15',
            span: 24,
          }
          break
        case "InputNumber":
          item = {
            eType: 'InputNumber',
            label: "InputNumber",
            prop: 'date16',
            span: 24,
          }
          break
        case "日期":
          item = {
            eType: 'DatePicker',
            type: 'date',
            label: "date",
            valueFormat: "yyyy-MM-dd",
            prop: 'date19',
            span: 24,
          }
          break
        case "下拉框":
          item = {
            eType: 'Select',
            label: "Select",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date17',
            span: 24,
          }
          break
        case "时间选择器":
          item = {
            eType: 'TimePicker',
            label: "TimePicker",
            prop: 'date24',
            noShow: false,
            span: 24,
          }
          break
        case "Switch":
          item = {
            eType: 'Switch',
            label: "Switch",
            prop: 'date25',
            span: 24,
          }
          break
      }
      this.formSetData = item
      let length = this.formCols.length
      this.formCols[length - 1].push(item)
    },
    formItemClick(item) {
      this.formSetData = item
    },
    start(evt) {

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
.el-button {
  margin: 10px;
}

.index {
  display: flex;
  height: 100%;

  .left {
    width: 200px;
  }

  .center {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    background-image: url("../../assets/grid.png");
  }

  .right {
    padding: 10px;
    width: 300px;
  }
}
</style>