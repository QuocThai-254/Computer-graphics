import * as THREE from '../../node_modules/three/build/three.module.js'
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

export default class Turtle{
    async create_object(){
        const loader = new GLTFLoader();
        var gltf = await loader.loadAsync('./assets/materials/model_72b_-_juvenile_green_sea_turtle/scene.gltf')
        var turtle = gltf.scene;
        turtle.scale.set(1.3, 1.3, 1.3);
        turtle.position.x = -2.5;
        turtle.position.y = -1;
        turtle.position.z = 2;
        turtle.rotation.y = Math.PI/4;
        this.mixer = new THREE.AnimationMixer(turtle);

        gltf.animations.forEach((clip)=>{
            this.mixer.clipAction(clip).play();
        })

        var position = {x:5, y: -3.8, z: 0, rY: -Math.PI/2}
        var t1 = new TWEEN.Tween(position)
        .to({x:-5, y:-3.8, z:0, rY: -Math.PI/2},30000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(onUpdate)

        var t2 = new TWEEN.Tween(position)
        .to({x:-5.2, y: -3.8, z: 0, rY: Math.PI}, 12000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(onUpdate)

        var t3 = new TWEEN.Tween(position)
        .to({x: -2, y: -4.0, z:5, rY: -Math.PI}, 30000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(onUpdate)

        var t4 = new TWEEN.Tween(position)
        .to({x: -2, y: -4.0, z:2, rY: 0}, 15000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(onUpdate)

        var t5 = new TWEEN.Tween(position)
        .to({x: 4, y: -3.8, z:3, rY: Math.PI/4}, 25000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(onUpdate)

        function onUpdate(){
        turtle.position.x = position.x;
        turtle.position.y = position.y;
        turtle.position.z = position.z;
        turtle.rotation.y = position.rY;
        }

        t1.chain(t2)
        t2.chain(t3)
        t3.chain(t4)
        t4.chain(t5)
        t5.chain(t1)

        t1.start();
        this.turtle = turtle
    }

}