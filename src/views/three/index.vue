/**
* create by zx on 2021/11/9 10:10
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div style="width: 2000px;height: 1000px"  id="threeContainer"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as THREE from "three"; //引入Threejs
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {DragControls} from "three/examples/jsm/controls/DragControls";
import {TransformControls} from "three/examples/jsm/controls/TransformControls";


export default {

  name: "index",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    init() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xcfcfcf);

      this.clock = new THREE.Clock();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(0, 100, 150);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.camera.updateProjectionMatrix(); //相机更新

      var ambient = new THREE.AmbientLight(0xffffff, 0.1);
      this.scene.add(ambient);

      this.dirLight = new THREE.DirectionalLight(0xffffff);
      this.dirLight.position.set(-30, 120, -100);
      this.dirLight.castShadow = true;
      this.dirLight.shadow.camera.top = 100;
      this.dirLight.shadow.camera.bottom = -100;
      this.dirLight.shadow.camera.left = -100;
      this.dirLight.shadow.camera.right = 100;
      this.dirLight.shadow.camera.near = 0.1;
      this.dirLight.shadow.camera.far = 500;
      this.scene.add(this.dirLight);

      const mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 1000), new THREE.MeshPhongMaterial({
        color: 0x9cfcf99,
        depthWrite: false
      }));
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(0, -20, 0)
      mesh.receiveShadow = true;
      this.scene.add(mesh);

      // PolarGridHelper( radius：标网格的半径, radials：径向线的数量, circles：圆圈数,
      // divisions：每个圆圈使用的线段数, color1：用于网格元素的第一种颜色, color2：用于网格元素的第一种颜色 )
      var radius = 1000;
      var radials = 16;
      var circles = 8;
      var divisions = 64;
      var PolarGridHelper = new THREE.PolarGridHelper(radius, radials, circles, divisions);
      PolarGridHelper.position.set(0, -20, 0)
      this.scene.add(PolarGridHelper)
      /**
       * 创建渲染器对象
       */
      let container = document.getElementById("threeContainer");
      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.gammaInput = true;
      this.renderer.gammaOutput = true;
      container.appendChild(this.renderer.domElement);
      //创建控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 1;
      let self = this
      this.controls.addEventListener('change', function () {
        self.renderer.render(self.scene, self.camera);
      })
      this.loadLoader()
    },

    loadLoader() {
      let self = this;
      let loader = new GLTFLoader();
      //load一个测试模型路径：public/model/zhuozi2.gltf
      // loader.load("/model/KingKong.glb", function (gltf) {
      loader.load("./model/Soldier.glb", function (gltf) {
            self.model = gltf.scene;
            self.scene.add(self.model);
            self.model.traverse(function (object) {
              if (object.isMesh) {
                object.castShadow = true;
                console.log(object);
              }
            });
            self.model.rotation.y = -Math.PI;
            self.model.scale.set(50, 50, 50);

            // 骨骼显示助手
            // self.skeleton = new THREE.SkeletonHelper(self.model);
            // self.scene.add(self.skeleton);

            var animations = gltf.animations;
            self.mixer = new THREE.AnimationMixer(self.model);

            self.idleAction = self.mixer.clipAction(animations[0]);
            self.walkAction = self.mixer.clipAction(animations[3]);
            self.runAction = self.mixer.clipAction(animations[1]);
            self.runAction.play();
            self.animate();
          },
      );
    },
    animate() {
      requestAnimationFrame(this.animate);
      const mixerUpdateDelta = this.clock.getDelta();
      if (this.mixer) this.mixer.update(mixerUpdateDelta);
      if (this.controls) this.controls.update();
      this.renderer.render(this.scene, this.camera)
    }
  },
  activated() {
  },
  mounted() {
    this.init()
  },
  created() {
  }
}
</script>

<style scoped>

</style>