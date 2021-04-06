/**
* create by zhangxiang on 2021-04-02 09:12
* 类注释：
* 备注：
*/
<template>
  <div class="draggableTest">
    <el-row>
      <el-col :span="4" style="border-right: 1px solid #eee">
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
                :key="item.label"
                size="mini"
                style="width:150px;margin-top: 20px">
              {{ item.label }}
            </el-button>
          </transition-group>
        </vuedraggable>
      </el-col>
      <el-col :span="20" style="height: 500px">
        <el-form
            ref="elForm"
            :model="formData"
            label-width="120px"
            label-position="right">
          <vuedraggable
              v-model="list"
              v-bind="{group:'people', ghostClass: 'ghost'}"
              style="height: 500px"
              @add="handleWidgetAdd">
            <el-form-item
                v-for="(item,index) in list"
                :key="`item${index}`"
                :label="item.noFormItem?'':item.label"
                :prop="item.prop">
              <m-element :item="item" :form-data="formData" @event="event"></m-element>
            </el-form-item>
          </vuedraggable>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import {buttons} from './type'
import vuedraggable from 'vuedraggable'
import mElement from '@/components/form/components'

export default {
  name: "draggableTest",
  components: {
    vuedraggable,
    mElement
  },
  props: {},
  data() {
    return {
      formData: {},
      buttonList: buttons,
      list: [],
    }
  },
  computed: {},
  methods: {
    event() {

    },
    handleWidgetAdd(evt) {
      console.log('拖拽到容器事件-add', evt)
      // console.log('end', evt)
      const newIndex = evt.newIndex // 当前拖拽到容器的元素索引
      const to = evt.to
      console.log('拖拽到容器事件-to', to)
      console.log('拖拽到容器事件-之前的data.list', this.list)
      this.list[newIndex].prop = `prop_${new Date().getTime()}`
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
.ghost{
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
