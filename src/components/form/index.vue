/**
* create by zhangxiang on 2021-01-26 15:21
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <el-form
        ref="elForm"
        :model="formData"
        :size="size"
        :inline="isInline"
        :label-width="labelWidth"
        :rules="rules">
      <el-row v-for="(items,index) in formCols">
        <el-col :class="{ 'ele-form-col-other-line': item.otherLine}"
                v-for="(item,index) in items"
                :span="item.span"
                :key="index"
                :offset="item.offset">
          <el-form-item :label="item.label" :prop="item.prop" v-if="!item.noShow">
            <slot v-if="item.eType==='slot'" :name="item.slotName"></slot>
            <m-element v-else :item="item" :form-data="formData" @event="event"></m-element>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import mElement from './components'


export default {
  name: "index",
  components: {
    mElement
  },
  props: {
    formData: {type: Object, default: null},
    rules: {type: Object, default: null},
    formCols: {type: Array, default: () => []},
    isInline: {type: Boolean, default: false},
    size: {type: String, default: 'medium'},
    labelWidth: {type: String, default: '120px'},
  },
  watch: {
    formCols: {
      handler() {
        this.formCols.forEach(item => {
          if (item.noShow)
            if (item.eType === 'Check' || item.eType === 'CheckButton') {
              this.formData[item.prop] = []
            } else {
              delete this.formData[item.prop]
            }
        })
        this.$forceUpdate()
      },
      deep: true
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    submit() {
      return new Promise((resolve, reject) => {
        this.$refs['elForm'].validate((valid) => {
          if (valid) {
            resolve(valid)
          } else {
            reject(valid)
          }
        });
      })

    },
    reset() {
      this.$refs['elForm'].resetFields();
    },
    event(params) {
      if (params.prop === "submit") {
        this.submit().then(res => {
          this.$emit('submit')
        }).catch(err => {
          console.log("校验失败")
        })
      } else if (params.prop === "reset") {
        this.reset()
        this.formCols.forEach(item => {
          if (item.eType === 'Check' || item.eType === 'CheckButton') {
            this.formData[item.prop] = []
          } else {
            delete this.formData[item.prop]
          }
        })
        this.$emit('reset')
      }
      this.$emit('event', params)
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.ele-form-col-other-line {
  clear: both;
}
</style>