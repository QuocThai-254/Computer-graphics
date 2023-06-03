import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class CoralType2{
    async create_object(param_x, param_y, param_z,scale){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/fan_coral_med-v1.glb')
        var coralType2 = gltf.scene;
        coralType2.scale.set(scale, scale, scale);
        coralType2.position.x = param_x;
        coralType2.position.y = param_y;
        coralType2.position.z = param_z;
        // coralType2.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(coralType2);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(coralType2);
        gltf.animations.forEach((clip)=>{
          this.mixer.clipAction(clip).play();
        })
    
      this.coralType2 = coralType2
    }

}