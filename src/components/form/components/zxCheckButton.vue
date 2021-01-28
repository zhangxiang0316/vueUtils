/**
* create by zhangxiang on 2021-01-27 18:24
* 类注释：
* 备注：
*/
<template>
  <el-checkbox-group
      :min="item.min"
      :max="item.max"
      v-model="formData[item.prop]">
    <el-checkbox-button
        v-for="option in item.options"
        :key="option.value"
        :label="option.value"
        :disabled="item.disabled"
        :style="item.style"
        @change="change">
      {{ option.label }}
    </el-checkbox-button>
  </el-checkbox-group>
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