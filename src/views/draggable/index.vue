/**
* create by zx on 2021/7/28 08:55
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div class="draggable-container"
         @mousemove.stop.prevent='e => chooselistMoveFn(e)'
         @touchmove.stop.prevent='e => chooselistMoveFn(e)'
         @mouseup.stop.prevent='e => chooselistUpFn(e)'
         @touchend.stop.prevent='e => chooselistUpFn(e)'>
      <div class="draggable-element-container">
        <div
            :id="'start-item' + index"
            :class="['element-item', 'start-item']"
            v-for="(item, index) in [1,2,3,4]"
            :key="index"
            @mousedown.stop.prevent="e => chooselistDownFn(e, item)"
            @touchstart.stop.prevent="e => chooselistDownFn(e, item)"
        >
          拖我
        </div>
      </div>
      <div class="target-element-container">
        <div
            :id="'end-item' + index"
            :class="['element-item', 'end-item', activeHoverElementId == 'end-item' + index ? 'active-hover' : '']"
            v-for="(item, index) in [1,2,3]"
            :key="index">
          放这
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      activeHoverElementId: ''
    }
  },
  computed: {},
  methods: {
    chooselistDownFn(e, item) {
      e = e.type === 'touchstart' ? e.changedTouches[0] : e
      // 当前点击的节点
      let itm = e.target
      // 克隆的节点
      let cln = itm.cloneNode(true)
      /* 获取点击的节点相对它父元素的坐标 给克隆块绝对定位 使它们重叠 */
      cln.classList.add('clone-element', 'posiA')
      cln.style.top = e.target.offsetTop + 'px'
      cln.style.left = e.target.offsetLeft + 'px'
      e.target.parentNode.insertBefore(cln, itm)
    },
    chooselistMoveFn(e) {
      e = e.type === 'touchmove' ? e.changedTouches[0] : e
      let cln = document.querySelector('.clone-element')
      // 如果有克隆块存在
      if (cln) {
        // 动态定位克隆的元素
        cln.style.position = 'fixed'
        cln.style.top = e.clientY - 35 + 'px'
        cln.style.left = e.clientX - 30 + 'px'
        this.computedPosition(e, 'move')
      }
    },
    chooselistUpFn(e) {
      e = e.type === 'touchend' ? e.changedTouches[0] : e
      // 鼠标松开 克隆块初始化
      let cln = document.querySelector('.clone-element')
      if (cln) {
        cln.remove()
      }
      this.activeHoverElementId = ''
      this.computedPosition(e, 'up')
    },
    computedPosition(e, type) {
      // 获取所有目标元素的位置，并计算触碰区域坐标
      let targetELes = document.querySelectorAll('.end-item')
      for (let i = 0; i < targetELes.length; i++) {
        let {x, y, width, height} = targetELes[i].getBoundingClientRect()
        if (Math.abs(e.clientX - x - width / 2) < width && Math.abs(e.clientY - y - height / 2) < height) {
          // 进入区域了
          console.log('进入区域了');
          if (type === 'move') {
            this.activeHoverElementId = 'end-item' + i
          }
          if (type === 'up') {
            console.log('弹出弹窗')
            alert('弹窗内容')
          }
          return
        } else {
          this.activeHoverElementId = ''
        }
      }
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

<style scoped lang="less" rel="stylesheet/less">
.draggable-container {
  width: 500px;
  position: relative;
  display: flex;
  justify-content: space-around;

  .draggable-element-container {

    .element-item {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      background: lightgreen;
      margin-top: 10px;
      cursor: move;
    }

    .element-item :hover {
      opacity: 0.8;
    }

    .clone-element {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-radius: 50%;
      background: lightgreen;
      position: absolute;
      z-index: 2;
      transition: all 0.2s linear;
    }

  }

  .target-element-container {

    .element-item {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      background: lightblue;
      margin-top: 20px;
      transition: transform 0.2s linear;
    }

    .active-hover {
      transform: scale(1.5);
    }

  }
}

</style>