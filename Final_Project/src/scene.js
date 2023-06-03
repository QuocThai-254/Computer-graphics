import * as THREE from '../../node_modules/three/build/three.module.js'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from '../../node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import {Water} from '../../node_modules/three/examples/jsm/objects/Water2.js'
import {TWEEN} from '../../node_modules/three/examples/jsm/libs/tween.module.min.js'

import Sand from './sand.js'
import CoralType1 from './coral1.js';
import CoralType2 from './coral2.js';
import Hill from './hill.js';

export default class Scene{
    async create_object(){
        //sand
        const sand = new Sand ()
        await sand.create_object()
        this.sand = sand.sand

        // hill
        const hill = new Hill ()
        await hill.create_object(-10,-10.5,-11,0.4)
        this.hill = hill.hill

        // coral1
        const coral1 = new CoralType1()
        await coral1.create_object(-4,3,17)
        this.coral1 = coral1.coralType1

        //coral2
        const coral2 = new CoralType1()
        await coral2.create_object(-18,3,30)
        this.coral2 = coral2.coralType1

        //coral3
        const coral3 = new CoralType1 ()
        await coral3.create_object(5,3,25)
        this.coral3 = coral3.coralType1

        //coral4
        const coral4 = new CoralType2 ()
        await coral4.create_object(20,-10,-20,40)
        // await coral4.create_object(0,1,0,40)
        this.coral4 = coral4.coralType2

        //coral5
        const coral5 = new CoralType2 ()
        await coral5.create_object(20,-10,-17,70)
        // await coral5.create_object(0,1,0,40)
        this.coral5 = coral5.coralType2

        //coral6
        const coral6 = new CoralType2 ()
        await coral6.create_object(20,-10,-14,40)
        // await coral6.create_object(0,1,0,40)
        this.coral6 = coral6.coralType2

        //coral7
        const coral7 = new CoralType2 ()
        await coral7.create_object(17,-10,-14,60)
        // await coral7.create_object(0,1,0,40)
        this.coral7 = coral7.coralType2

        //coral8
        const coral8 = new CoralType2 ()
        await coral8.create_object(17,-10,-17,40)
        // await coral8.create_object(0,1,0,40)
        this.coral8 = coral8.coralType2

        //coral9
        const coral9 = new CoralType2 ()
        await coral9.create_object(17,-10,-20,20)
        // await coral9.create_object(0,1,0,40)
        this.coral9 = coral9.coralType2

        //coral10
        const coral10 = new CoralType2 ()
        await coral10.create_object(14,-10,-20,40)
        // await coral10.create_object(0,1,0,40)
        this.coral10 = coral10.coralType2

        //coral11
        const coral11 = new CoralType2 ()
        await coral11.create_object(11,-10,-20,60)
        // await coral11.create_object(0,1,0,40)
        this.coral11 = coral11.coralType2

        //coral12
        const coral12 = new CoralType2 ()
        await coral12.create_object(11,-10,-17,40)
        // await coral12.create_object(0,1,0,40)
        this.coral12 = coral12.coralType2

        //coral13
        const coral13 = new CoralType2 ()
        await coral13.create_object(11,-10,-13,60)
        // await coral13.create_object(0,1,0,40)
        this.coral13 = coral13.coralType2

        //coral14
        const coral14 = new CoralType2 ()
        await coral14.create_object(17,-10,-13,40)
        // await coral14.create_object(0,1,0,40)
        this.coral14 = coral14.coralType2

        //coral15
        const coral15 = new CoralType2 ()
        await coral15.create_object(14,-10,-13,40)
        // await coral15.create_object(0,1,0,40)
        this.coral15 = coral15.coralType2

        //coral16
        const coral16 = new CoralType2 ()
        await coral16.create_object(11,-10,-13,60)
        // await coral16.create_object(0,1,0,40)
        this.coral16 = coral16.coralType2

        //coral17
        const coral17 = new CoralType2 ()
        await coral17.create_object(9,-10,-13,40)
        // await coral17.create_object(0,1,0,40)
        this.coral17 = coral17.coralType2

        //coral18
        const coral18 = new CoralType2 ()
        await coral18.create_object(11,-10,-11,60)
        // await coral18.create_object(0,1,0,40)
        this.coral18 = coral18.coralType2

        //coral19
        const coral19 = new CoralType2 ()
        await coral19.create_object(9,-10,-11,40)
        // await coral19.create_object(0,1,0,40)
        this.coral19 = coral19.coralType2
        
        //coral20
        const coral20 = new CoralType2 ()
        await coral20.create_object(6,-10,-17,40)
        // await coral20.create_object(0,1,0,40)
        this.coral20 = coral20.coralType2

        //coral21
        const coral21 = new CoralType2 ()
        await coral21.create_object(3,-10,-17,60)
        // await coral21.create_object(0,1,0,40)
        this.coral21 = coral21.coralType2

        //coral22
        const coral22 = new CoralType2 ()
        await coral22.create_object(0,-10,-17,50)
        // await coral22.create_object(0,1,0,40)
        this.coral22 = coral22.coralType2

        //coral23
        const coral23 = new CoralType2 ()
        await coral23.create_object(6,-10,-20,40)
        // await coral23.create_object(0,1,0,40)
        this.coral23 = coral23.coralType2

        //coral24
        const coral24 = new CoralType2 ()
        await coral24.create_object(3,-10,-20,60)
        // await coral24.create_object(0,1,0,40)
        this.coral24 = coral24.coralType2

        //coral25
        const coral25 = new CoralType2 ()
        await coral25.create_object(0,-10,-20,40)
        // await coral25.create_object(0,1,0,40)
        this.coral25 = coral25.coralType2


    }

}
