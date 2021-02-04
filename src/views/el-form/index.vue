/**
* create by zhangxiang on 2021-01-26 15:29
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <m-form ref="mForm" :formData="formData" :formCols="formCols" :rules="rules" @event="event" @submit="submit">
      <template #test>
        <el-input v-model="formData.date5"></el-input>
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
          {
            eType: 'Check',
            label: "CheckBox",
            options: '手机',
            prop: 'date30',
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
        [
          {
            eType: 'Icon',
            elementUi: true,
            label: "elementUIIcon",
            class: "el-icon-share",
            span: 6,
          },
          {
            eType: 'Icon',
            label: "Icon",
            class: "icon-yiduxinxi",
            span: 6,
          },
          {
            eType: 'Cascader',
            label: "Cascader",
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }],
            span: 6,
          },
        ],
        [
          {eType: 'Button', value: "提交", type: "success", prop: 'submit', span: 2,},
          {eType: 'Button', value: "重置", type: "success", prop: 'reset', span: 2,}
        ]
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
    /**
     * 各种事件合集
     * @param params
     */
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
    /**
     * 提交事件
     */
    submit() {
      this.$refs.mForm.setNoShow("date13", true)
      console.log('submit', this.formData)
    },
    submits() {
      Promise.all([this.$refs.mForm.submit(), this.$refs.mForm1.submit()]).then(datas => {
        console.log("---同时提交-->", '校验成功')
      })
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