import { Component,  ViewChild, ElementRef, ContentChild } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { TYPES, FLATSIDES }  from '../../models/interfaces/duct.properties';
import { Duct }  from '../../models/interfaces/duct.interface';
import { DuctFactory }  from '../../models/objects/factory';
import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

/**
 * Generated class for the DuctCreationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'duct-creation',
  templateUrl: 'duct-creation.component.html'
})

export class DuctCreationComponent {

  type_list = TYPES;

  others = {
    insulated: false,
    fire: false
  };

  /**
  ********************* THREE.JS SESSION *****************************
  */

  @ViewChild('domObj') canvasEl: ElementRef;

  selectedItem: any;
  _ELEMENT: any;
  _SCENE: any;
  _CAMERA: any;
  _RENDERER: any;
  _GRID: any;
  _AXIS: any;
  _CONTROLS: any;
  _LIGHT: any;
  _DUCT: any;


  constructor(public viewCtrl: ViewController, params: NavParams) {

  }


  ionViewDidLoad() {
    this.initialiseWebGLObjectAndEnvironment();
    this.renderAnimation();
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }


  selectDuctType($event) {
    if ($event) {
      //Remove the previously created duct
      if (this._DUCT != undefined){
        var tmp = this._SCENE.getObjectByName(this._DUCT._mesh.name);
        this._SCENE.remove(tmp);
      }
      //Creates the new duct selected on the <ion-select> using DuctFactory class
      this._DUCT = DuctFactory.createDuct($event);
      //Calls its method draw() that does the WebGL creation and rendering
      this._DUCT.draw();
      //Adds the duct in the scene
      this._SCENE.add( this._DUCT._mesh );
    }
  }


  // WebGL settings below
  initialiseWebGLObjectAndEnvironment() : void{

    // Reference the DOM element that the WebGL generated object
    // will be assigned to
    this._ELEMENT = this.canvasEl.nativeElement;

    // Define a new ThreeJS scene
    this._SCENE = new THREE.Scene();

    //DuctCreationComponent._CAMERA = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


    // Define an object to manage display of ThreeJS scene
    this._RENDERER = new THREE.WebGLRenderer({ antialias: true });
    //It sets the background color
    this._RENDERER.setClearColor(0xF5F5F5, 1);
    // Resizes the output canvas to match the supplied width/height parameters
    this._RENDERER.setSize( 270, 170 );
    //DuctCreationComponent._RENDERER.setSize( this.modal_div_panel.nativeElement.domElement.width, this.modal_div_panel.nativeElement.domElement.height );


    // Attach the canvas, where the renderer draws the scene, to the specified DOM element
    this._ELEMENT.appendChild( this._RENDERER.domElement );

    this._GRID = new THREE.GridHelper(70, 70, 0xE0E0E0, 0xE0E0E0);
    this._AXIS = new THREE.AxesHelper(30);

    var pointLight = new THREE.PointLight( 0xf2f2f2, 1, 100 );
    pointLight.position.set( 0, 30, 0 );
    this._SCENE.add( pointLight );


    // Add the object to the scene
    this._SCENE.add( this._GRID );
    this._SCENE.add( this._AXIS );
    this._SCENE.add( this._LIGHT );

    //Add the mouse controlls into the scene
    this._CAMERA = new THREE.PerspectiveCamera( 45, 300/200, 0.1, 1000 );
    this._CONTROLS  = new OrbitControls(this._CAMERA, this._RENDERER.domElement);
    this._CONTROLS.enabled = true;
    this._CONTROLS.maxDistance = 1500;
    this._CONTROLS.minDistance = 0;
    this._CAMERA.position.set( 20, 17, 20 );
    this._CONTROLS.update();
  }


  /**
    * Define the animation properties for the WebGL object rendered in the DOM element, using the requestAnimationFrame
    * method to animate the object
    *
    */
   private _animate () : void {

      requestAnimationFrame(() => {
         this._animate();
      });
      this._CONTROLS.update();
      this._RENDERER.render(this._SCENE, this._CAMERA);

   };


   renderAnimation() : void {

      this._animate();

   }

}
