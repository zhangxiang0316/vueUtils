/**
* create by zhangxiang on 2020-12-25 09:44
* 类注释：
* 备注：
*/
<template>
  <div class="form">
    <el-header class="mheader" >
      <div style="float: left;margin-left: 20px;font-size: 25px">表单拖拽系统</div>
      <div style="text-align: right;">
        <el-button @click="showDialog=!showDialog"> 查看json数据</el-button>
        <el-button @click="showSetJson=!showSetJson"> 导入Json数据</el-button>
        <el-button @click="exportVueFile"> 导出vue文件</el-button>
        <el-button @click="copyJson" v-copy="copyFile"> 复制代码</el-button>
        <el-button @click="clearPage"> 清空页面</el-button>
        <el-button @click="showVue=!showVue"> 运行</el-button>
      </div>

    </el-header>
    <div class="index">
      <div class="left">
        <el-scrollbar>
          <vuedraggable @end="end" :sort="false">
            <transition-group>
              <el-button
                  v-for="item in buttonList"
                  :eType="item.eType"
                  :key="item.name"
                  size="mini"
                  style="width:70px">
                {{ item.name }}
              </el-button>
            </transition-group>
          </vuedraggable>
        </el-scrollbar>
      </div>
      <div class="center" ref="efContainer">
        <el-scrollbar>
          <m-form
              ref="mForm"
              :canDraggable="true"
              :formData="formData"
              :formCols="formCols"
              :rules="rules"
              @formItemClick="formItemClick"
              @formItemDbClick="formItemDbClick">
          </m-form>
        </el-scrollbar>
      </div>
      <div class="right">
        <m-form
            ref="rightForm"
            size="mini"
            labelWidth="120px"
            labelPosition="top"
            @event="event"
            :formData="formSetData"
            :formCols="formSetCols">
          <template #options="data">
            <div v-for="(item,index) in data.data.options">
              <el-row>
                <el-col :span="10">
                  <el-input placeholder="label" v-model="item.label"></el-input>
                </el-col>
                <el-col :span="10">
                  <el-input placeholder="value" v-model="item.value"></el-input>
                </el-col>
                <el-col :span="2" :offset="2">
                  <i class="el-icon-delete" @click="data.data.options.splice(index,1)"></i>
                </el-col>
              </el-row>
            </div>
            <el-button @click="data.data.options.push({label:'',value:''})">新增</el-button>
          </template>
          <template #tableCols="data">
            <div v-for="(item,index) in data.data.tableCols">
              <el-row>
                <el-col :span="10">
                  <el-input placeholder="label" v-model="item.label"></el-input>
                </el-col>
                <el-col :span="10">
                  <el-input placeholder="value" v-model="item.prop"></el-input>
                </el-col>
                <el-col :span="2" :offset="2">
                  <i class="el-icon-delete" @click="data.data.tableCols.splice(index,1)"></i>
                </el-col>
              </el-row>
            </div>
            <el-button @click="data.data.tableCols.push({label:'',prop:''})">新增</el-button>
          </template>
          <template #tableData="data">
            <div v-for="(item,index) in data.data.tableData" style="margin-bottom: 20px">
              <div v-for="(col,key) in data.data.tableCols">
                <el-row>
                  <el-col :span="10">
                    <div placeholder="key" >{{col.prop}}:</div>
                  </el-col>
                  <el-col :span="10">
                    <el-input placeholder="value" v-model="item[col.prop]"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <i class="el-icon-delete" @click="data.data.tableData.splice(index,1)"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-button @click="data.data.tableData.push({...data.data.tableCols[0]})">新增</el-button>
          </template>
        </m-form>
      </div>
    </div>
    <el-dialog :visible.sync="showDialog">
      <el-button @click="copyJson" v-copy="JSON.stringify(formCols)"> 复制Json</el-button>
      <el-button @click="exportJson"> 导出Json</el-button>
      <json-view deep="5" :data="{formCols:formCols,rules:rules,formData:formData}"/>
    </el-dialog>
    <el-dialog :visible.sync="showVue" :fullscreen="true">
      <el-card>
        <m-form
            :formData="formData"
            :formCols="formCols"
            :rules="rules">
        </m-form>
      </el-card>
    </el-dialog>
    <el-dialog :visible.sync="showSetJson">
      <el-input type="textarea" :rows="20" v-model="jsonCols"></el-input>
      <el-button @click="setJsonOk"> 确定</el-button>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import vuedraggable from 'vuedraggable'
