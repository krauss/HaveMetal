webpackJsonp([0],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesPageModule", function() { return SamplesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__samples__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { ComponentsModule } from '../../components/components.module';
var SamplesPageModule = (function () {
    function SamplesPageModule() {
    }
    return SamplesPageModule;
}());
SamplesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */],
        ]
    })
], SamplesPageModule);

//# sourceMappingURL=samples.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orbit_controls_es6__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_objects_segment__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Duct } from '../../models/interfaces/duct.interface';

var SamplesPage = (function () {
    function SamplesPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    SamplesPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */], {
            duct: this._DUCT
        });
        popover.present({
            ev: myevent
        });
    };
    SamplesPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad TaskCreationPage');
        this.initialiseWebGLObjectAndEnvironment();
        this.addDuct();
        this.renderAnimation();
    };
    SamplesPage.prototype.addDuct = function () {
        this._DUCT = new __WEBPACK_IMPORTED_MODULE_5__models_objects_segment__["a" /* Segment */]();
        this._DUCT.draw();
        this._SCENE.add(this._DUCT._mesh);
    };
    SamplesPage.prototype.initialiseWebGLObjectAndEnvironment = function () {
        // Reference the DOM element that the WebGL generated object
        // will be assigned to
        this._ELEMENT = this.canvasEl.nativeElement;
        // Define a new ThreeJS scene
        this._SCENE = new __WEBPACK_IMPORTED_MODULE_3_three__["n" /* Scene */]();
        // Define a new ThreeJS camera from the following types:
        /*
           1. CubeCamera				(Creates 6 cameras - one for each face of a cube)
           2. OrthographicCamera		(Creates a camera using orthographic projection - object size stays constant
                         regardless of distance from the camera)
           3. PerspectiveCamera		(Creates a camera using perspective projection - most common projection type
                         for 3D rendering [designed to mimic the way the human eye sees])
           4. StereoCamera			(Dual PerspectiveCameras - used for 3D effects such as parallax barrier)
        */
        this._CAMERA = new __WEBPACK_IMPORTED_MODULE_3_three__["j" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Define an object to manage display of ThreeJS scene
        this._RENDERER = new __WEBPACK_IMPORTED_MODULE_3_three__["r" /* WebGLRenderer */]({ antialias: true });
        //It sets the background color
        this._RENDERER.setClearColor(0xF7F7F7, 1);
        // Resizes the output canvas to match the supplied width/height parameters
        this._RENDERER.setSize(window.innerWidth, window.innerHeight);
        // Attach the canvas, where the renderer draws the scene, to the specified DOM element
        this._ELEMENT.appendChild(this._RENDERER.domElement);
        this._GRID = new __WEBPACK_IMPORTED_MODULE_3_three__["f" /* GridHelper */](60, 60);
        this._AXIS = new __WEBPACK_IMPORTED_MODULE_3_three__["b" /* AxesHelper */](35);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_3_three__["k" /* PointLight */](0xf2f2f2, 1, 100);
        pointLight.position.set(0, 20, 0);
        this._SCENE.add(pointLight);
        var sphereSize = 1;
        var pointLightHelper = new __WEBPACK_IMPORTED_MODULE_3_three__["l" /* PointLightHelper */](pointLight, sphereSize);
        this._SCENE.add(pointLightHelper);
        this._LIGHT = new __WEBPACK_IMPORTED_MODULE_3_three__["a" /* AmbientLight */](0x404040); // soft white light
        // Add the object to the scene
        this._SCENE.add(this._GRID);
        this._SCENE.add(this._AXIS);
        this._SCENE.add(this._LIGHT);
        //Add the mouse controlls into the scene
        this._CONTROLS = new __WEBPACK_IMPORTED_MODULE_4_orbit_controls_es6__["a" /* default */](this._CAMERA, this._RENDERER.domElement);
        this._CONTROLS.enabled = true;
        this._CONTROLS.maxDistance = 1500;
        this._CONTROLS.minDistance = 0;
        this._CAMERA.position.set(0, 20, 55);
        this._CONTROLS.update();
    };
    /**
      * Define the animation properties for the WebGL object rendered in the DOM element, using the requestAnimationFrame
      * method to animate the object
      *
      */
    SamplesPage.prototype._animate = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this._animate();
        });
        this._CONTROLS.update();
        // Render the scene (will be called using the requestAnimationFrame method to ensure the cube is constantly animated)
        this._RENDERER.render(this._SCENE, this._CAMERA);
    };
    ;
    SamplesPage.prototype.renderAnimation = function () {
        this._animate();
    };
    return SamplesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('domObj'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SamplesPage.prototype, "canvasEl", void 0);
SamplesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-samples',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/samples/samples.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center> Samples </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Three.js DOM object -->\n  <ion-item>\n    <div #domObj></div>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/samples/samples.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]) === "function" && _d || Object])
], SamplesPage);

var _a, _b, _c, _d;
//# sourceMappingURL=samples.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(545);
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

/**
@author update Silvio Paganini
*/

// Update to support ES6 Threjs module importer

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe



class OrbitControls extends __WEBPACK_IMPORTED_MODULE_0_three__["e" /* EventDispatcher */] {
  constructor(object, domElement) {
    super();

    this.object = object;

    this.domElement = (domElement !== undefined) ? domElement : document;

    // Set to false to disable this control
    this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    this.target = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    this.minAzimuthAngle = -Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.25;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;

    // Set to false to disable panning
    this.enablePan = true;
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    // Set to false to disable use of the keys
    this.enableKeys = true;

    // The four arrow keys
    this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    };

    // Mouse buttons
    this.mouseButtons = {
      ORBIT: __WEBPACK_IMPORTED_MODULE_0_three__["g" /* MOUSE */].LEFT,
      ZOOM: __WEBPACK_IMPORTED_MODULE_0_three__["g" /* MOUSE */].MIDDLE,
      PAN: __WEBPACK_IMPORTED_MODULE_0_three__["g" /* MOUSE */].RIGHT
    };

    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    //
    // public methods
    //

    this.getPolarAngle = function() {

      return spherical.phi;

    };

    this.getAzimuthalAngle = function() {

      return spherical.theta;

    };

    this.reset = function() {

      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;

      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(changeEvent);

      scope.update();

      state = STATE.NONE;

    };

