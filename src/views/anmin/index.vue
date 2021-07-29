<template>
  <div style="width:100%;height:100%;margin-right: auto">
    <key-frames loop="true" style="text-align: center;width: 30%;height: 40%">
      <img v-for="(item,index) in 45" duration="41" :src="getSrc(index)">
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
      if (index < 10) {
        return require(`../../assets/cy/臭氧雷达000${index}.png`)
      } else {
        return require(`../../assets/cy/臭氧雷达00${index}.png`)
      }
    }
  }
}
</script>

<style scoped>

</style>