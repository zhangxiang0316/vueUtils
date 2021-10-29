/**
* create by zx on 2021/10/28 16:07
* 类注释：
* 备注：
*/
<template>
  <div style="display: flex">
    <div style="height: 1000px;flex: 1;border-right: 1px solid #aaa;overflow-y: scroll">
      <div v-for="(item,index) in zhangList"
           style="line-height: 30px;text-align: center"
           @click="loadDetail(item,index)"
           :class="{select:index===selectIndex}">
        {{ item.title }}
      </div>
    </div>
    <div style="height: 1000px;flex: 4;margin-left: 30px; overflow-y: scroll">
      <div style="line-height:50px; text-align: center;position: absolute;background: white;left: 50%">{{ title }}</div>
      <div style="white-space: pre-wrap;word-wrap:break-word;word-break:break-all;margin-top: 50px;"
           v-html="content"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";


export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      zhangList: [],
      content: '',
      title: "",
      selectIndex: -1,
      bookId: '',
    }
  },
  computed: {},
  methods: {
    loadData() {
      axios.get('/api/pc/getCatalog', {params: {data: {book_id: this.bookId}}}).then(res => {
        console.log(res.data)
        this.zhangList = res.data.data.novel.items
      })
    },
    loadDetail(item, index) {
      this.selectIndex = index
      axios.get('/api/pc/getChapterContent', {
        params: {
          data: {
            book_id: this.bookId,
            cid: `${this.bookId}|${item.cid}`,
            need_bookinfo: 0
          }
        }
      }).then(res => {
        console.log(res.data)
        this.title = res.data.data.novel.chapter_title
        this.content = res.data.data.novel.content
      })
    }
  },
  activated() {
  },
  mounted() {
  },
  created() {
    this.bookId = this.$route.query.bookId
    this.loadData()
  }
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.select {
  color: white;
  background: red;
}
</style>