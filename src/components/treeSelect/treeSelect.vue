/**
* create by zx on 2021/8/26 16:52
* 类注释：
* 备注：
*/
<template>
  <div
      v-clickoutside="handleClose"
      class="el-select tree-select"
      @click.stop="toggleMenu"
  >
    <el-popover
        ref="popover"
        v-model="popoverVisible"
        trigger="manual"
        placement="bottom">
      <el-scrollbar wrap-class="tree-scrollbar-wrapper">
        <el-tree
            ref="tree"
            :data = "treeOpt.data"
            :load="treeOpt.load"
            :lazy="treeOpt.lazy"
            :props="treeOpt.props"
            :node-key="treeOpt.key"
            :expand-on-click-node="treeOpt.showCheckbox"
            :show-checkbox="treeOpt.showCheckbox"
            :check-strictly="multiple ? treeOpt.checkStrictly : true"
            :default-expanded-keys="treeOpt.defaultExpandedKeys"
            class="tree-select-popover"
            @check="treeCheckhandle"
            @node-click="handleNodeClick">
          <span slot-scope="{ node, data }" :class="{selected: node.selected}">
            {{ node.label }}
          </span>
        </el-tree>
      </el-scrollbar>
      <div slot="reference" class="popover-reference">
        <div
            v-if="multiple"
            ref="tags"
            :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
            :class="['el-select__tags', selectDisabled ? 'is-disabled' : '']">
          <transition-group @after-leave="resetInputHeight">
            <el-tag
                v-for="item in selected"
                :key="getValueKey(item)"
                :closable="!selectDisabled"
                size="small"
                type="info"
                disable-transitions
                @close="deleteTag($event, item)">
              <span class="el-select__tags-text">{{ item.label }}</span>
            </el-tag>
          </transition-group>
        </div>
        <el-input
            ref="reference"
            :disabled="selectDisabled"
            v-model="selectedLabel"
            :placeholder="currentPlaceholder"
            readonly
            @focus="handleFocus"
        >
          <template slot="suffix">
            <i v-show="!showClose" :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"/>
          </template>
        </el-input>
      </div>
    </el-popover>

  </div>
