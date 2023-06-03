import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Dolphin{
    async create_object(){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/model_61a_-_bottlenose_dolphin/scene.gltf')
        var dolphin = gltf.scene;
        dolphin.scale.set(1.5, 1.5, 1.5);
        dolphin.position.x = -0.4;
        dolphin.position.y = -1;
        dolphin.position.z = 2;
        dolphin.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(dolphin);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(dolphin);
    gltf.animations.forEach((clip)=>{
      this.mixer.clipAction(clip).play();
    })
    
    var position2 = {x:-15, y: -3.2, z: 0, rY: Math.PI/2}
      var s1 = new TWEEN.Tween(position2)
      .to({x:5, y:0, z:0, rY: Math.PI/2},25000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(onUpdate2)

      var s2 = new TWEEN.Tween(position2)
       .to({x:4, y:-1.7, z:3, rY: 0}, 28000)
       .easing(TWEEN.Easing.Cubic.InOut)
       .onUpdate(onUpdate2)

      var s3 = new TWEEN.Tween(position2)
       .to({x:-3, y:-1.2, z: -2, rY: -Math.PI}, 28000)
       .easing(TWEEN.Easing.Cubic.InOut)
       .onUpdate(onUpdate2)

      var s4 = new TWEEN.Tween(position2)
       .to({x: -10, y:-1, z: 0, rY: Math.PI}, 35000)
       .easing(TWEEN.Easing.Cubic.InOut)
       .onUpdate(onUpdate2)

      var s5 = new TWEEN.Tween(position2)
       .to({x:4, y:-0.8, z:-3, rY: 0}, 28000)
       .easing(TWEEN.Easing.Cubic.InOut)
       .onUpdate(onUpdate2)
  
      function onUpdate2(){
        dolphin.position.x = position2.x;
        dolphin.position.y = position2.y;
        dolphin.position.z = position2.z;
        dolphin.rotation.y = position2.rY;
      }

      s1.chain(s2)
      s2.chain(s3)
      s3.chain(s4)
      s4.chain(s5)
      s5.chain(s1)

      s1.start();
      // s1.stop()
        
        
        this.dolphin = dolphin
    }

}