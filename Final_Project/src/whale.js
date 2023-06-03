import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Whale{
    async create_object(){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/blue_whale (1).glb')
        var whale = gltf.scene;
        whale.scale.set(0.45, 0.45, 0.45);
        whale.position.x = 2;
        whale.position.y = 1;
        whale.position.z = 0;
        whale.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(whale);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(whale);
        gltf.animations.forEach((clip)=>{
        this.mixer.clipAction(clip).play();
    })
    
    var position2 = {x:-15, y: -4, z: 15, rY: -Math.PI}
      var s1 = new TWEEN.Tween(position2)
      .to({x:-15, y:-6, z:0, rY: -Math.PI/4},250000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(onUpdate2)

      var s2 = new TWEEN.Tween(position2)
       .to({x:15, y:-8, z:10, rY: Math.PI/2}, 300000)
       .easing(TWEEN.Easing.Cubic.InOut)
       .onUpdate(onUpdate2)

      var s3 = new TWEEN.Tween(position2)
       .to({x:-12, y:-4, z: 12, rY: -Math.PI}, 300000)
       .easing(TWEEN.Easing.Cubic.InOut)
       .onUpdate(onUpdate2)

    //   var s4 = new TWEEN.Tween(position2)
    //    .to({x: -10, y:-8, z: 28, rY: 0}, 35000)
    //    .easing(TWEEN.Easing.Cubic.InOut)
    //    .onUpdate(onUpdate2)

    //   var s5 = new TWEEN.Tween(position2)
    //    .to({x:-20, y:-6, z:20, rY: 0}, 28000)
    //    .easing(TWEEN.Easing.Cubic.InOut)
    //    .onUpdate(onUpdate2)
  
      function onUpdate2(){
        whale.position.x = position2.x;
        whale.position.y = position2.y;
        whale.position.z = position2.z;
        whale.rotation.y = position2.rY;
      }

      s1.chain(s2)
      s2.chain(s3)
      s3.chain(s1)
    //   s4.chain(s5)
    //   s5.chain(s1)

      s1.start();
      // s1.stop()
        
        
        this.whale = whale
    }

}