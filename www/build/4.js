webpackJsonp([4],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesPageModule", function() { return SamplesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__samples__ = __webpack_require__(649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { ComponentsModule } from '../../components/components.module';
var SamplesPageModule = /** @class */ (function () {
    function SamplesPageModule() {
    }
    SamplesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */],
            ]
        })
    ], SamplesPageModule);
    return SamplesPageModule;
}());

//# sourceMappingURL=samples.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orbit_controls_es6__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orbit_controls_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_orbit_controls_es6__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SamplesPage = /** @class */ (function () {
    function SamplesPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    SamplesPage_1 = SamplesPage;
    SamplesPage.prototype.presentPopover = function (myevent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */], {
            scene: SamplesPage_1._SCENE
        });
        popover.present({
            ev: myevent
        });
    };
    SamplesPage.prototype.ionViewDidLoad = function () {
        this.initialiseWebGLObjectAndEnvironment();
        this.renderAnimation();
    };
    SamplesPage.prototype.initialiseWebGLObjectAndEnvironment = function () {
        // Reference the DOM element that the WebGL generated object
        // will be assigned to
        SamplesPage_1._ELEMENT = this.canvasEl.nativeElement;
        // Define a new ThreeJS scene
        SamplesPage_1._SCENE = new __WEBPACK_IMPORTED_MODULE_3_three__["Scene"]();
        SamplesPage_1._CAMERA = new __WEBPACK_IMPORTED_MODULE_3_three__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Define an object to manage display of ThreeJS scene
        SamplesPage_1._RENDERER = new __WEBPACK_IMPORTED_MODULE_3_three__["WebGLRenderer"]({ antialias: true });
        //It sets the background color
        SamplesPage_1._RENDERER.setClearColor(0xF5F5F5, 1);
        // Resizes the output canvas to match the supplied width/height parameters
        SamplesPage_1._RENDERER.setSize(window.innerWidth, window.innerHeight);
        // Attach the canvas, where the renderer draws the scene, to the specified DOM element
        SamplesPage_1._ELEMENT.appendChild(SamplesPage_1._RENDERER.domElement);
        SamplesPage_1._GRID = new __WEBPACK_IMPORTED_MODULE_3_three__["GridHelper"](70, 70, 0xE0E0E0, 0xE0E0E0);
        SamplesPage_1._AXIS = new __WEBPACK_IMPORTED_MODULE_3_three__["AxesHelper"](30);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_3_three__["PointLight"](0xf2f2f2, 1, 100);
        pointLight.position.set(0, 30, 0);
        SamplesPage_1._SCENE.add(pointLight);
        // Add the object to the scene
        SamplesPage_1._SCENE.add(SamplesPage_1._GRID);
        SamplesPage_1._SCENE.add(SamplesPage_1._AXIS);
        //Add the mouse controlls into the scene
        SamplesPage_1._CONTROLS = new __WEBPACK_IMPORTED_MODULE_4_orbit_controls_es6___default.a(SamplesPage_1._CAMERA, SamplesPage_1._RENDERER.domElement);
        SamplesPage_1._CONTROLS.enabled = true;
        SamplesPage_1._CONTROLS.maxDistance = 1500;
        SamplesPage_1._CONTROLS.minDistance = 0;
        SamplesPage_1._CAMERA.position.set(0, 20, 55);
        SamplesPage_1._CONTROLS.update();
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
        SamplesPage_1._CONTROLS.update();
        // Render the scene (will be called using the requestAnimationFrame method to ensure the cube is constantly animated)
        SamplesPage_1._RENDERER.render(SamplesPage_1._SCENE, SamplesPage_1._CAMERA);
    };
    ;
    SamplesPage.prototype.renderAnimation = function () {
        this._animate();
    };
    var SamplesPage_1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('domObj'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SamplesPage.prototype, "canvasEl", void 0);
    SamplesPage = SamplesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-samples',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/samples/samples.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center> Samples </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Three.js DOM object -->\n  <ion-item>\n    <div #domObj></div>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/samples/samples.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], SamplesPage);
    return SamplesPage;
}());

//# sourceMappingURL=samples.js.map

/***/ })

});
//# sourceMappingURL=4.js.map