/**
* create by zx on 2021/8/16 16:01
* 类注释：
* 备注：
*/
<template>
  <div class="balling">
    <div
        v-for="(ball, index) in balls"
        v-if="ball.show"
        :data-id="ball.id"
        :style="ballclass(ball)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 15,
      balls: [],
      // 控制小球运动速度
      speed: 10,
    };
  },
  props: ["baldic"],
  watch: {
    baldic: {
      handler() {
        console.log(this.baldic);
        this.init();
        this.move();
      }
    }
  },
  created() {},
  methods: {
    init() {
      this.balls = [];
      this.sx = this.baldic.sx;
      this.sy = this.baldic.sy;
      this.tx = this.baldic.tx + this.size / 2;
      this.ty = this.baldic.ty + this.size / 2;
      this.t = 0;
      this.a = 0.4;
      this.tt = Math.pow(Math.abs(this.ty - this.sy) / this.a, 0.5);
      console.log(this.tt);
      if (this.ty - this.sy < 0) this.a = -this.a;
      this.speed = Math.abs(this.tx - this.sx) / this.tt;

      this.balls.push({
        show: true,
        x: this.sx + this.speed * this.t,
        y: this.sy + this.t * this.t * this.a,
        id: 110
      });
      this.t++;
    },
    ballclass(ball) {
      return {
        position: "fixed",
        left: -this.size / 2 + "px", // 这里定死位置不是很合理，但是效果还行
        top: -this.size / 2 + "px",
        width: this.size + "px",
        height: this.size + "px",
        "border-radius": "50%",
        "background-color": "skyblue",
        transform: `translate3d(${ball.x}px, ${ball.y}px, 0)`, //有过渡不掉帧
        "z-index": 10,
        "background-color": "red"
      };
    },

    move() {
      for (let i in this.balls) {
        this.balls[i].show = false;
      }
      if (Math.abs(this.t) < Math.abs(this.tt)) {
        this.balls.push({
          show: true,
          x: this.sx + this.speed * this.t,
          y: this.sy + this.t * this.t * this.a,
          id: 110
        });
        this.t++;
        setTimeout(this.move, 10);
      } else {
        console.log(this.balls);
        this.balls = [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.balling {
  width: 0;
  height: 0;
}
</style>