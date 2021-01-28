/**
* create by zhangxiang on 2021-01-27 18:59
* 类注释：
* 备注：
*/
<template>
  <component v-else :is="`mEl${item.eType}`" :item="item" :form-data="formData" @event="event"></component>
</template>

<script type="text/ecmascript-6">
import mElInput from "./mElInput";
import mElButton from "./mElButton";
import mElRadio from "./mElRadio";
import mElRadioButton from "./mElRadioButton";
import mElCheck from "./mElCheck";
import mElCheckButton from "./mElCheckButton";
import mElInputNumber from "./mElInputNumber";
import mElSelect from "./mElSelect";
import mElDatePicker from "./mElDatePicker";
import mElTimePicker from "./mElTimePicker";
import mElSwitch from "./mElSwitch";
import mElSlider from "./mElSlider";

export default {
  name: "index",
  components: {
    mElInput,
    mElButton,
    mElRadio,
    mElRadioButton,
    mElCheck,
    mElCheckButton,
    mElInputNumber,
    mElSelect,
    mElDatePicker,
    mElTimePicker,
    mElSwitch,
    mElSlider
  },
  props: {
    item: {},
    formData: {},
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    event(params) {
      this.$emit('event', {...params, data: this.formData})
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