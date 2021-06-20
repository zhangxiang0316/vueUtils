/**
* create by zhangxiang on 2021-02-20 14:01
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <el-table :data="tableData">
      <table-column v-for="item in tableHeader" :key="item.prop" :column="item"></table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import tableColumn from './tableColumn'

export default {
  name: "index",
  components: {

    tableColumn
  },
  props: {},
  data() {
    return {
      tableHeader: [
        {
          prop: 'date',
          label: "日期"
        },
        {
          label: '配送信息',
          child: [
            {
              prop: 'name',
              label: '姓名'
            },
            {
              label: '地址',
              child: [
                {
                  prop: 'province',
                  label: '省'
                }, {
                  prop: 'city',
                  label: '市'
                },
                {
                  prop: 'address',
                  label: '详细地址'
                }
              ]
            }
          ]
        }
      ],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
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
