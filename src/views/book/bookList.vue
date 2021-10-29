/**
* create by zx on 2021/10/29 08:20
* 类注释：
* 备注：
*/
<template>
  <div class="bookList">
    <zx-table
        :load-data="loadData"
        :is-index="true"
        :is-selection="true"
        :table-data="tableData"
        :table-cols="tableCols"
        :pagination="pagination">
      <template #opt="data">
        <el-button @click="toDetail(data.data)">阅读</el-button>
      </template>
    </zx-table>
  </div>
</template>

<script type="text/ecmascript-6">
import zxTable from "@/components/table/zxTable";
import axios from "axios";

export default {
  name: "bookList",
  components: {
    zxTable
  },
  props: {},
  data() {
    return {
      channel:'',
      tableData: [],
      pagination: {pageSize: 10, pageNum: 1, total: 1000},
      tableCols: [
        {
          label: "名称", prop: 'title'
        },
        {label: "状态", prop: 'status',},
        {label: "描述", prop: 'description',},
        {label: "操作", eType: "slot", slotName: 'opt',},
      ],
    }
  },
  computed: {},
  methods: {
    toDetail(data) {
      this.$router.push({
        name: "book", query: {
          bookId: data.bookId,
          title: data.title
        }
      })
      console.log(data)
    },
    loadData() {
      axios.get('/api/getCateDetail', {
        params: {
          page: this.pagination.pageNum,
          count: this.pagination.pageSize,
          channel: this.$route.query.channel,
          cate2: this.$route.query.text,
          query: this.$route.query.text
        }
      }).then(res => {
        const data = res.data;
        this.tableData = data.data.novelList
        console.log(res.data)
      })

    }
  },
  activated() {
  },
  mounted() {
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>