</template>
<script>
import Clickoutside from 'element-ui/lib/utils/clickoutside'
import { addResizeListener, removeResizeListener } from 'element-ui/lib/utils/resize-event'
export default {
  name: 'TreeSelect',
  directives: { Clickoutside },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    // 当子节点都被选中时选中父节点，输入框中只显示父节点
    showCheckedStrategy: {
      type: String,
      default: 'showParent'
    },
    showValue: {
      type: [String, Array],
      default: ''
    },
    value: {
      type: [String, Array],
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    treeOption: {
      type: Object,
      default() {
        return {
          data: null,
          lazy: false,
          load: null,
          props: {
            children: '',
            label: '',
            disabled: '',
            isLeaf: ''
          },
          key: '',
          showCheckbox: false,
          checkStrictly: false,
          defaultExpandedKeys: []
        }
      }
    }
  },
  data() {
    const me = this
    const treeOpt = {
      showCheckbox: false,
      checkStrictly: false,
      ...this.treeOption
    }
    if (treeOpt.lazy && treeOpt.load) {
      const load = treeOpt.load
      treeOpt.load = function(node, resolve) {
        function newResolve(data) {
          resolve(data)
          setTimeout(me.nodeLoaded, 200)
        }
        load(node, newResolve)
      }
    }
    return {
      showClose: false,
      popoverVisible: false,
      selectedLabel: '',
      inputWidth: 0,
      selected: this.multiple ? [] : {},
      menuVisibleOnFocus: false,
      softFocus: false,
      allSelectedNodesLoaded: false,
      currentPlaceholder: '',
      initialInputHeight: 0,
      treeOpt
    }
  },
  computed: {
    iconClass() {
      return this.popoverVisible ? 'arrow-up is-reverse' : 'arrow-up'
    },
    selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  watch: {
    popoverVisible(val) {
      if (!val) {
        this.menuVisibleOnFocus = false
      }
    },
    value(val, oldVal) {
      let deSelect
      if (this.multiple) {
        this.resetInputHeight()
        if (oldVal) {
          deSelect = oldVal.filter(item => {
            return !val.includes(item)
          })
        }
      } else {
        deSelect = oldVal
      }
      this.setSelected()
      this.setDeSelected(deSelect)
      this.managePlaceholder()
    }
  },
  created() {
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', [])
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '')
    }
  },
  mounted() {
    const reference = this.$refs.reference
    addResizeListener(this.$el, this.handleResize)
    this.managePlaceholder()
    this.initialInputHeight = reference.$el.getBoundingClientRect().height
    this.$nextTick(() => {
      if (reference && reference.$el) {
        this.inputWidth = reference.$el.getBoundingClientRect().width
      }
    })
    // 弹出的下拉树菜单
    this.$refs.popover.$once('show', () => {
      this.popperElm = this.$refs.popover.popperElm
      this.popperElm.style.minWidth = this.inputWidth + 'px'
      this.$refs.popover.updatePopper()
    })
    this.setSelected()
  },
  beforeDestroy() {
    if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize)
  },
  methods: {
    // loadNode(node, resolve) {
    //   const me = this
    //   if (node.level === 0) {
    //     resolve([{label: '根节点'}])
    //     return
    //   }
    //   const data = []
    //   for (let i = 0; i < 5; i++) {
    //     data.push({
    //       label: `项目${node.level}-${i + 1}`
    //     })
    //   }
    //   setTimeout(function() {
    //     resolve(data)
    //     setTimeout(me.nodeLoaded, 200)
    //   }, 3000)
    // },
    getValueKey(item) {
      return item[this.treeOpt.key]
    },
    toggleMenu() {
      // debugger
      if (!this.selectDisabled) {
        //   if (this.menuVisibleOnFocus) {
        //     this.menuVisibleOnFocus = false
        //   } else {
        //   }
        this.popoverVisible = !this.popoverVisible
        if (this.popoverVisible) {
          (this.$refs.input || this.$refs.reference).focus()
        }
      }
    },
    treeCheckhandle(data, state) {
      // debugger
      if (this.multiple) {
        // this.handleMultipCheck(state.checkedKeys)
        this.$emit('input', state.checkedKeys)
      } else {
        this.$emit('input', data[this.treeOpt.key])
        this.popoverVisible = false
      }
    },
    // handleMultipCheck() {
    //
    // },
    // getMultiResult(checkedKeys, data = this.data) {
    //   return data.reduce((acc, cur) => {
    //     if (checkedKeys.includes(cur.value)) {
    //       acc.push({
    //         label: cur.label,
    //         value: cur.value
    //       })
    //     } else if (cur.children) {
    //       acc = acc.concat(this.getMultiResult(checkedKeys, cur.children))
    //     }
    //     return acc
    //   }, [])
    // },
    handleNodeClick(data, node, comp) {
      // debugger
      // node.selected = true
      // this.selectedLabel = data.label
      if (this.treeOpt.showCheckbox || node.disabled) {
        return
      }
      if (this.multiple) {
        this.handleMultipSelect(data, node, comp)
      } else {
        this.handleSingleSelect(data, node, comp)
        this.popoverVisible = false
      }
      this.setSoftFocus()
    },
    handleSingleSelect(data, node) {
      // 已经选中
      if (node.selected) {
        return
      }
      if (this.value) {
        const tree = this.$refs.tree
        const oldNode = tree.getNode(this.value)
        if (oldNode) {
          oldNode.selected = false
        }
      }
      this.selectedLabel = node.label
      this.$emit('input', node.key)
    },
    handleMultipSelect(data, node) {
      const index = this.value.indexOf(node.key)
      if (index === -1) {
        // this.selected.push(node)
        this.value.push(node.key)
      } else {
        // 向node中注入selected
        this.$set(node, 'selected', false)
        this.value.splice(index, 1)
        this.$emit('input', this.value)
      }
    },
    setSelected() {
      // debugger
      const tree = this.$refs.tree
      const showCheckbox = this.treeOpt.showCheckbox
      if (this.multiple) {
        const result = []
        let loaded = true
        if (Array.isArray(this.value)) {
          if (showCheckbox) {
            // this.defaultCheckedKeys = this.value
            tree.setCheckedKeys(this.value)
          }
          this.value.forEach((value, index) => {
            const node = tree.getNode(value)
            if (node) {
              this.$set(node, 'selected', true)
              result.push(node)
            } else {
              result.push({
                label: this.showValue[index] || value,
                [this.treeOpt.key]: value
              })
              loaded = false
            }
          })
        }
        this.allSelectedNodesLoaded = loaded
        this.selected = result
        this.$nextTick(() => {
          this.resetInputHeight()
        })
      } else {
        const node = tree.getNode(this.value)
        // lazy 加载的时候可能节点不存在
        if (node) {
          if (showCheckbox) {
            tree.setCheckedKeys([this.value])
          }
          this.$set(node, 'selected', true)
          this.selected = node
          this.selectedLabel = node.label
          this.allSelectedNodesLoaded = true
        } else {
          this.selectedLabel = this.showValue || this.value
          this.selected = {}
          this.allSelectedNodesLoaded = false
          if (showCheckbox) {
            tree.setCheckedKeys([])
          }
        }
      }
    },
    setDeSelected(item) {
      const tree = this.$refs.tree
      if (this.multiple) {
        if (Array.isArray(item)) {
          item.forEach(key => {
            const node = tree.getNode(key)
            if (node) {
              this.$set(node, 'selected', false)
            }
          })
        }
      } else {
        const node = tree.getNode(item)
        if (node) {
          this.$set(node, 'selected', false)
        }
      }
    },
    setSoftFocus() {
      this.softFocus = true
      // const input = this.$refs.input || this.$refs.reference;
      const input = this.$refs.reference
      if (input) {
        input.focus()
      }
    },
    handleFocus() {
      if (!this.softFocus) {
        // this.menuVisibleOnFocus = true
        // this.popoverVisible = true
      } else {
        this.softFocus = false
      }
    },
    handleClose() {
      this.popoverVisible = false
    },
    resetInputHeight() {
      if (this.collapseTags && !this.filterable) return
      this.$nextTick(() => {
        if (!this.$refs.reference) return
        // debugger
        const inputChildNodes = this.$refs.reference.$el.childNodes
        const input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
        const tags = this.$refs.tags
        const sizeInMap = this.initialInputHeight || 40
        input.style.height = this.selected.length === 0
            ? sizeInMap + 'px'
            : Math.max(
            tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
            sizeInMap
        ) + 'px'
        // if (this.visible && this.emptyText !== false) {
        //   this.broadcast('ElSelectDropdown', 'updatePopper')
        // }
        this.$refs.popover.updatePopper()
      })
    },
    nodeLoaded() {
      // debugger
      // this.handlePopoverHeight()
      if (this.allSelectedNodesLoaded) {
        return
      }
      this.setSelected()
    },
    deleteTag(event, item) {
      // debugger
      this.handleMultipSelect(item.data, item)
    },
    managePlaceholder() {
      const val = this.value
      this.currentPlaceholder = val.length === 0 ? this.placeholder : ''
    },
    resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width
    },
    handleResize() {
      this.resetInputWidth()
      if (this.multiple) this.resetInputHeight()
    }
  }
}
</script>
<style lang="less">
.tree-select {
  width: 100%;
}
.tree-scrollbar-wrapper {
  max-height: 50vh;
}
.tree-select-popover {
  .el-tree-node {
    .selected {
      color: #409eff;
      font-weight: 700;
    }
  }
}
.popover-reference {
  line-height: normal;
}
</style>