import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class CoralType1{
    async create_object(param_x, param_y, param_z){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/coral_v2.0/scene.gltf')
        var coralType1 = gltf.scene;
        // coralType1.scale.set(60, 60, 60);
        coralType1.position.x = param_x;
        coralType1.position.y = param_y;
        coralType1.position.z = param_z;
        // console.log( coralType1.position.x, coralType1.position.y, coralType1.position.z)
        // coralType1.rotation.y = Math.PI/4;
        // this.mixer = new THREE.AnimationMixer(coralType1);

        // gltf.animations.forEach((clip)=>{
        //     this.mixer.clipAction(clip).play();
        // })
        
        // this.mixer = new THREE.AnimationMixer(coralType1);
        // gltf.animations.forEach((clip)=>{
        //   this.mixer.clipAction(clip).play();
        // })
    
      this.coralType1 = coralType1
    }

}