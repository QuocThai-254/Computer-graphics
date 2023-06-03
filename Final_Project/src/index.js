import * as THREE from '../../node_modules/three/build/three.module.js'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from '../../node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import {Water} from '../../node_modules/three/examples/jsm/objects/Water2.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

import Turtle from './turtle.js'
import School_fish from './school_fish.js';
import School_fish1 from './school_fish1.js';
import School_fish2 from './school_fish2.js';
import Shark from './shark.js'
import Scene from './scene.js';
import Dolphin from './dolphin.js';
import Jellyfish from './jelly.js';
import Jellyfish1 from './jelly1.js';
import Jellyfish2 from './jelly2.js';
import Undersea_fish_submarine from './undersea_fish_submarine.js';
import Submarine from './yellow_submarine.js';
import Whale from './whale.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 100 );	
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.shadowMap.enabled = true;
const orbit = new OrbitControls (camera, renderer.domElement);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create scene of undersea
{
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
    //   left
        './assets/img/leftblue.png',
    //   right
        './assets/img/rightblue.png',
    //   top
        './assets/img/upblue.png',
    //   down
        './assets/img/bottomblue.png',
    //   back
      	'./assets/img/backblue.png',
    //   front
        './assets/img/middleblue.png',
    ]);
    // scene.fog = new THREE.FogExp2(0xffffff,0.1);
    scene.background = texture;
}

// Create glass object
const wall1 = new THREE.Mesh(
  new THREE. BoxGeometry(1, 10, 56),
  new THREE.MeshPhysicalMaterial({
      roughness: 0,
     metalness: 0,
     ior:2.33,
     //color: 0xFFEA00
     transmission: 1
  })
)
// scene.add( wall1 );
wall1.position.set(-28, -5, 0);

const wall2 = new THREE.Mesh(
  new THREE. BoxGeometry(1, 10, 56),
  new THREE.MeshPhysicalMaterial({
      roughness: 0,
     metalness: 0,
     ior:2.33,
     //color: 0xFFEA00
     transmission: 1
  })
)
// scene.add( wall2 );
wall2.position.set(28, -5, 0);

const wall3 = new THREE.Mesh(
  new THREE. BoxGeometry(56, 10, 1),
  new THREE.MeshPhysicalMaterial({
      roughness: 0,
     metalness: 0,
     ior:2.33,
     //color: 0xFFEA00
     transmission: 1
  })
)
// scene.add( wall3 );
wall3.position.set(0, -5, 28);

const wall4 = new THREE.Mesh(
  new THREE. BoxGeometry(56, 10, 1),
  new THREE.MeshPhysicalMaterial({
      roughness: 0,
     metalness: 0,
     ior:2.33,
     //color: 0xFFEA00
     transmission: 1
  })
)
// scene.add( wall4 );
wall4.position.set(0, -5, -28);



// Create water object
var waterGeometry = new THREE.PlaneGeometry(56,56);
  // var waterGeometry = new THREE.LatheGeometry(points);
var water = new Water(waterGeometry,{
    color: 0xffffff,
    scale: 1,
    flowDirection: new THREE.Vector2(0.1,0.1),
    textureWidth:1024,
    textureHeight:1024
  });
water.rotation.x = -Math.PI/2;
water.position.y = -0.005;
// scene.add(water);

var waterGeometry3 = new THREE.PlaneGeometry(25,25);
// var waterGeometry = new THREE.LatheGeometry(points);
var water3 = new Water(waterGeometry3,{
    color: 0xffffff,
    scale: 1,
    flowDirection: new THREE.Vector2(0.1,0.1),
    textureWidth:1024,
    textureHeight:1024
  });
water3.rotation.x = -Math.PI/2;
water3.position.y = -0.004;
scene.add(water3);

var waterGeometry2 = new THREE.PlaneGeometry(56,56);
// var waterGeometry = new THREE.LatheGeometry(points);
var water2 = new Water(waterGeometry2,{
    color: 0xffffff,
    scale: 1,
    flowDirection: new THREE.Vector2(0.1,0.1),
    textureWidth:1024,
    textureHeight:1024
  });
water2.rotation.x = Math.PI/2;
water2.position.y = -0.003;
// scene.add(water2);


const gridHelper = new THREE.GridHelper(30,20,'red');
scene.add(gridHelper);



