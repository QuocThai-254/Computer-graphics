import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class School_fish1{
    async create_object(){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/animated_swimming_tropical_fish_school_loop-v1.glb')
        var school_of_fish = gltf.scene;
       
        school_of_fish.flipY = false
        school_of_fish.scale.set(1.3, 1.3, 1.3);
        school_of_fish.position.x = -2.5;
        // school_of_fish.position.y = -1;
        // school_of_fish.position.z = 2;
        // school_of_fish.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(school_of_fish);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })

        var position = {x:-1, y: -1.3, z: 6, rY: 0}
        var sc1 = new TWEEN.Tween(position)
        .to({x:-1.5, y:-4.4, z:3, rY: Math.PI}, 28000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate5)

        var sc2 = new TWEEN.Tween(position)
        .to({x:-5, y:-5, z:-3, rY: 0},35000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate5)
        
        var sc3 = new TWEEN.Tween(position)
        .to({x:-8, y:-3, z:7, rY: 0}, 34000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate5)

        function onUpdate5(){
            school_of_fish.position.x = position.x;
            school_of_fish.position.y = position.y;
            school_of_fish.position.z = position.z;
            school_of_fish.rotation.y = position.rY;
        }

        sc1.chain(sc2)
        sc2.chain(sc3)
        sc3.chain(sc1)

        sc1.start()
        
        this.school_of_fish = school_of_fish
    }

}