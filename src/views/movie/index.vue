/**
* create by zhangxiang on 2021-02-20 14:01
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div v-for="hang in list">
      <div v-for="item in hang"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'

export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      list: [[{}, {}, {}, {}], [], []],
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
