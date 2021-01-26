/**
* create by zhangxiang on 2021-01-25 18:52
* 类注释：
* 备注：
*/
<template>
  <div class="table-column">
    <el-table-column
        v-for="item in tableCols"
        :key="item.id"
        :prop="item.prop"
        :fixed="item.fixed"
        :formatter="item.formatter"
        :label="item.label"
        :width="item.width?item.width:'300px'"
        align="center">
      <template slot-scope="scope">
        <slot :name="item.slotName" v-if="item.type=='slot'" :data="scope.row"></slot>
        <span v-if="!item.type"
              :style="item.itemStyle && item.itemStyle(scope.row)"
              :class="item.itemClass && item.item.itemClass(scope.row)">
            {{ (item.formatter && item.formatter(scope.row)) || scope.row[item.prop] }}
          </span>
<!--        <table-column v-if="item.type=='column'"></table-column>-->
      </template>
    </el-table-column>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "table-column",
  components: {},
  props: {tableCols: {type: Array, default: () => []},},
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