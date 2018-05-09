import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverComponent } from "../../components/popover/popover";
import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
//import { Duct } from '../../models/interfaces/duct.interface';
import { Segment } from '../../models/objects/segment';
import { Reduction } from '../../models/objects/reduction';
import { Transiction } from '../../models/objects/transiction';

@IonicPage()
@Component({
  selector: 'page-samples',
  templateUrl: 'samples.html'
})

export class SamplesPage {

  /**
    ********************* THREE.JS SESSION *****************************
    */

   @ViewChild('domObj') canvasEl: ElementRef;

   protected selectedItem: any;
   protected static _ELEMENT: any;
   protected static _SCENE: any;
   protected static _CAMERA: any;
   protected static _RENDERER: any;
   protected static _GRID: any;
   protected static _AXIS: any;
   protected static _CONTROLS: any;
   protected static _LIGHT: any;

   protected static _DUCT: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  presentPopover(myevent) {
    let popover = this.popoverCtrl.create(PopoverComponent, {
      scene: SamplesPage._SCENE
    });
    popover.present({
      ev: myevent
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TaskCreationPage');
    this.initialiseWebGLObjectAndEnvironment();
    //this.addDuct();
    this.renderAnimation();
  }

  // public addDuct(): void{
  //   SamplesPage._DUCT = new Transiction();
  //   SamplesPage._SCENE.add( SamplesPage._DUCT._mesh );
  // }

  initialiseWebGLObjectAndEnvironment() : void
  {

     // Reference the DOM element that the WebGL generated object
     // will be assigned to
     SamplesPage._ELEMENT = this.canvasEl.nativeElement;


     // Define a new ThreeJS scene
     SamplesPage._SCENE = new THREE.Scene();


     // Define a new ThreeJS camera from the following types:
     /*
        1. CubeCamera				(Creates 6 cameras - one for each face of a cube)
        2. OrthographicCamera		(Creates a camera using orthographic projection - object size stays constant
                      regardless of distance from the camera)
        3. PerspectiveCamera		(Creates a camera using perspective projection - most common projection type
                      for 3D rendering [designed to mimic the way the human eye sees])
        4. StereoCamera			(Dual PerspectiveCameras - used for 3D effects such as parallax barrier)
     */
     SamplesPage._CAMERA = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

     // Define an object to manage display of ThreeJS scene
     SamplesPage._RENDERER = new THREE.WebGLRenderer({ antialias: true });
     //It sets the background color
     SamplesPage._RENDERER.setClearColor(0xF7F7F7, 1);

    // Resizes the output canvas to match the supplied width/height parameters
    SamplesPage._RENDERER.setSize( window.innerWidth, window.innerHeight );


     // Attach the canvas, where the renderer draws the scene, to the specified DOM element
     SamplesPage._ELEMENT.appendChild( SamplesPage._RENDERER.domElement );

     SamplesPage._GRID = new THREE.GridHelper(60, 60);
     SamplesPage._AXIS = new THREE.AxesHelper(35);

     var pointLight = new THREE.PointLight( 0xf2f2f2, 1, 100 );
    pointLight.position.set( 0, 20, 0 );
    SamplesPage._SCENE.add( pointLight );

    var sphereSize = 1;
    var pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
    SamplesPage._SCENE.add( pointLightHelper );


     SamplesPage._LIGHT  = new THREE.AmbientLight( 0x404040 ); // soft white light

     // Add the object to the scene
     SamplesPage._SCENE.add( SamplesPage._GRID );
     SamplesPage._SCENE.add( SamplesPage._AXIS );
     SamplesPage._SCENE.add( SamplesPage._LIGHT );

     //Add the mouse controlls into the scene
     SamplesPage._CONTROLS  = new OrbitControls(SamplesPage._CAMERA, SamplesPage._RENDERER.domElement);
     SamplesPage._CONTROLS.enabled = true;
     SamplesPage._CONTROLS.maxDistance = 1500;
     SamplesPage._CONTROLS.minDistance = 0;
     SamplesPage._CAMERA.position.set( 0, 20, 55 );
     SamplesPage._CONTROLS.update();
  }


  /**
    * Define the animation properties for the WebGL object rendered in the DOM element, using the requestAnimationFrame
    * method to animate the object
    *
    */
   private _animate () : void
   {
      requestAnimationFrame(() => {
         this._animate();
      });

      SamplesPage._CONTROLS.update();

      // Render the scene (will be called using the requestAnimationFrame method to ensure the cube is constantly animated)
      SamplesPage._RENDERER.render(SamplesPage._SCENE, SamplesPage._CAMERA);
   };


   renderAnimation() : void {

      this._animate();

   }

}
