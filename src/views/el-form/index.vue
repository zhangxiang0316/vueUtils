/**
* create by zhangxiang on 2021-01-26 15:29
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <m-form ref="mForm" :formData="formData" :formCols="formCols" :rules="rules" @event="event" @submit="submit">
      <template v-slot:test>
        <el-input v-slot:test v-model="formData.date5"></el-input>
      </template>
    </m-form>
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
        data27: "32134324",
      },
      formCols: [
        [
          {
            eType: 'Input',
            placeholder: "请输入姓名",
            label: "Input",
            prop: 'name1',
            noShow: false,
            span: 6,
            suffixIcon: "el-icon-eleme"
          },
          {eType: 'slot', label: "自定义slot", slotName: "test", prop: 'date5', span: 6,},
          {
            eType: 'Radio',
            label: "Radio",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date10',
            span: 6,
          },
          {
            eType: 'RadioButton',
            label: "RadioButton",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date11',
            span: 6,
          },
        ],
        [
          {
            eType: 'InputNumber',
            label: "InputNumber",
            prop: 'date16',
            span: 6,
          },
          {
            eType: 'CheckButton',
            label: "CheckButton",
            noShow: false,
            // options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            // options: '手机,电脑',
            options: ['手机', '电脑'],
            prop: 'date15',
            span: 6,
          },
          {
            eType: 'Check',
            label: "CheckBox",
            // options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            options: '手机,电脑',
            prop: 'date13',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'year',
            label: "year",
            valueFormat: "yyyy",
            prop: 'date18',
            span: 6,
          },
        ],
        [
          {
            eType: 'Select',
            label: "Select",
            options: [{label: "手机", value: "0"}, {label: "电脑", value: "1"}],
            prop: 'date17',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'date',
            label: "date",
            valueFormat: "yyyy-MM-dd",
            prop: 'date19',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'datetime',
            label: "datetime",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            prop: 'date20',
            span: 6,
          },
        ],
        [
          {
            eType: 'DatePicker',
            type: 'daterange',
            label: "daterange",
            valueFormat: "yyyy-MM-dd",
            prop: 'date21',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'datetimerange',
            label: "datetimerange",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            prop: 'date22',
            span: 6,
          },
          {
            eType: 'DatePicker',
            type: 'dates',
            label: "dates",
            valueFormat: "yyyy-MM-dd",
            prop: 'date23',
            span: 6,
          },
          {
            eType: 'TimePicker',
            label: "TimePicker",
            prop: 'date24',
            noShow: false,
            span: 6,
          },
        ],
        [
          {
            eType: 'Switch',
            label: "Switch",
            prop: 'date25',
            span: 6,
          },
          {
            eType: 'Slider',
            label: "Slider",
            prop: 'date26',
            noShow: false,
            span: 6,
          },
          {
            eType: "Span",
            prop: "data27",
            // noFormItem: true,
            span: 6,
            formatter: (data) => {
              console.log(data)
            }
          },
          {
            eType: 'Rate',
            label: "Rate",
            prop: 'date29',
            span: 6,
          },
        ],
        [{eType: 'Button', value: "提交", type: "success", prop: 'submit', span: 2,},
          {eType: 'Button', value: "重置", type: "success", prop: 'reset', span: 2,}]
      ],
      rules: {
        date5: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ],
        date11: {required: true, message: '请选择活动区域', trigger: 'change'},
      },
      show: true
    }
  },
  computed: {},
  methods: {
    event(params) {
      console.log(params, this.formData)
      this.$refs.mForm.setNoShow('date10', this.show)
      this.$refs.mForm.setOptions('date15',
          [
            {label: "手机", value: "0"},
            {label: "电脑", value: "1"},
            {label: "平板", value: "2"}
          ])
      this.show = !this.show
    },
    submit() {
      this.$refs.mForm.setNoShow("date13", true)
      console.log('submit', this.formData)
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