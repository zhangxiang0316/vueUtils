<template>
  <div id="app">
<!--    <vue-particles
        color="#f00"
         style="position: absolute;width: 100%;height: 100%"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#f0f"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
    >
    </vue-particles>-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  created() {

  }
}
</script>

<style>

</style>
