/**
* create by zhangxiang on 2021-01-14 09:41
* 类注释：分页
* 备注：
*/
<template>
  <div class="page">
    <el-pagination
        v-if="pagination.total>0"
        style="text-align: right"
        background
        :layout="layout"
        @current-change="handleCurrentChange"
        :page-size="pagination.pageSize"
        @size-change="handleSizeChange"
        :current-page.sync="pagination.pageNum"
        :page-sizes="pageSizeList"
        :total="pagination.total"
    ></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'page',
  components: {},
  props: {
    //点击页码后是否滚到顶端
    needToTop: {type: Boolean, default: true},
    // 分页数据
    pagination: {
      type: Object,
      default: () => ({pageSize: 10, pageNum: 1, total: 0}),
    },
    pageSizeList: {
      type: Array,
      default: () => [10, 20, 30, 50, 100, 500],
    },
    layout: {type: String, default: 'total,prev,pager,next,sizes,jumper'},
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleCurrentChange(val) {
      this.pagination.pageNum = val
      this.$emit('refresh', true)
      this.needToTop && this.backToTop()
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val
      this.pagination.pageNum = 1
      this.$emit('refresh', true)
      this.needToTop && this.backToTop()
    },
    backToTop() {
      const start = window.pageYOffset
      let i = 0
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        if (next <= 0) {
          window.scrollTo(0, 0)
          clearInterval(this.interval)
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 16)
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b
      return (-c / 2) * (--t * (t - 2) - 1) + b
    },
  },
  mounted() {
  },
  created() {
  },
}
</script>

<style>
.page {
  background-color: white;
  padding: 10px;
}
</style>
