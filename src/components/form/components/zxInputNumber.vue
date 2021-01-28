/**
* create by zhangxiang on 2021-01-27 18:32
* 类注释：
* 备注：
*/
<template>
  <el-input-number
      v-model="formData[item.prop]"
      @change="change"
      :disabled="item.disabled"
      :controls-position="item.controlsPosition"
      :style="item.style"
      :class="item.class"
      :min="item.min"
      :max="item.max"
      :step="item.step">
  </el-input-number>
</template>

<script type="text/ecmascript-6">
import mixins from '../mixins'

export default {
  name: "mElInputNumber",
  mixins: [mixins],
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    change() {
      this.mixinEvent({
        type: 'change',
        prop: this.item.prop,
        value: this.formData[this.item.prop]
      })
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

<style scoped lang="less" rel="stylesheet/less">

</style>