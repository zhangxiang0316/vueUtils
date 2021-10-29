/**
* create by zhangxiang on 2020/12/18 09:35
* 类注释：
* 备注：
*/
<template>
  <div class="index">

    <pinyin-select
        v-model="obj.aa"
        placeholder="拼音搜索"
        :options="list"
        :props="{ label: 'name',value: 'districtId'}">

    </pinyin-select>
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
      <el-col :span="3">
        <el-button @click="goPage('tree')">树</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('animation')">帧动画</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('clock')">时钟</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="goPage('typeList')">小说</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import {getOS} from 'outils'
import pinyinSelect from "@/components/select/pinyinSelect";

export default {
  name: "index",
  components: {
    pinyinSelect
  },
  props: {},
  data() {
    return {
      obj: {},
      list: [{
        "districtId": "637",
        "gbCode": "1301",
        "name": "石家庄市",
        "eName": "河北省 石家庄市",
        "dLevel": "3",
        "ename": "河北省 石家庄市",
        "dlevel": "3"
      }, {
        "districtId": "936",
        "gbCode": "1302",
        "name": "唐山市",
        "eName": "河北省 唐山市",
        "dLevel": "3",
        "ename": "河北省 唐山市",
        "dlevel": "3"
      }, {
        "districtId": "1188",
        "gbCode": "1303",
        "name": "秦皇岛市",
        "eName": "河北省 秦皇岛市",
        "dLevel": "3",
        "ename": "河北省 秦皇岛市",
        "dlevel": "3"
      }, {
        "districtId": "1291",
        "gbCode": "1304",
        "name": "邯郸市",
        "eName": "河北省 邯郸市",
        "dLevel": "3",
        "ename": "河北省 邯郸市",
        "dlevel": "3"
      }, {
        "districtId": "1554",
        "gbCode": "1305",
        "name": "邢台市",
        "eName": "河北省 邢台市",
        "dLevel": "3",
        "ename": "河北省 邢台市",
        "dlevel": "3"
      }, {
        "districtId": "1772",
        "gbCode": "1306",
        "name": "保定市",
        "eName": "河北省 保定市",
        "dLevel": "3",
        "ename": "河北省 保定市",
        "dlevel": "3"
      }, {
        "districtId": "2142",
        "gbCode": "1307",
        "name": "张家口市",
        "eName": "河北省 张家口市",
        "dLevel": "3",
        "ename": "河北省 张家口市",
        "dlevel": "3"
      }, {
        "districtId": "2400",
        "gbCode": "1308",
        "name": "承德市",
        "eName": "河北省 承德市",
        "dLevel": "3",
        "ename": "河北省 承德市",
        "dlevel": "3"
      }, {
        "districtId": "2629",
        "gbCode": "1309",
        "name": "沧州市",
        "eName": "河北省 沧州市",
        "dLevel": "3",
        "ename": "河北省 沧州市",
        "dlevel": "3"
      }, {
        "districtId": "2849",
        "gbCode": "1310",
        "name": "廊坊市",
        "eName": "河北省 廊坊市",
        "dLevel": "3",
        "ename": "河北省 廊坊市",
        "dlevel": "3"
      }, {
        "districtId": "2968",
        "gbCode": "1311",
        "name": "衡水市",
        "eName": "河北省 衡水市",
        "dLevel": "3",
        "ename": "河北省 衡水市",
        "dlevel": "3"
      }]
    }
  },
  computed: {},
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

    console.log(getOS())
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.el-row {
  margin: 10px 0;
}
</style>
