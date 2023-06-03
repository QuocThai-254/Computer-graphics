import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Jellyfish2{
    async create_object(){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/jellyfish/scene.gltf')
        var jellyfish = gltf.scene;
        jellyfish.scale.set(0.9, 0.9, 0.9);
        jellyfish.position.x = -2.5;
        jellyfish.position.y = -1;
        jellyfish.position.z = 2;
        jellyfish.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(jellyfish);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })

        var position9 = {x:-15, y: -7, z: 15, rY: Math.PI/2}
        var sr1 = new TWEEN.Tween(position9)
        .to({x:-10, y:-6, z:11, rY: Math.PI/2},30000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(onUpdate8)
    
        var sr2 = new TWEEN.Tween(position9)
        .to({x:-16, y: -4, z: 18, rY: -Math.PI}, 20000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate8)
    
        var sr3 = new TWEEN.Tween(position9)
        .to({x: -13, y: -5, z:9, rY: -Math.PI/4}, 35000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate8)
    
        var sr4 = new TWEEN.Tween(position9)
        .to({x: -8, y: -7, z:4, rY: Math.PI/2}, 25000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate8)
    
        var sr5 = new TWEEN.Tween(position9)
        .to({x: -8, y: -3.8, z:10, rY: -Math.PI/4}, 25000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(onUpdate8)
    
        function onUpdate8(){
        jellyfish.position.x = position9.x;
        jellyfish.position.y = position9.y;
        jellyfish.position.z = position9.z;
        jellyfish.rotation.y = position9.rY;
        }
    
        sr1.chain(sr2)
        sr2.chain(sr3)
        sr3.chain(sr4)
        sr4.chain(sr5)
        sr5.chain(sr1)
    
        sr1.start();
        // sr1.stop()
        this.jellyfish = jellyfish
    }

}