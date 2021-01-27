/**
* create by zhangxiang on 2021-01-26 15:29
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <m-form ref="mform" :formData="formData" :formCols="formCols" :rules="rules" @event="event">
      <template v-slot:test>
        <el-input v-model="formData.date5"></el-input>
      </template>
    </m-form>
    <el-button @click="add">
      添加
    </el-button>
    <el-button @click="submit">确定</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import mForm from '@/components/form'

export default {
  name: "index",
  components: {mForm},
  props: {},
  data() {
    return {
      formData: {
        date13: [],
        date15: [],
      },
      formCols: [
        {
          eType: 'Input',
          placeholder: "fsdfdsfs",
          label: "姓名1",
          prop: 'name1',
          span: 12,
          noShow: false,
          suffixIcon: "el-icon-eleme"
        },
        {eType: 'Input', label: "姓名2", prop: 'name2', span: 12,},
        {eType: 'slot', label: "slot", slotName: "test", prop: 'date5', span: 12,},
        {eType: 'Button', value: "确定", type: "success", prop: 'date9', span: 12,},
        {
          eType: 'Radio',
          label: "Radio",
          options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
          prop: 'date10',
          span: 12,
        },
        {
          eType: 'RadioButton',
          label: "RadioButton",
          options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
          prop: 'date11',
          span: 12,
        },
        {
          eType: 'Check',
          label: "CheckBox",
          options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
          prop: 'date13',
          span: 12,
        },
        {
          eType: 'CheckButton',
          label: "CheckButton",
          options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
          prop: 'date15',
          span: 12,
        },
      ],
      rules: {
        date5: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ],
        date11: {required: true, message: '请选择活动区域', trigger: 'change'},
      },
    }
  },
  computed: {},
  methods: {
    event(params) {
      // this.formCols[0].noShow = !this.formCols[0].noShow
    },
    add() {
      this.formCols[0].noShow = !this.formCols[0].noShow
      console.log(this.formCols)
    },
    submit() {
      this.$refs['mform'].submit();
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