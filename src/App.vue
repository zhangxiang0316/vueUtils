<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  created() {

    this.$log.default('>>> 我是一些默认提示')
    this.$log.primary('>>> 我是一些标记提示')
    this.$log.success('>>> 我是一些成功提示')
    this.$log.warning('>>> 我是一些警告提示')
    this.$log.danger('>>> 我是一些错误提示')
  }
}
</script>

<style>

</style>
