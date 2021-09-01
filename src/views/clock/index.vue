/**
* create by zx on 2021/7/28 17:27
* 类注释：
* 备注：
*/
<template>
  <div class="index" style="margin-top: 20px;width: 100%;margin-left: 100px; height:500px;overflow: scroll">
    <TreeChart :treeData="treeData" :class="{landscape: true}" :isFirst="true" :level="0" @clickNode="clickNode"/>
  </div>
</template>

<script type="text/ecmascript-6">
import TreeChart from '@/components/tree/treeData1'

export default {
  name: "index",
  components: {
    TreeChart
  },
  props: {},
  data() {
    return {
      treeData: [
        {
          partnerName: '怡孚和融',
          id: 1,
          pId: -1,
        },
      ]

    }
  },
  computed: {},
  methods: {
    clickNode(node) {
      // const arr = this.findParents(this.treeData, node)
      //
      // // this.treeData[arr[0]]
      // // if (node.newLevel===1&&){
      // //
      // // }
      // console.log(arr,)
      // // for (let i = 0; i < arr.length - 1; i++) {
      // //   this.treeData[arr[i]]
      // }
    },

    findParents(treeData, node) {
      let findele = (data, node) => {
        data.forEach((item, index) => {
          if (item.id == node.id) {
            if (data.length > 1) {
              data = [node]
            }
          } else {
            if (!!item.childers) {
              findele(item.childers, node)
            }
          }
        })
      }

      findele(treeData, node)
      return treeData;
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

<style scoped>

</style>