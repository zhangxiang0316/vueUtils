<template>
  <div style="width:100%;;height:100%" @click="$refs.keyFrames.resetFrames()">
    <key-frames ref="keyFrames" loop="false" style="text-align: center">
      <img v-for="(item,index) in 45" duration="150" :src="getSrc(index)"/>
    </key-frames>
  </div>
</template>

<script>
import keyFrames from "../../components/keyFrames";

export default {
  name: "index",
  components: {
    keyFrames
  },
  methods: {
    getSrc(index) {
      if (index * 2< 10) {
        return require(`../../assets/cy/臭氧雷达000${index * 2}.png`)
      } else {
        return require(`../../assets/cy/臭氧雷达00${index * 2}.png`)
      }
    },
    start() {
      this.$refs.keyFrames.resetFrames();
    },
  }
}
</script>

<style scoped>

</style>