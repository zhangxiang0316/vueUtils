/**
* create by zhangxiang on 2021-04-16 15:40
* 类注释：
* 备注：
*/
<template>
  <div class="wrapper">
    <div class="map-container" ref="myEchart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as echarts from "echarts";
import './china'
function randomData() {
  return Math.round(Math.random()*500);
}
export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      myEchart:null
    }
  },
  computed: {},
  methods: {
    init(){
      let mydata = [
        {name: '北京',value: '100' },{name: '天津',value: randomData() },
        {name: '上海',value: randomData() },{name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },{name: '河南',value: randomData() },
        {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
        {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
      ];
      var optionMap = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '全国地图大数据',
          subtext: '',
          x:'center'
        },
        tooltip : {
          trigger: 'item'
        },

        //左侧小导航图标
        visualMap: {
          show : true,
          x: 'left',
          y: 'center',
          splitList: [
            {start: 500, end:600},{start: 400, end: 500},
            {start: 300, end: 400},{start: 200, end: 300},
            {start: 100, end: 200},{start: 0, end: 100},
          ],
          color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
        },

        //配置属性
        series: [{
          name: '数据',
          type: 'map',
          mapType: 'china',
          roam: true,
          label: {
            normal: {
              show: true  //省份名称
            },
            emphasis: {
              show: false
            }
          },
          data:mydata  //数据
        }]
      };
      //使用制定的配置项和数据显示图表
      this.myEchart.setOption(optionMap);
    }
  },
  activated() {
  },
  mounted() {
    this.myEchart = echarts.init(this.$refs.myEchart);
    this.init()
  },
  created() {
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
