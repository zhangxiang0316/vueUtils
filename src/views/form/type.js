let prop = "prop"
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
        options: '手机,电脑',
        prop: prop,
        span: 24,
    },
    RadioButton: {
        eType: 'RadioButton',
        label: "单选按钮",
        options: '手机,电脑',
        prop: prop,
        span: 24,
    },
    Check: {
        eType: 'Check',
        label: "多选",
        options: '手机,电脑',
        prop: prop,
        span: 24,
    },
    CheckButton: {
        eType: 'CheckButton',
        label: "多选按钮",
        noShow: false,
        options: '手机,电脑',
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
        options: "手机,电脑",
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
    }

}

export const buttonList = [
    {name: "单行文本", eType: "Input"},
    {name: "多行文本", eType: "Textarea"},
    {name: "单选", eType: "Radio"},
    {name: "单选按钮", eType: "RadioButton"},
    {name: "多选", eType: "Check"},
    {name: "多选按钮", eType: "CheckButton"},
    {name: "下拉框", eType: "Select"},
    {name: "开关", eType: "Switch"},
    {name: "计数器", eType: "InputNumber"},
    {name: "日期", eType: "DatePicker"},
    {name: "时间", eType: "TimePicker"},
    {name: "按钮", eType: "Button"},
    {name: "评分", eType: "Rate"},
]

export const formSetCol = {
    Rate: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "max", eType: "InputNumber", prop: 'max', min: 5}],
    ],
    Input: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "显示切换密码图标", eType: "Switch", prop: 'showPassword'}],
        [{label: "后图标", eType: "Input", prop: 'suffixIcon'}],
        [{label: "前图标", eType: "Input", prop: 'prefixIcon'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    ],
    Textarea: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
        [{label: '行数', eType: "InputNumber", prop: 'rows'}]
    ],
    DatePicker: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "valueFormat", eType: "Input", prop: 'valueFormat'}],
        [{label: "format", eType: "Input", prop: 'format'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{
            label: "时间类型",
            eType: "Radio",
            prop: 'type',
            options: 'year,month,date,dates,week,datetime,datetimerange,daterange,monthrange'
        }],
        [{label: "对齐方式", eType: "Radio", prop: 'align', options: 'left, center, right'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    ],
    TimePicker: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "valueFormat", eType: "Input", prop: 'valueFormat'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否为时间范围", eType: 'Switch', prop: 'isRange'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    ],
    InputNumber: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{
            label: "按钮位置",
            eType: "Radio",
            prop: 'controlsPosition',
            options: [{label: "默认", value: ''}, {label: '右', value: 'right'},]
        }],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    ],
    Switch: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    ],
    Button: [
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "文字", eType: "Input", prop: 'value'}],
        [{label: "类型", eType: "Radio", prop: 'type', options: 'primary,success,info,warning,danger'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
    ],
    Radio: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
        [{label: "数据", eType: "slot", prop: 'options'}],
        [{label: "数据String", eType: "Input", prop: 'options'}],
    ],
    RadioButton: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
        [{label: "数据", eType: "slot", prop: 'options'}],
        [{label: "数据String", eType: "Input", prop: 'options'}],
    ],
    Check: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
        [{label: "数据", eType: "slot", prop: 'options'}],
        [{label: "数据String", eType: "Input", prop: 'options'}],
    ],
    CheckButton: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
        [{label: "数据", eType: "slot", prop: 'options'}],
        [{label: "数据String", eType: "Input", prop: 'options'}],
    ],
    Select: [
        [{label: "label名称", eType: "Input", prop: 'label'}],
        [{label: "prop名称", eType: "Input", prop: 'prop'}],
        [{label: "span", eType: "InputNumber", prop: 'span'}],
        [{label: "placeholder", eType: "Input", prop: 'placeholder'}],
        [{label: "是否必填", eType: 'Switch', prop: 'isRule'}],
        [{label: "是否展示label", eType: "Switch", prop: 'noFormItem'}],
        [{label: "数据", eType: "slot", prop: 'options'}],
        [{label: "数据String", eType: "Input", prop: 'options'}]
    ],
}


export const vueFile = (formCols, rules) => {
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
                      formData: {},
                      formCols: ${JSON.stringify(formCols)},
                      rules:${JSON.stringify(rules)},
                    }
                  },
                }
                </script>`
    return file
}
