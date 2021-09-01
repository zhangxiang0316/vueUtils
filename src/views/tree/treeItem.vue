<template>
  <div class="card">
    <ul>
      <li v-for="(item,index) in treeData" :key="index">
        <div
            class="item"
            :class="{'line-left':index!==0,'line-right':index!=treeData.length-1}">
          <div
              class="item-name"
              :class="{'line-bottom':item.show && item.child && item.child.length>0,'line-top':!treeFirst}"
              @click="show(item)">
            <div>
              {{ item.name }}
            </div>
            <div class="add" v-if="item.child && item.child.length>0">
              {{ item.show ? '-' : '+' }}
            </div>
          </div>
        </div>
        <tree-item v-if="item.show && item.child && item.child.length>0 " :tree-data="item.child"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'treeItem',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    treeFirst: { //判断是否第一个
      type: Boolean,
      default: false
    }
  },
  methods: {
    show(item) {
      item.show = !item.show
    }
  }
}
</script>
<style>
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card ul {
  display: flex;
  justify-content: center
}

.card ul li .item, .card ul li .item-name {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative
}

.card ul li .item-name {
  width: 60px;
  height: 30px;
  padding: 5px;
  margin: 20px;
  border-radius: 5px;
  background: #06b7fd;
  color: #fff
}

.card ul li .item-name .add {
  position: absolute;
  border: 2px solid red;
  border-radius: 100%;
  bottom: -7px;
  color: red;
  width: 14px;
  height: 14px;
  line-height: 13px;
  font-size: 15px;
  text-align: center;
  z-index: 100;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.card .line-bottom:after {
  bottom: -20px
}

.card .line-bottom:after, .card .line-top:before {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #06b7fd
}

.card .line-top:before {
  top: -20px
}

.card .line-left:after {
  right: 0;
  left: calc(-50% - 22px)
}

.card .line-left:after, .card .line-right:before {
  content: "";
  display: block;
  position: absolute;
  margin: auto;
  background: #06b7fd;
  width: calc(50% + 20px);
  height: 3px;
  top: 0
}

.card .line-right:before {
  left: 0;
  right: calc(-50% - 22px)
}


</style>