import mForm from "@/components/form/zxForm";
import jsonView from 'vue-json-views';
import {eType, buttonList, formSetCol, vueFile} from './type'

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
      buttonList: buttonList,
      jsonCols: '',
      showVue: false,
      showDialog: false,
      showSetJson: false,
      draggableModel: {},
      formSetData: {},
      formSetCols: [],
      formData: {},
      formCols: [[]],
      rules: {},
      index: 101
    }
  },
  computed: {
    copyFile() {
      return vueFile(this.formCols, this.rules, this.formData)
    },
  },
  methods: {
    //清空页面
    clearPage() {
      this.$confirm("是否要清空页面", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.formCols = [[]]
        this.formData = {};
        this.rules = {}
        this.formSetCols = []
      })
    },
    //必填校验添加
    event(params) {
      if (params.prop === "isRule" && params.value) {
        this.$set(this.rules, params.data.prop, {
          required: true,
          message: params.data && params.data.tipMessage ? params.data.tipMessage : "值不能为空",
          trigger: 'blur'
        })
      } else if (params.prop === "isRule" && !params.value) {
        this.$refs.mForm.reset()
        this.$set(this.rules, params.data.prop, {})
        delete this.rules[params.data.prop]
      }
    },
    //复制json数据
    copyJson() {
      this.$message({
        type: "success",
        message: "复制成功"
      })
    },
    //导出json数据
    exportJson() {
      let datastr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        formCols: this.formCols,
        formData: this.formData,
        rules: this.rules
      }, null, '\t'));
      let downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute("href", datastr);
      downloadAnchorNode.setAttribute("download", 'data.json')
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      this.$message.success("正在下载中,请稍后...")
    },
    //导出vue文件
    exportVueFile() {
      let datastr = "data:text/json;charset=utf-8," + encodeURIComponent(vueFile(this.formCols, this.rules, this.formData));
      let downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute("href", datastr);
      downloadAnchorNode.setAttribute("download", 'form.vue')
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      this.$message.success("正在下载中,请稍后...")
    },
    //设置json数据
    setJsonOk() {
      this.formCols = JSON.parse(this.jsonCols)
      this.showSetJson = false
    },
    //拖拽结束设置
    end(evt) {
      console.log(evt)
      let type = evt.item.attributes.eType.nodeValue,
          left = evt.originalEvent.clientX,
          top = evt.originalEvent.clientY,
          efContainer = this.$refs.efContainer,
          containerRect = efContainer.getBoundingClientRect();
      if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
        this.$message.error("请把节点拖入到画布中")
        return
      }
      this.setFormCols(type)
    },
    setFormCols(type) {
      let item = JSON.parse(JSON.stringify(eType[type]));
      item.prop = `prop${this.index}`
      this.index++
      this.formSetCols = formSetCol[item.mType || item.eType]
      this.formSetData = item
      let length = this.formCols.length
      this.formCols[length - 1].push(item)
      this.$nextTick(() => {
        let container = this.$refs.efContainer
        container.scrollTop = container.scrollHeight
      })
    },
    //选中设置属性
    formItemClick(item) {
      this.formSetCols = formSetCol[item.mType || item.eType]
      this.formSetData = item
    },
    //双击删除
    formItemDbClick(item) {
      this.$confirm("是否要删除此项", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let length = this.formCols.length
        let index = this.formCols[length - 1].findIndex(i => i == item)
        this.formCols[length - 1].splice(index, 1)
      })
    },
  },
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.mheader {
  position: fixed;
  padding: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: white;
  z-index: 99;
  border-bottom: 1px solid #999;
}

.el-button {
  margin: 10px;
}

.index {
  padding-top: 60px;
  display: flex;
  overflow: hidden;
  height: 650px;

  .left {
    width: 200px;
    overflow-y: scroll;
  }

  .center {
    overflow-y: scroll;
    flex: 1;
    padding: 20px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    background-image: url("../../assets/grid.png");
  }

  .right {
    overflow-y: scroll;
    padding: 10px;
    width: 300px;
  }
}
</style>
