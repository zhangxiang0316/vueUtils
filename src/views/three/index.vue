/**
* create by zx on 2021/11/9 10:10
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <div style="width: 1000px;height: 1000px" id="threeContainer"></div>
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
      const axisHelper = new THREE.AxisHelper(2000);
      this.scene.add(axisHelper);
      this.scene.add(new THREE.AmbientLight(0x404040, 6)); //环境光
      this.light = new THREE.DirectionalLight(0xffffff, ); //从正上方（不是位置）照射过来的平行光，0.45的强度
      this.light.position.set(-40, 60, -10);
      // this.light.position.multiplyScalar(0.3);
      this.light.castShadow = true;
      this.scene.add(this.light);
      /**
       * 相机设置
       */
      let container = document.getElementById("threeContainer");//显示3D模型的容器
      this.camera = new THREE.PerspectiveCamera(
          70,
          container.clientWidth / container.clientHeight,
          0.1,
          10
      );
      this.camera.position.z = 1;

      const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
      mesh.rotation.x = - Math.PI / 2;
      mesh.receiveShadow = true;
      this. scene.add( mesh );
      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setClearColor("#eee"); //设置背景颜色
      this.renderer.shadowMapEnabled = true
      container.appendChild(this.renderer.domElement);
      //创建控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.loadLoader()
    },

    initDragControls() {
      let transformControls = new TransformControls(this.camera, this.renderer.domElement)
      this.scene.add(transformControls)
      const dragControls = new DragControls([this.mesh], this.camera, this.renderer.domElement)
      dragControls.addEventListener('hoveron', event => {
        transformControls.attach(event.object)
      })
      dragControls.addEventListener('dragstart', event => {
        this.controls.enabled = false
      })
      dragControls.addEventListener('dragend', event => {
        this.controls.enabled = true
      })
    },

    loadLoader() {
      let self = this;
      let loader = new GLTFLoader();
      //load一个测试模型路径：public/model/zhuozi2.gltf
      // loader.load("/model/KingKong.glb", function (gltf) {
      loader.load("/model/Soldier.glb", function (gltf) {
            self.mesh = gltf.scene;
            self.mesh.castShadow = true;//开启投影
            self.mesh.receiveShadow = true;//接收阴影
            self.mesh.rotation.y = 135
            self.mesh.scale.set(0.3, 0.3, 0.3);//设置大小比例
            self.mesh.position.set(0, 0, 0);//设置位置
            self.scene.add(self.mesh); // 将模型引入three、
            self.animate();
            // self.initDragControls()
          },
      );
    },
    animate() {
      if (this.mesh) {
        requestAnimationFrame(this.animate);

        this.renderer.render(this.scene, this.camera);
      }
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