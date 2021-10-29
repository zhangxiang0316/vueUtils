/**
* create by zx on 2021/8/19 13:10
* 类注释：
* 备注：
*/
<template>
  <div class="test">
    <div style="position: relative;width: 150px">
      <div class="one" :class="{hasChild:hasChild}">
        <div class="one-name" @click="oneClick">
          <span>添加</span>
        </div>
      </div>
    </div>
    <div v-if="showTwo" style="position: relative;width: 150px" class="animate__animated animate__bounceIn ">
      <div :class="{twoList:showTwoList,two:!showTwoList}">
        <div class="two-name" v-if="showTwoList" @click="twoListClick('销售管理系统')">
          <span>销售管理系统</span>
        </div>
        <div class="two-name" v-if="showTwoList" @click="twoListClick('售后管理系统')">
          <span>售后管理系统</span>
        </div>
        <div class="two-name animate__animated animate__backInDown" v-if="!showTwoList" :class="{hasChild:twoHasChild}" @click="twoClick" >
          {{ twoName }}
        </div>
      </div>
    </div>
    <div v-if="showThree" style="position: relative;" class="animate__animated animate__bounceIn">
      <div class="three">
        <el-input v-if="showInput" style="margin: 5px;width: 190px" v-model="custName"
                  @keyup.enter.native="threeInputEnter"></el-input>
        <div class="three-name animate__animated animate__bounceIn" v-if="!showInput" :class="{threeHasChild:threeHasChild}" @click="threeClick">
          {{ custName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "test",
  components: {},
  props: {},
  data() {
    return {
      hasChild: false,//第一步是否展开
      twoHasChild: false,//第二步是否展开
      showTwo: false,//展示第二步列标
      showTwoList: true,//展示列标
      twoName: "",//第二步选择的名称,
      showThree: false,
      showInput: true,
      custName: "",
      threeHasChild: false,
    }
  },
  computed: {},
  methods: {
    //第一步点击
    oneClick() {
      this.hasChild = true//第一步是否展开
      this.twoHasChild = false//第二步是否展开
      this.showTwo = true//展示第二步列标
      this.showTwoList = true//展示列标
      this.twoName = ""//第二步选择的名称
      this.showThree = false
      this.showInput = true
      this.custName = ""
    },
    //第二步列表点击
    twoListClick(name) {
      this.showTwoList = false;
      this.twoName = name
    },
    //第二步点击
    twoClick() {
      this.twoHasChild = true
      this.showThree = true
    },

    threeInputEnter() {
      this.showInput = false
    },

    threeClick() {
      this.threeHasChild = true
    }

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
.test {
  width: 1000px;
  margin: 0px auto;
  position: relative;
}

.one {
  position: absolute;
  top: 150px;
  left: 10px;
}

.hasChild::after {
  content: ""; /*CSS伪类用法*/
  position: absolute; /*定位背景横线的位置*/
  width: 15px; /*宽和高做出来的背景横线*/
  height: 2px;
  left: 100px;
  background: #06b7fd;
  top: 15px;
}

.one .one-name {
  border-radius: 5px;
  background: #06b7fd;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.two {
  position: absolute;
  top: 150px;
  left: 140px;
}

.two .two-name {
  border-radius: 5px;
  background: #06b7fd;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.two .two-name::before {
  content: "";
  position: absolute;
  border-top: 2px solid #06b7fd;
  border-radius: 0px;
  top: 15px;
  left: -15px;
  width: 20px;
  height: 50%;
}

.twoList {
  position: absolute;
  top: 30px;
  left: 140px;
}

.twoList .two-name:first-child:before {
  content: "";
  position: absolute;
  border-left: 2px solid #06b7fd;
  border-top: 2px solid #06b7fd;
  border-radius: 3px;
  top: 15px;
  left: -15px;
  width: 20px;
  height: 50%;
}

.twoList .two-name {
  border-radius: 5px;
  background: #06b7fd;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.twoList .two-name:last-child {
  margin-top: 220px;
}

.twoList .two-name:last-child:before {
  content: "";
  position: absolute;
  border-left: 2px solid #06b7fd;
  border-bottom: 2px solid #06b7fd;
  border-radius: 3px;
  top: 110px;
  left: -15px;
  width: 20px;
  height: 52%;
}

.three {
  position: absolute;
  left: 255px;
  width: 200px;
  top: 10px;
  height: 300px;
  border: 1px dashed #06b7fd;
  border-radius: 5px
}

.three .three-name {
  border-radius: 5px;
  background: #06b7fd;
  width: 170px;
  margin-left: 15px;
  margin-top: 140px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.three .three-name:before {
  content: "";
  position: absolute;
  border-top: 2px solid #06b7fd;
  top:14px;
  left: -15px;
  width: 20px;
  height: 50%;
}

.three .threeHasChild:after {
  content: "";
  position: absolute;
  border-top: 2px solid #06b7fd;
  top:14px;
  left: 170px;
  width: 15px;
  height: 50%;
}


</style>