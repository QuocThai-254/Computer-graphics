import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Undersea_fish_submarine{
    async create_object(param_x, param_y, param_z,scale){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/animated_undersea_scene_fish_submarine_coral/scene.gltf')
        var undersea_fish_submarine = gltf.scene;
        undersea_fish_submarine.scale.set(scale, scale, scale);
        undersea_fish_submarine.position.x = param_x;
        undersea_fish_submarine.position.y = param_y;
        undersea_fish_submarine.position.z = param_z;
        undersea_fish_submarine.rotation.y = Math.PI/2;
        this.mixer = new THREE.AnimationMixer(undersea_fish_submarine);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })
        
        this.mixer = new THREE.AnimationMixer(undersea_fish_submarine);
        gltf.animations.forEach((clip)=>{
          this.mixer.clipAction(clip).play();
        })
        
        this.undersea_fish_submarine = undersea_fish_submarine
    }

}