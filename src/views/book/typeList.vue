/**
* create by zx on 2021/10/29 08:41
* 类注释：
* 备注：
*/
<template>
  <div class="typeList">
    <div v-for="category in categoryData" :key="category" style="margin-bottom: 20px;background: white">
      <div style="line-height: 40px;text-align: center;">{{ category.title }}</div>
      <div style="text-align: center">
        <el-button v-for=" cate in category.cateList" :key="cate" @click="itemClick(category.queryParams[0].channel,cate.text)">
          {{ cate.text }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";

export default {
  name: "typeList",
  components: {},
  props: {},
  data() {
    return {
      categoryData: [],
    }
  },
  computed: {},
  methods: {
    loadData() {
      axios.get('/api/getCateData').then(res => {
        this.categoryData = res.data.data.categoryData
        console.log(res.data)
      })
    },
    itemClick(a,b){
      this.$router.push({name:'bookList',query:{channel:a,text:b}})
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
.a {
  background: rgb(10, 10, 10);
}
</style>