let prop = "prop"
/**
 * 每种类型对应表单
 * @type {{TimePicker: {prop: string, eType: string, label: string, span: number}, InputNumber: {prop: string, eType: string, label: string, span: number}, ColorPicker: {prop: string, eType: string, label: string, span: number}, Rate: {prop: string, eType: string, label: string, span: number}, Check: {prop: string, eType: string, options: string, label: string, span: number}, Radio: {prop: string, eType: string, options: string, label: string, span: number}, RadioButton: {prop: string, eType: string, options: string, label: string, span: number}, Input: {prop: string, eType: string, label: string, span: number}, Textarea: {prop: string, eType: string, label: string, type: string, rows: number, mType: string, span: number}, Switch: {prop: string, eType: string, label: string, span: number}, Button: {prop: string, eType: string, type: string, value: string, span: number}, Select: {prop: string, eType: string, options: string, label: string, span: number}, DatePicker: {prop: string, eType: string, valueFormat: string, label: string, type: string, span: number}, CheckButton: {noShow: boolean, prop: string, eType: string, options: string, label: string, span: number}}}
 */
export const eType = {
  Input: {
    eType: 'Input',
    label: "单行文本",
    prop: prop,
    span: 24
  },
  Textarea: {
    eType: 'Input',
    mType: 'Textarea',
    label: "多行文本",
    span: 24,
    type: "textarea",
    prop: prop,
    rows: 5,
  },
  Button: {
    eType: 'Button',
    value: "提交",
    type: "success",
    prop: 'submit',
    span: 24
  },
  Radio: {
    eType: 'Radio',
    label: "单选",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  RadioButton: {
    eType: 'RadioButton',
    label: "单选按钮",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  Check: {
    eType: 'Check',
    label: "多选",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  CheckButton: {
    eType: 'CheckButton',
    label: "多选按钮",
    noShow: false,
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  InputNumber: {
    eType: 'InputNumber',
    label: "计数器",
    prop: prop,
    span: 24,
  },
  DatePicker: {
    eType: 'DatePicker',
    type: 'date',
    label: "日期",
    valueFormat: "yyyy-MM-dd",
    prop: prop,
    span: 24,
  },
  Select: {
    eType: 'Select',
    label: "下拉框",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  TimePicker: {
    eType: 'TimePicker',
    label: "时间",
    prop: prop,
    span: 24,
  },
  Switch: {
    eType: 'Switch',
    label: "开关",
    prop: prop,
    span: 24,
  },
  Rate: {
    eType: 'Rate',
    label: "评分",
    prop: prop,
    span: 24,
  },
  ColorPicker: {
    eType: 'ColorPicker',
    label: "颜色选择",
    prop: prop,
    span: 24,
  },
  Editor: {
    eType: "Editor",
    label: "富文本",
    prop: prop,
    span: 24
  }
}

/**
 * 所有表单类型
 * @type {({name: string, eType: string}|{name: string, eType: string}|{name: string, eType: string}|{name: string, eType: string}|{name: string, eType: string})[]}
 */
export const buttonList = [
  {name: "单行文本", eType: "Input"},
  {name: "多行文本", eType: "Textarea"},
  {name: "富文本", eType: "Editor"},
  {name: "单选", eType: "Radio"},
  {name: "单选按钮", eType: "RadioButton"},
  {name: "多选", eType: "Check"},
  {name: "多选按钮", eType: "CheckButton"},
  {name: "下拉框", eType: "Select"},
  {name: "开关", eType: "Switch"},
  {name: "计数器", eType: "InputNumber"},
  {name: "日期", eType: "DatePicker"},
  {name: "时间", eType: "TimePicker"},
  {name: "评分", eType: "Rate"},
  {name: "颜色", eType: "ColorPicker"},
  {name: "按钮", eType: "Button"},
]
/**
 * 每种类型控制字段
 * @type {{TimePicker: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[])[], InputNumber: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{min: number, prop: string, eType: string, label: string}[])[], ColorPicker: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Rate: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{min: number, prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Check: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Radio: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], RadioButton: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Input: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Textarea: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Switch: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], Button: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, options: string, label: string}[])[], Select: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], DatePicker: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[], CheckButton: ({prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[]|{min: number, max: number, prop: string, eType: string, label: string, marks: {"12": string, "6": string, "18": string}}[]|{prop: string, eType: string, label: string}[]|{prop: string, eType: string, label: string}[])[]}}
 */
export const formSetCol = {
  Input: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
    [{label: "字符数", eType: "Input", prop: 'maxlength'}],
    [{label: "后图标", eType: "Input", prop: 'suffixIcon'}],
    [{label: "前图标", eType: "Input", prop: 'prefixIcon'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "切换密码图标", eType: "Switch", prop: 'showPassword'}],
    [{label: "输入字数统计", eType: "Switch", prop: 'showWordLimit'}],
    [{label: "删除按钮", eType: "Switch", prop: 'clearable'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
  ],
  Textarea: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
    [{label: "字符数", eType: "Input", prop: 'maxlength'}],
    [{label: '行数', eType: "InputNumber", prop: 'rows'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "输入字数统计", eType: "Switch", prop: 'showWordLimit'}],
    [{label: "删除按钮", eType: "Switch", prop: 'clearable'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
  ],
  Editor: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
  ],
  DatePicker: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "valueFormat", eType: "Input", prop: 'valueFormat'}],
    [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
    [{label: "format", eType: "Input", prop: 'format'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{
      label: "时间类型",
      eType: "Select",
      prop: 'type',
      options: [
        {label: '年', value: 'year'},
        {label: '月', value: 'month'},
        {label: '日', value: 'date'},
        {label: '多日期', value: 'dates'},
        {label: '星期', value: 'week'},
        {label: '日期时间', value: 'datetime'},
        {label: '日期时间范围', value: 'datetimerange'},
        {label: '日期范围', value: 'daterange'},
        {label: '月份范围', value: 'monthrange'}
      ]
    }],
    [{label: "对齐方式", eType: "Select", prop: 'align', options: 'left, center, right'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否可清除", eType: 'Switch', prop: 'clearable'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
  ],
  TimePicker: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "valueFormat", eType: "Input", prop: 'valueFormat'}],
    [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否为时间范围", eType: 'Switch', prop: 'isRange'}],
    [{label: "是否使用箭头", eType: 'Switch', prop: 'arrowControl'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
  ],
  InputNumber: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "步长", eType: "InputNumber", prop: 'step', min: 1}],
    [{label: "精度", eType: 'InputNumber', prop: 'precision', min: 0}],
    [{
      label: "按钮位置",
      eType: "Select",
      prop: 'controlsPosition',
      options: [{label: "默认", value: '-'}, {label: '右', value: 'right'},]
    }],
    [{label: "步长倍数", eType: 'Switch', prop: 'stepStrictly'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
  ],
  Switch: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "打开文字", eType: "Input", prop: 'activeText'}],
    [{label: "关闭文字", eType: "Input", prop: 'inactiveText'}],
    [{label: "打开值", eType: "Input", prop: 'activeValue'}],
    [{label: "关闭值", eType: "Input", prop: 'inactiveValue'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "打开颜色", eType: "ColorPicker", prop: 'activeColor'}],
    [{label: "关闭颜色", eType: "ColorPicker", prop: 'inactiveColor'}],
  ],
  Button: [
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{label: "文字", eType: "Input", prop: 'value'}],
    [{label: "图标类名", eType: "Input", prop: 'icon'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "类型", eType: "Select", prop: 'type', options: 'primary,success,info,warning,danger'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "朴素按钮", eType: "Switch", prop: 'plain'}],
    [{label: "圆角按钮", eType: "Switch", prop: 'round'}],
    [{label: "圆形按钮", eType: "Switch", prop: 'circle'}],
    [{label: "加载中状态", eType: "Switch", prop: 'loading'}],
  ],
  Radio: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "数据", eType: "slot", prop: 'options', slotName: "options"}],
  ],
  RadioButton: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "数据", eType: "slot", prop: 'options', slotName: "options"}],
    // [{label: "数据String", eType: "Input", prop: 'options'}],
  ],
  Check: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "数据", eType: "slot", prop: 'options', slotName: "options"}],
    // [{label: "数据String", eType: "Input", prop: 'options'}],
  ],
  CheckButton: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "数据", eType: "slot", prop: 'options', slotName: "options"}],
    // [{label: "数据String", eType: "Input", prop: 'options'}],
  ],
  Select: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
    [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    [{label: "可删除", eType: "Switch", prop: 'clearable'}],
    [{label: "数据", eType: "slot", prop: 'options', slotName: "options",}],
    // [{label: "数据String", eType: "Input", prop: 'options'}]
  ],
  Rate: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "max", eType: "InputNumber", prop: 'max', min: 5}],
    [{label: "未选中的颜色", eType: "ColorPicker", prop: 'voidColor'}],
    [{label: "允许半选", eType: "Switch", prop: 'allowHalf'}],
    [{label: "选中颜色数组", eType: "Input", prop: 'colors'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
  ],
  ColorPicker: [
    [{label: "标题名称", eType: "Input", prop: 'label'}],
    [{label: "字段名", eType: "Input", prop: 'prop'}],
    [{
      label: "span",
      eType: "Slider",
      prop: 'span',
      max: 24,
      min: 1,
      marks: {6: '6', 12: '12', 18: '18', 24: '24'}
    }],
    [{label: "支持透明度", eType: "Switch", prop: 'showAlpha'}],
    [{label: "必填提示语", eType: "Input", prop: 'tipMessage'}],
    [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
  ]
}

/**
 * 导出vue文件模板
 * @param formCols
 * @param rules
 * @param formData
 * @returns {string}
 */
export const vueFile = (formCols, rules, formData) => {
  let file = `<template>
                    <div class="vueFile">
                    <zx-form
                        ref="mForm"
                        :formData="formData"
                        :formCols="formCols"
                        :rules="rules">
                    </zx-form>
                  </div>
                 </template>

                <script type="text/ecmascript-6">
                export default {
                  name: "vueFile",
                  data() {
                    return {
                      formData: ${JSON.stringify(formData)},
                      formCols: ${JSON.stringify(formCols)},
                      rules:${JSON.stringify(rules)},
                    }
                  },
                }
                </script>`
  return file
}

export const buttons = [
  {
    eType: 'Input',
    label: "单行文本",
    prop: prop,
    span: 24
  },
  {
    eType: 'Input',
    mType: 'Textarea',
    label: "多行文本",
    span: 24,
    type: "textarea",
    prop: prop,
    rows: 5,
  },
  {
    eType: 'Button',
    value: "提交",
    labels: "按钮",
    type: "success",
    prop: 'submit',
    span: 24
  },
  {
    eType: 'Radio',
    label: "单选",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  {
    eType: 'RadioButton',
    label: "单选按钮",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  {
    eType: 'Check',
    label: "多选",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  {
    eType: 'CheckButton',
    label: "多选按钮",
    noShow: false,
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  {
    eType: 'InputNumber',
    label: "计数器",
    prop: prop,
    span: 24,
  },
  {
    eType: 'DatePicker',
    type: 'date',
    label: "日期",
    valueFormat: "yyyy-MM-dd",
    prop: prop,
    span: 24,
  },
  {
    eType: 'Select',
    label: "下拉框",
    options: [{label: "手机", value: "1"}, {label: "电脑", value: "2"}],
    prop: prop,
    span: 24,
  },
  {
    eType: 'TimePicker',
    label: "时间",
    prop: prop,
    span: 24,
  },
  {
    eType: 'Switch',
    label: "开关",
    prop: prop,
    span: 24,
  },
  {
    eType: 'Rate',
    label: "评分",
    prop: prop,
    span: 24,
  },
  {
    eType: 'ColorPicker',
    label: "颜色选择",
    prop: prop,
    span: 24,
  },
  {
    eType: "Editor",
    label: "富文本",
    prop: prop,
    span: 24
  }
]