{
    const color = 0xFFFFFF;
    const intensity = 1.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const dLightHelper = new THREE.DirectionalLightHelper(light);
    // scene.add(dLightHelper);

    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(-1, 2, -4);
    scene.add(light2);

    const dLightHelper2 = new THREE.DirectionalLightHelper(light2);
    // scene.add(dLightHelper2);

    const light3 = new THREE.DirectionalLight(color, intensity);
    light3.position.set(0, -1, 0);
    scene.add(light3);

    const dLightHelper3 = new THREE.DirectionalLightHelper(light3);
    // scene.add(dLightHelper3);

    const amb = new THREE.AmbientLight(0xffffff,1)
    scene.add(amb)

}



camera.position.set(0,3,3);
orbit.update();
// ---------------------------------------------------------------------------------

var clock;
clock = new THREE.Clock();

//Set up sceen
const scene_setUp = new Scene ()
await scene_setUp.create_object()
// scene.add(scene_setUp.hill);
scene.add(scene_setUp.sand);
// scene.add(scene_setUp.coral1);
// scene.add(scene_setUp.coral2);
// scene.add(scene_setUp.coral3);
// scene.add(scene_setUp.coral4);
// scene.add(scene_setUp.coral5);
// scene.add(scene_setUp.coral6);
// scene.add(scene_setUp.coral7);
// scene.add(scene_setUp.coral8);
// scene.add(scene_setUp.coral9);
// scene.add(scene_setUp.coral10);
// scene.add(scene_setUp.coral11);
// scene.add(scene_setUp.coral12);
// scene.add(scene_setUp.coral13);
// scene.add(scene_setUp.coral14);
// scene.add(scene_setUp.coral15);
// scene.add(scene_setUp.coral16);
// scene.add(scene_setUp.coral17);
// scene.add(scene_setUp.coral18);
// scene.add(scene_setUp.coral19);
// scene.add(scene_setUp.coral20);
// scene.add(scene_setUp.coral21);
// scene.add(scene_setUp.coral22);
// scene.add(scene_setUp.coral23);
// scene.add(scene_setUp.coral24);
// scene.add(scene_setUp.coral25);



// turtle
const turtle = new Turtle ()
await turtle.create_object()
let mixer_turtle = turtle.mixer
// scene.add(turtle.turtle);

// school_fish
const school_fish = new School_fish ()
await school_fish.create_object()
let mixer_school_fish = school_fish.mixer
scene.add(school_fish.school_of_fish);

const school_fish1 = new School_fish1 ()
await school_fish1.create_object()
let mixer_school_fish1 = school_fish1.mixer
// scene.add(school_fish1.school_of_fish);

const school_fish2 = new School_fish2 ()
await school_fish2.create_object()
let mixer_school_fish2 = school_fish2.mixer
// scene.add(school_fish2.school_of_fish);

// hammer head shark
const shark = new Shark ()
await shark.create_object()
let mixer_shark = shark.mixer
// scene.add(shark.shark);

// dolphin
const dolphin = new Dolphin ()
await dolphin.create_object()
let mixer_dolphin = dolphin.mixer
// scene.add(dolphin.dolphin);

// jelly
const jellyfish = new Jellyfish ()
await jellyfish.create_object()
let mixer_jellyfish = jellyfish.mixer
// scene.add(jellyfish.jellyfish);

const jellyfish1 = new Jellyfish1 ()
await jellyfish1.create_object()
let mixer_jellyfish1 = jellyfish1.mixer
// scene.add(jellyfish1.jellyfish);

const jellyfish2 = new Jellyfish2 ()
await jellyfish2.create_object()
let mixer_jellyfish2 = jellyfish2.mixer
// scene.add(jellyfish2.jellyfish);

// whale
const whale = new Whale ()
await whale.create_object()
let mixer_whale = whale.mixer
// scene.add(whale.whale);

// undersea fish submarine
const undersea_fish_submarine = new Undersea_fish_submarine ()
await undersea_fish_submarine.create_object(15,-11,15,4)
let mixer_undersea_fish_submarine = undersea_fish_submarine.mixer
// scene.add(undersea_fish_submarine.undersea_fish_submarine);


// submarine
const submarine = new Submarine ()
await submarine.create_object(0,1,0,0.0022)
let mixer_submarine = submarine.mixer
scene.add(submarine.submarine);



// moving function 


