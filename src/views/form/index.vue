/**
* create by zhangxiang on 2020-12-25 09:44
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div class="left">
      <vuedraggable @end="end" @start="start" @move="move" v-model="buttonList">
        <transition-group>
          <el-button v-for="(item,index) in buttonList " :key="index">{{ item.name }}</el-button>
        </transition-group>
      </vuedraggable>
    </div>
    <div class="center">
      <el-form>
        <el-form-item v-for="item in selectList">

        </el-form-item>
      </el-form>
    </div>
    <div class="right">

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import vuedraggable from 'vuedraggable'

export default {
  name: "index",
  components: {
    vuedraggable
  },
  props: {},
  data() {
    return {
      draggableModel: {},
      buttonList: [
        {name: "单行文本", type: 'one',},
        {name: "多行文本", type: 'two',},
        {name: "按钮"},
        {name: "按钮"},
        {name: "按钮"},
        {name: "按钮"},
        {name: "按钮"},
      ],
      selectList: [{}, {}],
    }
  },
  computed: {},
  methods: {
    end(evt) {
      console.log("---end--->", evt)
    },
    start(evt) {
      console.log("----start-->", evt)
    },
    move(evt) {
      console.log("----move-->", evt)
    }
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
  margin-bottom: 10px;
}

.index {
  display: flex;

  .left {
    width: 200px;
  }

  .center {
    flex: 1;
  }

  .right {
    width: 300px;
  }
}
</style>