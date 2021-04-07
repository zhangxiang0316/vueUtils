/**
* create by zhangxiang on 2021-04-02 09:12
* 类注释：
* 备注：
*/
<template>
  <div class="draggableTest">
    <el-header class="mheader" style="text-align: right">
      <el-button @click="showDialog=!showDialog"> 查看json数据</el-button>
      <el-button @click="showSetJson=!showSetJson"> 导入Json数据</el-button>
      <el-button @click="exportVueFile"> 导出vue文件</el-button>
      <el-button @click="copyJson" v-copy="copyFile"> 复制代码</el-button>
      <el-button @click="clearPage"> 清空页面</el-button>
      <el-button @click="showVue=!showVue"> 运行</el-button>
    </el-header>
    <div class="index">
      <div class="left">
        <el-scrollbar>
          <vuedraggable
              v-model="buttonList"
              :animation="1000"
              :group="{ name:'people', pull:'clone',put:false}"
              :sort="false"
              ghostClass="ghost">
            <transition-group>
              <el-button
                  v-for="item in buttonList"
                  :eType="item.eType"
                  :key="item.labels||item.label"
                  size="mini"
                  style="width:70px;margin-top: 20px">
                {{ item.labels || item.label }}
              </el-button>
            </transition-group>
          </vuedraggable>
        </el-scrollbar>
      </div>
      <div class="center" ref="efContainer">
        <el-scrollbar>
          <el-form
              ref="elForm"
              :rules="rules"
              :model="formData"
              label-width="120px"
              label-position="right">
            <el-row>
              <vuedraggable
                  v-model="list"
                  chosenClass="chosen"
                  v-bind="{group:'people', ghostClass: 'ghost'}"
                  style="height: 500px"
                  @add="handleWidgetAdd">
                <el-col
                    v-for="(item,index) in list"
                    v-if="!item.noShow"
                    :span="item.span"
                    :key="item.prop"
                    :offset="item.offset"
                    @click.native="formItemClick(item)"
                    @dblclick.native="formItemDbClick(index)">
                  <el-form-item
                      :label="item.noFormItem?'':item.label"
                      :prop="item.prop">
                    <m-element :item="item" :form-data="formData" @event="event"></m-element>
                  </el-form-item>
                </el-col>
              </vuedraggable>
            </el-row>
          </el-form>

        </el-scrollbar>
      </div>
      <div class="right">
        <zx-form
            ref="rightForm"
            size="mini"
            labelWidth="120px"
            labelPosition="right"
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
        </zx-form>
      </div>
    </div>

    <el-dialog :visible.sync="showDialog">
      <el-button @click="copyJson" v-copy="JSON.stringify(list)"> 复制Json</el-button>
      <el-button @click="exportJson"> 导出Json</el-button>
      <json-view deep="5" :data="{formCols:list,rules:rules,formData:formData}"/>
    </el-dialog>
    <el-dialog :visible.sync="showVue" :fullscreen="true">
      <el-card>
        <m-form
            :formData="formData"
            :formCols="[list]"
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
import {buttons, formSetCol, vueFile} from './type'
import vuedraggable from 'vuedraggable'
import mElement from '@/components/form/components'
import jsonView from 'vue-json-views';
import mForm from "@/components/form/zxForm";

export default {
  name: "draggableTest",
  components: {
    vuedraggable,
    mElement,
    jsonView,
    mForm
  },
  props: {},
  data() {
    return {
      jsonCols: '',
      showVue: false,
      showDialog: false,
      showSetJson: false,
      formData: {},
      buttonList: buttons,
      list: [],
      formSetData: {},
      formSetCols: [],
      formCols: [],
      rules: {},
    }
  },
  computed: {
    copyFile() {
      return vueFile(this.formCols, this.rules, this.formData)
    },
  },
  methods: {
    formItemClick(item) {
      this.formSetCols = formSetCol[item.mType || item.eType]
      this.formSetData = item
    },
    //双击删除
    formItemDbClick(index) {
      this.$confirm("是否要删除此项", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.list.splice(index, 1)
      })
    },
    //清空页面
    clearPage() {
      this.$confirm("是否要清空页面", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.list = []
        this.formData = {};
        this.rules = {}
        this.formSetCols = []
      })
    },
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
    handleWidgetAdd(evt) {
      console.log('拖拽到容器事件-add', evt)
      const newIndex = evt.newIndex // 当前拖拽到容器的元素索引
      const to = evt.to
      console.log('拖拽到容器事件-to', to)
      console.log('拖拽到容器事件-之前的data.list', this.list)
      this.list[newIndex].prop = `prop_${new Date().getTime()}`
      console.log(this.list[newIndex])
      let item = this.list[newIndex]
      this.formSetData = item
      this.formSetCols = formSetCol[item.mType || item.eType]
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
.ghost {
  background: #F56C6C;
  border: 2px solid #F56C6C;
  outline-width: 0;
  height: 3px;
  box-sizing: border-box;
  font-size: 0;
  content: '';
  overflow: hidden;
  padding: 0;
  margin: 2px;
}
</style>

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

.chosen {
  background-color: #eaffea !important;
}
</style>
