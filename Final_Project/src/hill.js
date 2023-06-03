import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Hill{
    async create_object(param_x, param_y, param_z,scale){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/termite_mound_-_photoscanned_-_high_poly.glb')
        var hill = gltf.scene;
        hill.scale.set(scale, scale, scale);
        hill.position.x = param_x;
        hill.position.y = param_y;
        hill.position.z = param_z;
        hill.rotation.y = Math.PI/2;
        this.mixer = new THREE.AnimationMixer(hill);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(hill);
    gltf.animations.forEach((clip)=>{
      this.mixer.clipAction(clip).play();
    })
    
      this.hill = hill
    }

}