    // this method is exposed, but perhaps it would be better if we can make it private...
    this.update = function() {

      var offset = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();

      // so camera.up is the orbit axis
      var quat = new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Quaternion */]().setFromUnitVectors(object.up, new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */](0, 1, 0));
      var quatInverse = quat.clone().inverse();

      var lastPosition = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();
      var lastQuaternion = new __WEBPACK_IMPORTED_MODULE_0_three__["m" /* Quaternion */]();

      return function update() {

        var position = scope.object.position;

        offset.copy(position).sub(scope.target);

        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion(quat);

        // angle from z-axis around y-axis
        spherical.setFromVector3(offset);

        if (scope.autoRotate && state === STATE.NONE) {

          rotateLeft(getAutoRotationAngle());

        }

        spherical.theta += sphericalDelta.theta;
        spherical.phi += sphericalDelta.phi;

        // restrict theta to be between desired limits
        spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

        // restrict phi to be between desired limits
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

        spherical.makeSafe();


        spherical.radius *= scale;

        // restrict radius to be between desired limits
        spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

        // move target to panned location
        scope.target.add(panOffset);

        offset.setFromSpherical(spherical);

        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion(quatInverse);

        position.copy(scope.target).add(offset);

        scope.object.lookAt(scope.target);

        if (scope.enableDamping === true) {

          sphericalDelta.theta *= (1 - scope.dampingFactor);
          sphericalDelta.phi *= (1 - scope.dampingFactor);

        } else {

          sphericalDelta.set(0, 0, 0);

        }

        scale = 1;
        panOffset.set(0, 0, 0);

        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged ||
          lastPosition.distanceToSquared(scope.object.position) > EPS ||
          8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

          scope.dispatchEvent(changeEvent);

          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;

          return true;

        }

        return false;

      };

    }();

    this.dispose = function() {

      scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
      scope.domElement.removeEventListener('mousedown', onMouseDown, false);
      scope.domElement.removeEventListener('wheel', onMouseWheel, false);

      scope.domElement.removeEventListener('touchstart', onTouchStart, false);
      scope.domElement.removeEventListener('touchend', onTouchEnd, false);
      scope.domElement.removeEventListener('touchmove', onTouchMove, false);

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      window.removeEventListener('keydown', onKeyDown, false);

      //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

    };

    //
    // internals
    //

    var scope = this;

    var changeEvent = {
      type: 'change'
    };
    var startEvent = {
      type: 'start'
    };
    var endEvent = {
      type: 'end'
    };

    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_DOLLY: 4,
      TOUCH_PAN: 5
    };

    var state = STATE.NONE;

    var EPS = 0.000001;

    // current position in spherical coordinates
    var spherical = new __WEBPACK_IMPORTED_MODULE_0_three__["o" /* Spherical */]();
    var sphericalDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["o" /* Spherical */]();

    var scale = 1;
    var panOffset = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();
    var zoomChanged = false;

    var rotateStart = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();
    var rotateEnd = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();
    var rotateDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();

    var panStart = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();
    var panEnd = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();
    var panDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();

    var dollyStart = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();
    var dollyEnd = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();
    var dollyDelta = new __WEBPACK_IMPORTED_MODULE_0_three__["p" /* Vector2 */]();

    function getAutoRotationAngle() {

      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getZoomScale() {

      return Math.pow(0.95, scope.zoomSpeed);

    }

    function rotateLeft(angle) {

      sphericalDelta.theta -= angle;

    }

    function rotateUp(angle) {

      sphericalDelta.phi -= angle;

    }

    var panLeft = function() {

      var v = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();

      return function panLeft(distance, objectMatrix) {

        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        v.multiplyScalar(-distance);

        panOffset.add(v);

      };

    }();

    var panUp = function() {

      var v = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();

      return function panUp(distance, objectMatrix) {

        v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
        v.multiplyScalar(distance);

        panOffset.add(v);

      };

    }();

    // deltaX and deltaY are in pixels; right and down are positive
    var pan = function() {

      var offset = new __WEBPACK_IMPORTED_MODULE_0_three__["q" /* Vector3 */]();

      return function pan(deltaX, deltaY) {

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if (Object.getPrototypeOf(scope.object).isPerspectiveCamera) {

          // perspective
          var position = scope.object.position;
          offset.copy(position).sub(scope.target);
          var targetDistance = offset.length();

          // half of the fov is center to top of screen
          targetDistance *= Math.tan((scope.object.fov / 2) * Math.PI / 180.0);

          // we actually don't use screenWidth, since perspective camera is fixed to screen height
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);

        } else if (Object.getPrototypeOf(scope.object).isOrthographicCamera) {

          // orthographic
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);

        } else {

          // camera neither orthographic nor perspective
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
          scope.enablePan = false;

        }

      };

    }();

    function dollyIn(dollyScale) {

      if (Object.getPrototypeOf(scope.object).isPerspectiveCamera) {

        scale /= dollyScale;

      } else if (Object.getPrototypeOf(scope.object).isOrthographicCamera) {

        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;

      } else {

        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;

      }

    }

    function dollyOut(dollyScale) {

      if (Object.getPrototypeOf(scope.object).isPerspectiveCamera) {

        scale *= dollyScale;

      } else if (Object.getPrototypeOf(scope.object).isOrthographicCamera) {

        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;

      } else {

        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;

      }

    }

    //
    // event callbacks - update the object state
    //

    function handleMouseDownRotate(event) {

      //console.log( 'handleMouseDownRotate' );

      rotateStart.set(event.clientX, event.clientY);

    }

    function handleMouseDownDolly(event) {

      //console.log( 'handleMouseDownDolly' );

      dollyStart.set(event.clientX, event.clientY);

    }

    function handleMouseDownPan(event) {

      //console.log( 'handleMouseDownPan' );

      panStart.set(event.clientX, event.clientY);

    }

    function handleMouseMoveRotate(event) {

      //console.log( 'handleMouseMoveRotate' );

      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart);

      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      // rotating across whole screen goes 360 degrees around
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

      // rotating up and down along whole screen attempts to go 360, but limited to 180
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

      rotateStart.copy(rotateEnd);

      scope.update();

    }

    function handleMouseMoveDolly(event) {

      //console.log( 'handleMouseMoveDolly' );

      dollyEnd.set(event.clientX, event.clientY);

      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) {

        dollyIn(getZoomScale());

      } else if (dollyDelta.y < 0) {

        dollyOut(getZoomScale());

      }

      dollyStart.copy(dollyEnd);

      scope.update();

    }

    function handleMouseMovePan(event) {

      //console.log( 'handleMouseMovePan' );

      panEnd.set(event.clientX, event.clientY);

      panDelta.subVectors(panEnd, panStart);

      pan(panDelta.x, panDelta.y);

      panStart.copy(panEnd);

      scope.update();

    }

    function handleMouseUp(event) {

      // console.log( 'handleMouseUp' );

    }

    function handleMouseWheel(event) {

      // console.log( 'handleMouseWheel' );

      if (event.deltaY < 0) {

        dollyOut(getZoomScale());

      } else if (event.deltaY > 0) {

        dollyIn(getZoomScale());

      }

      scope.update();

    }

    function handleKeyDown(event) {

      //console.log( 'handleKeyDown' );

      switch (event.keyCode) {

        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          scope.update();
          break;

        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          scope.update();
          break;

      }

    }

    function handleTouchStartRotate(event) {

      //console.log( 'handleTouchStartRotate' );

      rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);

    }

    function handleTouchStartDolly(event) {

      //console.log( 'handleTouchStartDolly' );

      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      dollyStart.set(0, distance);

    }

    function handleTouchStartPan(event) {

      //console.log( 'handleTouchStartPan' );

      panStart.set(event.touches[0].pageX, event.touches[0].pageY);

    }

    function handleTouchMoveRotate(event) {

      //console.log( 'handleTouchMoveRotate' );

      rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
      rotateDelta.subVectors(rotateEnd, rotateStart);

      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      // rotating across whole screen goes 360 degrees around
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

      // rotating up and down along whole screen attempts to go 360, but limited to 180
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

      rotateStart.copy(rotateEnd);

      scope.update();

    }

    function handleTouchMoveDolly(event) {

      //console.log( 'handleTouchMoveDolly' );

      var dx = event.touches[0].pageX - event.touches[1].pageX;
      var dy = event.touches[0].pageY - event.touches[1].pageY;

      var distance = Math.sqrt(dx * dx + dy * dy);

      dollyEnd.set(0, distance);

      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) {

        dollyOut(getZoomScale());

      } else if (dollyDelta.y < 0) {

        dollyIn(getZoomScale());

      }

      dollyStart.copy(dollyEnd);

      scope.update();

    }

    function handleTouchMovePan(event) {

      //console.log( 'handleTouchMovePan' );

      panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

      panDelta.subVectors(panEnd, panStart);

      pan(panDelta.x, panDelta.y);

      panStart.copy(panEnd);

      scope.update();

    }

    function handleTouchEnd(event) {

      //console.log( 'handleTouchEnd' );

    }

    //
    // event handlers - FSM: listen for events and reset state
    //

    function onMouseDown(event) {

      if (scope.enabled === false) return;

      event.preventDefault();

      if (event.button === scope.mouseButtons.ORBIT) {

        if (scope.enableRotate === false) return;

        handleMouseDownRotate(event);

        state = STATE.ROTATE;

      } else if (event.button === scope.mouseButtons.ZOOM) {

        if (scope.enableZoom === false) return;

        handleMouseDownDolly(event);

        state = STATE.DOLLY;

      } else if (event.button === scope.mouseButtons.PAN) {

        if (scope.enablePan === false) return;

        handleMouseDownPan(event);

        state = STATE.PAN;

      }

      if (state !== STATE.NONE) {

        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('mouseup', onMouseUp, false);

        scope.dispatchEvent(startEvent);

      }

    }

    function onMouseMove(event) {

      if (scope.enabled === false) return;

      event.preventDefault();

      if (state === STATE.ROTATE) {

        if (scope.enableRotate === false) return;

        handleMouseMoveRotate(event);

      } else if (state === STATE.DOLLY) {

        if (scope.enableZoom === false) return;

        handleMouseMoveDolly(event);

      } else if (state === STATE.PAN) {

        if (scope.enablePan === false) return;

        handleMouseMovePan(event);

      }

    }

    function onMouseUp(event) {

      if (scope.enabled === false) return;

      handleMouseUp(event);

      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);

      scope.dispatchEvent(endEvent);

      state = STATE.NONE;

    }

    function onMouseWheel(event) {

      if (scope.enabled === false || scope.enableZoom === false || (state !== STATE.NONE && state !== STATE.ROTATE)) return;

      event.preventDefault();
      event.stopPropagation();

      handleMouseWheel(event);

      scope.dispatchEvent(startEvent); // not sure why these are here...
      scope.dispatchEvent(endEvent);

    }

    function onKeyDown(event) {

      if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

      handleKeyDown(event);

    }

    function onTouchStart(event) {

      if (scope.enabled === false) return;

      switch (event.touches.length) {

        case 1: // one-fingered touch: rotate

          if (scope.enableRotate === false) return;

          handleTouchStartRotate(event);

          state = STATE.TOUCH_ROTATE;

          break;

        case 2: // two-fingered touch: dolly

          if (scope.enableZoom === false) return;

          handleTouchStartDolly(event);

          state = STATE.TOUCH_DOLLY;

          break;

        case 3: // three-fingered touch: pan

          if (scope.enablePan === false) return;

          handleTouchStartPan(event);

          state = STATE.TOUCH_PAN;

          break;

        default:

          state = STATE.NONE;

      }

      if (state !== STATE.NONE) {

        scope.dispatchEvent(startEvent);

      }

    }

    function onTouchMove(event) {

      if (scope.enabled === false) return;

      event.preventDefault();
      event.stopPropagation();

      switch (event.touches.length) {

        case 1: // one-fingered touch: rotate

          if (scope.enableRotate === false) return;
          if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

          handleTouchMoveRotate(event);

          break;

        case 2: // two-fingered touch: dolly

          if (scope.enableZoom === false) return;
          if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

          handleTouchMoveDolly(event);

          break;

        case 3: // three-fingered touch: pan

          if (scope.enablePan === false) return;
          if (state !== STATE.TOUCH_PAN) return; // is this needed?...

          handleTouchMovePan(event);

          break;

        default:

          state = STATE.NONE;

      }

    }

    function onTouchEnd(event) {

      if (scope.enabled === false) return;

      handleTouchEnd(event);

      scope.dispatchEvent(endEvent);

      state = STATE.NONE;

    }

    function onContextMenu(event) {

      event.preventDefault();

    }

    //

    scope.domElement.addEventListener('contextmenu', onContextMenu, false);

    scope.domElement.addEventListener('mousedown', onMouseDown, false);
    scope.domElement.addEventListener('wheel', onMouseWheel, false);

    scope.domElement.addEventListener('touchstart', onTouchStart, false);
    scope.domElement.addEventListener('touchend', onTouchEnd, false);
    scope.domElement.addEventListener('touchmove', onTouchMove, false);

    window.addEventListener('keydown', onKeyDown, false);

    // force an update at start

    this.update();

  };


  get center() {
    console.warn('OrbitControls: .center has been renamed to .target');
    return this.target;
  }

  // backward compatibility

  get noZoom() {

      console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;
  }

  set noZoom(value) {
    console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
    this.enableZoom = !value;
  }

  get noRotate() {
    console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
    return !this.enableRotate;
  }

  set noRotate(value) {
    console.warn('OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
    this.enableRotate = !value;
  }

  get noPan() {
    console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
    return !this.enablePan;
  }

  set noPan(value) {
    console.warn('OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
    this.enablePan = !value;
  }

  get noKeys() {
    console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
    return !this.enableKeys;
  }

  set noKeys(value) {
    console.warn('OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
    this.enableKeys = !value;
  }

  get staticMoving() {
    console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
    return !this.enableDamping;
  }

  set staticMoving(value) {
    console.warn('OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
    this.enableDamping = !value;
  }

  get dynamicDampingFactor() {
    console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
    return this.dampingFactor;

  }

  set dynamicDampingFactor(value) {
    console.warn('OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
    this.dampingFactor = value;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrbitControls;



/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(545);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Segment = (function (_super) {
    __extends(Segment, _super);
    function Segment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Segment.prototype.draw = function () {
        //alert("It's a segment");
        //this.geometry(new THREE.BoxGeometry( 6, 6, 6 ));
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["c" /* BoxGeometry */](6, 6, 6);
        this._geometry.name = "segment";
        //this.material(new THREE.MeshPhongMaterial( {color: 0x0000ff} ));
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["i" /* MeshPhongMaterial */]({ color: 0x0000ff, shininess: 50 });
        //this.mesh(new THREE.Mesh( this.geometry(), this.material() ));
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["h" /* Mesh */](this._geometry, this._material);
    };
    return Segment;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Duct */]));

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Duct; });
/*
  The most basic entity in which everything else derives from.
*/
var Duct = (function () {
    function Duct() {
    }
    Object.defineProperty(Duct.prototype, "width", {
        /*
          Duct width accessors
        */
        get: function () {
            return this.width;
        },
        set: function (n) {
            this._width = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "height", {
        /*
          Duct height accessors
        */
        get: function () {
            return this._height;
        },
        set: function (n) {
            this._height = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "length", {
        /*
          Duct length accessors
        */
        get: function () {
            return this._length;
        },
        set: function (n) {
            this._length = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "fireRated", {
        /*
          Duct fireRated property accessors
        */
        get: function () {
            return this._isFireRated;
        },
        set: function (o) {
            this._isFireRated = o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "insulated", {
        /*
          Duct insulation property accessors
        */
        get: function () {
            return this._isInsulated;
        },
        set: function (o) {
            this._isInsulated = o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "tdf", {
        /*
          Duct TDF property accessors
        */
        get: function () {
            return this._isTDF;
        },
        set: function (t) {
            this._isTDF = t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "material", {
        /*
          WebGL accessor methods
        */
        get: function () {
            return this._material;
        },
        set: function (m) {
            this._material = m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "geometry", {
        get: function () {
            return this._geometry;
        },
        set: function (g) {
            this._geometry = g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duct.prototype, "mesh", {
        get: function () {
            return this._mesh;
        },
        set: function (m) {
            this._mesh = m;
        },
        enumerable: true,
        configurable: true
    });
    return Duct;
}());

//# sourceMappingURL=duct.interface.js.map

/***/ })

});
//# sourceMappingURL=0.js.map