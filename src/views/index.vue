/**
* create by zhangxiang on 2020/12/18 09:35
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <el-row>
      <el-col :span="3">
        <el-button @click="goPage('directives')">自定义指令</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('demotantan')">滑动1</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('demozhihu')">滑动2</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('radio')">广播</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('sign')">签名</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('table')">封装table</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('elForm')">封装Form</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('form')">拖拽表单</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <el-button @click="goPage('draggableTest')">分组拖拽</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('movie')">电影票房</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('calender')">日历</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      obj:{},
    }
  },
  computed: {

  },
  methods: {
    goPage(name) {
      this.$router.push({name: name})
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
.el-row {
  margin: 10px 0;
}
</style>
