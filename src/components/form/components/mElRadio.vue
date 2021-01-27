/**
* create by zhangxiang on 2021-01-27 17:56
* 类注释：
* 备注：
*/
<template>
  <el-radio-group
      v-model="formData[item.prop]"
      :size="item.size"
      @change="change">
    <el-radio
        v-for="option in item.options"
        :key="option.value"
        :label="option.value"
        :border="item.border"
        :style="item.style"
        :disabled="item.disabled">
      {{ option.label }}
    </el-radio>
  </el-radio-group>
</template>

<script type="text/ecmascript-6">
import mixins from '../mixins'

export default {
  components: {},
  mixins: [mixins],
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