window.onkeydown = function(e){
  var delta = clock.getDelta();
  var cameraTarget = new THREE.Vector3()

  if(e.keyCode == 50 && submarine.submarine.position.y >= -8){
      submarine.submarine.position.y -=1
      camera.position.y -= 1
  } else if(e.keyCode == 49 && submarine.submarine.position.y <= 0){
      submarine.submarine.position.y +=1
      camera.position.y += 1
  }

  function updateCameraTarget(moveX, moveZ) {
    // move camera
    camera.position.x += moveX
    camera.position.z += moveZ

    // update camera target
    cameraTarget.x = submarine.submarine.position.x
    cameraTarget.y = submarine.submarine.position.y + 1
    cameraTarget.z = submarine.submarine.position.z
    orbit.target = cameraTarget
  }

  function directionOffset(keysPressed) {
    var directionOffset = 0 // w
  
    if (keysPressed == 38 ) {
        if (keysPressed == 37) {
            directionOffset = Math.PI / 4 // w+a
        } else if (keysPressed == 39) {
            directionOffset = - Math.PI / 4 // w+d
        }
    } else if (keysPressed == 40) {
        if (keysPressed == 37) {
            directionOffset = Math.PI / 4 + Math.PI / 2 // s+a
        } else if (keysPressed == 39) {
            directionOffset = -Math.PI / 4 - Math.PI / 2 // s+d
        } else {
            directionOffset = Math.PI // s
        }
    } else if (keysPressed == 37) {
        directionOffset = Math.PI / 2 // a
    } else if (keysPressed == 39) {
        directionOffset = - Math.PI / 2 // d
    }
    // console.log(keysPressed)
    return directionOffset
  }

  var angleYCameraDirection = Math.atan2(
    (camera.position.x - submarine.submarine.position.x), 
    (camera.position.z - submarine.submarine.position.z))
  var directionOffset = directionOffset(e.keyCode)

  var rotateQuarternion = new THREE.Quaternion()
  var rotateAngle = new THREE.Vector3(0, 1, 0)
  rotateQuarternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + directionOffset)
  submarine.submarine.quaternion.rotateTowards(rotateQuarternion, 0.2)


  var walkDirection = new THREE.Vector3()
  camera.getWorldDirection(walkDirection)
  walkDirection.y = 0
  walkDirection.normalize()
  walkDirection.applyAxisAngle(rotateAngle, directionOffset)

  const velocity = 4

  const moveX = walkDirection.x * velocity * delta
  const moveZ = walkDirection.z * velocity * delta
  if(submarine.submarine.position.x <= 25 && submarine.submarine.position.x >= -25 && submarine.submarine.position.z <= 25 && submarine.submarine.position.z >= -25)
  {
    submarine.submarine.position.x += moveX
    submarine.submarine.position.z += moveZ
  }
  if (submarine.submarine.position.x > 25){
    submarine.submarine.position.x -= 1
  }else if (submarine.submarine.position.x < -25){
    submarine.submarine.position.x += 1
  }else if (submarine.submarine.position.z > 25){
    submarine.submarine.position.z -= 1
  }else if (submarine.submarine.position.z < -25){
    submarine.submarine.position.z += 1
  }
  updateCameraTarget(moveX, moveZ)
  // if(e.keyCode == 37){
  //   submarine.submarine.rotation.y += Math.PI/18
  // }else if(e.keyCode == 39){
  //   submarine.submarine.rotation.y -= Math.PI/18
  // } else if(e.keyCode == 38){     // tiến
  //   switch(check_area){
  //     case 0:
        
  //   }
  // } else if(e.keyCode == 40){     // lùi

  // } else if(e.keyCode == 50){
  //   submarine.submarine.position.y -=1
  // } else if(e.keyCode == 49){
  //   submarine.submarine.position.y +=1
  // }

}

function animate() {
  var delta = clock.getDelta();

  TWEEN.update();
	requestAnimationFrame( animate );
  if(mixer_turtle) mixer_turtle.update(delta);
  if(mixer_school_fish) mixer_school_fish.update(delta);
  if(mixer_school_fish1) mixer_school_fish1.update(delta);
  if(mixer_school_fish2) mixer_school_fish2.update(delta);
  if(mixer_shark) mixer_shark.update(delta);
  if(mixer_dolphin) mixer_dolphin.update(delta);
  if(mixer_jellyfish) mixer_jellyfish.update(delta);
  if(mixer_jellyfish1) mixer_jellyfish1.update(delta);
  if(mixer_jellyfish2) mixer_jellyfish2.update(delta);
  if(mixer_undersea_fish_submarine) mixer_undersea_fish_submarine.update(delta);
  if(mixer_submarine) mixer_submarine.update(delta);
  if(mixer_whale) mixer_whale.update(delta);
	

	renderer.render( scene, camera );
}

animate();