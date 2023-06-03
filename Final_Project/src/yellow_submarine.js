import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Submarine{
    async create_object(param_x, param_y, param_z,scale){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/yellow_submarine-v1.glb')
        var submarine = gltf.scene;
        submarine.scale.set(scale, scale, scale);
        submarine.position.x = param_x;
        submarine.position.y = param_y;
        submarine.position.z = param_z;
        // submarine.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(submarine);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(submarine);
        gltf.animations.forEach((clip)=>{
          this.mixer.clipAction(clip).play();
        })
    
      this.submarine = submarine
    }

    // update(delta, keysPressed){
    //   this.mixer.update(delta)
    //   console.log(keysPressed)
    // }

}