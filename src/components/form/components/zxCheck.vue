/**
* create by zhangxiang on 2021-01-27 18:18
* 类注释：
* 备注：
*/
<template>
  <el-checkbox-group
      v-model="formData[item.prop]"
      :min="item.min"
      :max="item.max">
    <el-checkbox
        v-for="option in options"
        :key="option.value?option.value:option"
        :label="option.value?option.value:option"
        :disabled="item.disabled"
        :style="item.style"
        @change="change">
      {{ option.label ? option.label : option }}
    </el-checkbox>
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
  watch: {},
  computed: {
    checkValue: {
      get() {
        if (!this.formData[this.item.prop]) this.formData[this.item.prop] = []
        console.log('get', this.formData[this.item.prop])
        return this.formData[this.item.prop]
      },
      set(val) {
        this.$set(this.formData, this.item.prop, val)
        console.log('set:', this.formData[this.item.prop])
      }
    },
    options() {
      if (this.item.options instanceof Array) {
        return this.item.options
      } else {
        let list = this.item.options.split(',')
        return list.map(item => {
          return {value: item, label: item}
        })
      }
    },
  },
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