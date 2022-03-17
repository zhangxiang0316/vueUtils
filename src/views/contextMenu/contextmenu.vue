/**
* create by zx on 2022/3/17 09:17
* 类注释：
* 备注：
*/
<template>
  <div class="v-contextmenu"
       v-show="status"
       :style="{
      left: style.left,
      top: style.top,
    }"
       @contextmenu.prevent
  >
    <contextmenuItem
        :menus="menus"
        :isDark="isDark"
        :subMenuPosition="style.subMenuPosition"
        :clickMenuItem="clickMenuItem"
    />
  </div>
</template>

<script>
import contextmenuItem from './contextmenuItem'

const MENU_WIDTH = 170
const MENU_HEIGHT = 30
const MENU_PADDING = 5
const DIVIDER_HEIGHT = 11
const SUB_MENU_WIDTH = 120

export default {
  name: 'v-contextmenu',
  components: {
    contextmenuItem,
  },
  props: {
    axis: {
      type: Object,
      default() {
        return { x: 0, y: 0 }
      },
    },
    el: {
      type: Object,
    },
    menus: {
      type: Array,
      default() {
        return [{ text: '' }]
      },
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    removeContextMenu: {
      type: Function,
      default() {
        return () => {}
      },
    },
  },
  data() {
    return {
      status: false
    }
  },
  computed: {
    style() {
      const { x, y } = this.axis

      const normalMenuCount = this.menus.filter(menu => !menu.divider && !menu.hide).length
      const dividerMenuCount = this.menus.filter(menu => menu.divider).length

      const menuWidth = MENU_WIDTH
      const menuHeight = normalMenuCount * MENU_HEIGHT + dividerMenuCount * DIVIDER_HEIGHT + MENU_PADDING * 2

      const maxMenuWidth = MENU_WIDTH + SUB_MENU_WIDTH - 10

      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const left = (screenWidth <= x + menuWidth ? x - menuWidth : x)
      const top = (screenHeight <= y + menuHeight ? y - menuHeight : y)

      const subMenuPosition = screenWidth <= left + maxMenuWidth ? 'right' : 'left'

      return {
        left: left + 'px',
        top: top + 'px',
        subMenuPosition,
      }
    },
  },
  mounted() {
    this.$nextTick(() => this.status = true)
  },
  beforeDestroy() {
    document.body.removeChild(this.$el)
  },
  methods: {
    clickMenuItem(item) {
      if(item.disable || item.children) return

      this.status = false
      item.action && item.action(this.el)

      this.removeContextMenu()
    },
  },
}
</script>

<style lang="less">
.v-contextmenu {
  position: fixed;
  z-index: 9999;
  user-select: none;
}
</style>yle>