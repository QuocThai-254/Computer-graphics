import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Sand{
    async create_object(){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/substance_sand_01-v1.glb')
        var sand = gltf.scene;
        sand.scale.set(0.035, 0.035, 0.035);
        // sand.position.x = -4;
        sand.position.y = -10;
        // sand.position.z = 2;
        // sand.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(sand);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(sand);
        gltf.animations.forEach((clip)=>{
          this.mixer.clipAction(clip).play();
        })
    
      this.sand = sand
    }

}