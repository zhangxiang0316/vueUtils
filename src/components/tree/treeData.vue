/**
* create by zx on 2021/8/17 13:14
* 类注释：
* 备注：
*/
<template>
  <table v-if="treeData">
    <tr>
      <td :colspan="treeData.childers ? treeData.childers.length * 2 : 1"
          :class="{parentLevel: treeData.childers,
          extend: treeData.childers && treeData.childers.length}">
        <div class="node">
          <div class="person" @click="itemClick">
            <div class="avat" v-if="treeData.partnerName">
              {{ treeData.partnerName }}
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="treeData.childers && treeData.childers.length" class="animate__animated animate__bounceInDown">
      <td v-for="(childers, index) in treeData.childers" :key="index" colspan="2" class="childLevel">
        <treeChart :treeData="childers" :level="newLevel" @clickNode="$emit('clickNode', $event)"/>
      </td>
    </tr>
  </table>
</template>

<script>

export default {
  name: "treeChart",
  props: {
    treeData: {
      type: Object,
      default: {}
    },
    level: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    newLevel() {
      return this.level + 1
    }
  },
  methods: {
    itemClick() {
      this.treeData.newLevel = this.newLevel - 1
      this.$emit('clickNode', this.treeData)
    }
  }
};
</script>

<style>
table {
  border-collapse: separate !important;
  border-spacing: 0 !important;
}

td {
  position: relative;
  vertical-align: top;
  padding: 0 0 30px 0;
  text-align: center;
}

.extend::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 15px;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}

.childLevel::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 100%;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}

.childLevel::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -15px;
  border-top: 2px solid #ccc;
}

.childLevel:first-child:before,
.childLevel:last-child:before {
  display: none;
}

.childLevel:first-child:after {
  left: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc transparent transparent #ccc;
  border-radius: 6px 0 0 0;
  transform: translate3d(1px, 0, 0);
}

.childLevel:last-child:after {
  right: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  border-radius: 0 6px 0 0;
  transform: translate3d(-1px, 0, 0);
}

.childLevel:first-child.childLevel:last-child::after {
  left: auto;
  border-radius: 0;
  border-color: transparent #ccc transparent transparent;
  transform: translate3d(1px, 0, 0);
}

.node {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  padding: 0 5px;
}

.node .person {
  padding-top: 15px;
  position: relative;
  display: inline-block;
  z-index: 2;
  width: 120px;
  overflow: hidden;
}

.node .person .avat {
  padding: 5px;
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  word-break: break-all;
  box-sizing: border-box;
  border-radius: 4px;
  background: #199ed8;
}

.node.hasMate::after {
  content: "";
  position: absolute;
  left: 2em;
  right: 2em;
  top: 15px;
  border-top: 2px solid #ccc;
  z-index: 1;
}

.node.hasMate .person:last-child {
  margin-left: 1em;
}

.landscape {
  transform: translate(-100%, 0) rotate(-90deg);
  transform-origin: 100% 0;
}

.landscape .node {
  text-align: center;
  height: 8em;
  width: 6em;
}

.landscape .person {
  position: relative;
  transform: rotate(90deg);
  top: 35px;
  left: -10px;
  width: 110px;
}

</style>