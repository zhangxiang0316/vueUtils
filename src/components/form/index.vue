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
        :label-width="labelWidth"
        :rules="rules">
      <el-row>
        <el-col v-for="(item,index) in formCols" :span="item.span" :key="item.label+index">
          <el-form-item :label="item.label" :prop="item.prop" v-if="!item.noShow">
            <slot v-if="item.eType==='slot'" :name="item.slotName"></slot>
            <component v-else :is="`mEl${item.eType}`" :item="item" :form-data="formData" @event="event"></component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import mElInput from "./components/mElInput";
import mElButton from "./components/mElButton";
import mElRadio from "./components/mElRadio";
import mElRadioButton from "./components/mElRadioButton";
import mElCheck from "./components/mElCheck";
import mElCheckButton from "./components/mElCheckButton";
import {clone} from '../../utils/utils'

export default {
  name: "index",
  components: {
    mElInput,
    mElButton,
    mElRadio,
    mElRadioButton,
    mElCheck,
    mElCheckButton
  },
  props: {
    formData: {type: Object, default: null},
    rules: {type: Object, default: null},
    formCols: {type: Array, default: () => []},
    labelWidth: {
      type: String,
      default: '100px'
    },
  },
  watch: {
    formCols: {
      handler() {
        this.formCols.forEach(item => {
          if (item.noShow) {
            delete this.formData[item.prop]
          }
        })
      },
      deep: true
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    component(type) {
      console.log(type)
      return `m-el-${type}`
    },
    submit() {
      this.$refs['elForm'].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    event(params) {
      console.log("----->", {...params, row: clone(this.formData)})
      this.$emit('event', {...params, row: clone(this.formData)})
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

</style>