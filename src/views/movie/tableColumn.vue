/**
* create by zhangxiang on 2021-06-02 21:18
* 类注释：
* 备注：
*/
<template>
  <el-table-column :prop="column.prop" :label="column.label">
    <template v-if="column.child">
      <table-column :key="item.prop" v-for="item in column.child" :column="item"></table-column>
    </template>
  </el-table-column>
</template>

<script type="text/ecmascript-6">
export default {
  name: "tableColumn",
  components: {},
  props: {
    column: {},
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  activated() {
  },
  mounted() {
  },
  created() {
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
