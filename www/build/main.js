webpackJsonp([9],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLATSIDES; });
/* unused harmony export Direction */
var TYPES = ['Segment', 'Transiction', 'Reduction', 'Offset', 'Curve', 'Half-Curve', 'Turn', 'Cap'];
var FLATSIDES = ['LEFT', 'RIGHT', 'BOTTOM', 'TOP'];
var Direction = ['LEFT', 'RIGHT', 'UP', 'DOWN'];
//# sourceMappingURL=duct.properties.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		760,
		8
	],
	"../pages/duct-list/duct-list.module": [
		761,
		1
	],
	"../pages/job-creation/job-creation.module": [
		762,
		7
	],
	"../pages/job-edit/job-edit.module": [
		763,
		6
	],
	"../pages/jobs/jobs-list.module": [
		764,
		0
	],
	"../pages/login/login.module": [
		765,
		5
	],
	"../pages/samples/samples.module": [
		766,
		4
	],
	"../pages/scanner/scanner.module": [
		767,
		3
	],
	"../pages/sign-in/sign-in.module": [
		768,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segment__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduction__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transiction__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offset__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cap__ = __webpack_require__(643);







// ductfactory.ts
var DuctFactory = /** @class */ (function () {
    function DuctFactory() {
    }
    DuctFactory.createDuct = function (duct_type) {
        switch (duct_type) {
            case "Segment": return new __WEBPACK_IMPORTED_MODULE_1__segment__["a" /* Segment */](7, 4);
            case "Reduction": return new __WEBPACK_IMPORTED_MODULE_2__reduction__["a" /* Reduction */](8, 3, 8, 2, __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["c" /* FlatSide */].TOP);
            case "Transiction": return new __WEBPACK_IMPORTED_MODULE_3__transiction__["a" /* Transiction */](8, 5, 5, 3, 'RIGHT');
            case "Offset": return new __WEBPACK_IMPORTED_MODULE_4__offset__["a" /* Offset */](8, 3, 1.5, __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].UP);
            case "Cap": return new __WEBPACK_IMPORTED_MODULE_5__cap__["a" /* Cap */](7, 4);
        }
    };
    return DuctFactory;
}());

//# sourceMappingURL=factory.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Duct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FlatSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
/*
  The most basic entity in which everything else derives from.
*/
var Duct = /** @class */ (function () {
    function Duct(width, height) {
        this._width = width;
        this._height = height;
    }
    return Duct;
}());

var FlatSide;
(function (FlatSide) {
    FlatSide[FlatSide["LEFT"] = 0] = "LEFT";
    FlatSide[FlatSide["RIGHT"] = 1] = "RIGHT";
    FlatSide[FlatSide["TOP"] = 2] = "TOP";
    FlatSide[FlatSide["BOTTOM"] = 3] = "BOTTOM";
})(FlatSide || (FlatSide = {}));
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["UP"] = 2] = "UP";
    Direction[Direction["DOWN"] = 3] = "DOWN";
})(Direction || (Direction = {}));
//# sourceMappingURL=duct.interface.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobListService = /** @class */ (function () {
    function JobListService(db) {
        this.db = db;
        this.jobListRef = this.db.list('job-list');
    }
    JobListService.prototype.getJobList = function () {
        return this.jobListRef;
    };
    JobListService.prototype.addJob = function (job) {
        return this.jobListRef.push(job);
    };
    JobListService.prototype.removeJob = function (job) {
        this.jobListRef.remove(job.key);
    };
    JobListService.prototype.editJob = function (job) {
        return this.jobListRef.update(job.key, job);
    };
    JobListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], JobListService);
    return JobListService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_objects_factory__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_orbit_controls_es6__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_orbit_controls_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_orbit_controls_es6__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DuctCreationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DuctCreationComponent = /** @class */ (function () {
    function DuctCreationComponent(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.type_list = __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__["b" /* TYPES */];
        this.others = {
            insulated: false,
            fire: false
        };
    }
    DuctCreationComponent.prototype.ionViewDidLoad = function () {
        this.initialiseWebGLObjectAndEnvironment();
        this.renderAnimation();
    };
    DuctCreationComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DuctCreationComponent.prototype.selectDuctType = function ($event) {
        if ($event) {
            //Remove the previously created duct
            if (this._DUCT != undefined) {
                var tmp = this._SCENE.getObjectByName(this._DUCT._mesh.name);
                this._SCENE.remove(tmp);
            }
            //Creates the new duct selected on the <ion-select> using DuctFactory class
            this._DUCT = __WEBPACK_IMPORTED_MODULE_3__models_objects_factory__["a" /* DuctFactory */].createDuct($event);
            //Calls its method draw() that does the WebGL creation and rendering
            this._DUCT.draw();
            //Adds the duct in the scene
            this._SCENE.add(this._DUCT._mesh);
        }
    };
    // WebGL settings below
    DuctCreationComponent.prototype.initialiseWebGLObjectAndEnvironment = function () {
        // Reference the DOM element that the WebGL generated object
        // will be assigned to
        this._ELEMENT = this.canvasEl.nativeElement;
        // Define a new ThreeJS scene
        this._SCENE = new __WEBPACK_IMPORTED_MODULE_4_three__["Scene"]();
        //DuctCreationComponent._CAMERA = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        // Define an object to manage display of ThreeJS scene
        this._RENDERER = new __WEBPACK_IMPORTED_MODULE_4_three__["WebGLRenderer"]({ antialias: true });
        //It sets the background color
        this._RENDERER.setClearColor(0xF5F5F5, 1);
        // Resizes the output canvas to match the supplied width/height parameters
        this._RENDERER.setSize(270, 170);
        //DuctCreationComponent._RENDERER.setSize( this.modal_div_panel.nativeElement.domElement.width, this.modal_div_panel.nativeElement.domElement.height );
        // Attach the canvas, where the renderer draws the scene, to the specified DOM element
        this._ELEMENT.appendChild(this._RENDERER.domElement);
        this._GRID = new __WEBPACK_IMPORTED_MODULE_4_three__["GridHelper"](70, 70, 0xE0E0E0, 0xE0E0E0);
        this._AXIS = new __WEBPACK_IMPORTED_MODULE_4_three__["AxesHelper"](30);
        var pointLight = new __WEBPACK_IMPORTED_MODULE_4_three__["PointLight"](0xf2f2f2, 1, 100);
        pointLight.position.set(0, 30, 0);
        this._SCENE.add(pointLight);
        // Add the object to the scene
        this._SCENE.add(this._GRID);
        this._SCENE.add(this._AXIS);
        this._SCENE.add(this._LIGHT);
        //Add the mouse controlls into the scene
        this._CAMERA = new __WEBPACK_IMPORTED_MODULE_4_three__["PerspectiveCamera"](45, 300 / 200, 0.1, 1000);
        this._CONTROLS = new __WEBPACK_IMPORTED_MODULE_5_orbit_controls_es6___default.a(this._CAMERA, this._RENDERER.domElement);
        this._CONTROLS.enabled = true;
        this._CONTROLS.maxDistance = 1500;
        this._CONTROLS.minDistance = 0;
        this._CAMERA.position.set(20, 17, 20);
        this._CONTROLS.update();
    };
    /**
      * Define the animation properties for the WebGL object rendered in the DOM element, using the requestAnimationFrame
      * method to animate the object
      *
      */
    DuctCreationComponent.prototype._animate = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this._animate();
        });
        this._CONTROLS.update();
        this._RENDERER.render(this._SCENE, this._CAMERA);
    };
    ;
    DuctCreationComponent.prototype.renderAnimation = function () {
        this._animate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('domObj'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DuctCreationComponent.prototype, "canvasEl", void 0);
    DuctCreationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'duct-creation',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/duct-creation/duct-creation.component.html"*/'<!-- Generated template for the DuctCreationComponent component -->\n\n<div class="modal-panel">\n  <div class="modal-panel-div">\n      <ion-content padding>\n        <ion-title>New Duct</ion-title>\n\n        <ion-col align-self-start>\n          <ion-row nowrap padding>\n            <ion-list>\n              <ion-item>\n                <ion-label>Type:</ion-label>\n                <ion-select [(ngModel)]="type" (ionChange)="selectDuctType($event)">\n                  <ion-option *ngFor="let type of type_list">{{type}}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <!-- Three.js DOM object -->\n              <ion-item>\n                <div class="modal-panel-div-canvas" #domObj></div>\n              </ion-item>\n\n              <ion-card *ngIf="_DUCT != undefined">\n                <ion-card-content>\n                  <!-- Parameters list for Segment duct selection -->\n                  <ion-list padding *ngIf="_DUCT._mesh.name === \'segment\'">\n                    <ion-item>\n                      <ion-label float-left>Width:</ion-label>\n                      <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._width" (ionChange)="_DUCT.setWidth()"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>Height:</ion-label>\n                      <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._height" (ionChange)="_DUCT.setHeigth()"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>Length:</ion-label>\n                      <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._length" (ionChange)="_DUCT.setLength()"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                  <!-- Parameters list for Transiction duct selection -->\n                  <ion-list padding *ngIf="_DUCT._mesh.name === \'transiction\'">\n                      <ion-item>\n                        <ion-label>Flat Sides:</ion-label>\n                        <!-- <ion-select [(ngModel)]="_DUCT._flat" interface="popover" (ionChange)="_DUCT.setFlatSide()">\n                          <ion-option *ngFor="let s of _DUCT.sides">{{s}}</ion-option>\n                        </ion-select> -->\n                        <ion-list radio-group [(ngModel)]="topBottom">\n                          <ion-item>\n                            <ion-label>Top</ion-label>\n                            <ion-radio value="top" checked></ion-radio>\n                          </ion-item>\n                          <ion-item>\n                            <ion-label>Bottom</ion-label>\n                            <ion-radio value="bottom"></ion-radio>\n                          </ion-item>\n                        </ion-list>\n\n                        <ion-list radio-group [(ngModel)]="rightLeft">\n                          <ion-item>\n                            <ion-label>Right</ion-label>\n                            <ion-radio value="right" checked></ion-radio>\n                          </ion-item>\n                          <ion-item>\n                            <ion-label>Left</ion-label>\n                            <ion-radio value="left"></ion-radio>\n                          </ion-item>\n                        </ion-list>\n                      </ion-item>\n\n                      <ion-item>\n                        <ion-label>Back Width:</ion-label>\n                        <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._width" (ionChange)="_DUCT.setBackWidth()"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Back Height:</ion-label>\n                        <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._height" (ionChange)="_DUCT.setBackHeigth()"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Front Width:</ion-label>\n                        <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._frontWidth" (ionChange)="_DUCT.setFrontWidth()"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Front Height:</ion-label>\n                        <ion-input type="number" min="1" max="25" [(ngModel)]="_DUCT._frontHeight" (ionChange)="_DUCT.setFrontHeigth()"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Length:</ion-label>\n                        <ion-input type="number" min="1" max="20" [(ngModel)]="_DUCT._length" (ionChange)="_DUCT.setLength()"></ion-input>\n                      </ion-item>\n                  </ion-list>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card *ngIf="_DUCT != undefined">\n                <ion-card-content>\n                  <ion-list>\n                    <ion-item>\n                      <ion-input type="number" placeholder="Quantity"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-checkbox [(ngModel)]="others.insulated"></ion-checkbox>\n                      <ion-label>Insulated</ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-checkbox [(ngModel)]="others.fire"></ion-checkbox>\n                      <ion-label>Fire Rated</ion-label>\n                    </ion-item>\n                  </ion-list>\n                </ion-card-content>\n              </ion-card>\n\n            </ion-list>\n          </ion-row>\n          <ion-row justify-content-center>\n            <button ion-button disabled color="primary" (click)="addDuct()">Add</button>\n            <button ion-button color="secondary" (click)="dismiss()">Cancel</button>\n          </ion-row>\n        </ion-col>\n      </ion-content>\n  </div>\n</div>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/duct-creation/duct-creation.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DuctCreationComponent);
    return DuctCreationComponent;
}());

//# sourceMappingURL=duct-creation.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = 'DashboardPage';
        this.tab2Root = 'JobsListPage';
        this.tab3Root = 'ScannerPage';
        this.tab4Root = 'SamplesPage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/tabs/tabs.html"*/'<ion-tabs color="s_light">\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Jobs" tabIcon="construct"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Scanner" tabIcon="barcode"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Samples" tabIcon="cube"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_interfaces_duct_properties__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_objects_factory__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navParams) {
        this.navParams = navParams;
        this.type_list = __WEBPACK_IMPORTED_MODULE_3__models_interfaces_duct_properties__["b" /* TYPES */];
    }
    PopoverComponent_1 = PopoverComponent;
    PopoverComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            PopoverComponent_1._scene = this.navParams.data.scene;
            //this.setPreviousSelected();
            // this.background = this.getColorName(this.contentEle.style.backgroundColor);
            //this.duct.color = this.getColorName(this.duct.color);
            //console.log(this._duct.geometry.name);
            // this.setFontFamily();
            //this.setDuctType();
        }
    };
    PopoverComponent.prototype.setPreviousSelected = function () {
        console.log(this.dtype);
    };
    //TODO implement the method to change the type of the duct
    // setDuctType(){
    //   if (this.duct.type) {
    //     //TODO
    //     this.type_list = this.duct.type;
    //   }
    // }
    PopoverComponent.prototype.changeBackground = function (color) {
        PopoverComponent_1.duct._material.color = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](color);
    };
    PopoverComponent.prototype.changeDuctType = function ($event) {
        if ($event) {
            console.log(this.dtype);
            if (PopoverComponent_1.duct != undefined) {
                var tmp = PopoverComponent_1._scene.getObjectByName(PopoverComponent_1.duct._mesh.name);
                PopoverComponent_1._scene.remove(tmp);
            }
            PopoverComponent_1.duct = __WEBPACK_IMPORTED_MODULE_4__models_objects_factory__["a" /* DuctFactory */].createDuct($event);
            PopoverComponent_1.duct.draw();
            PopoverComponent_1._scene.add(PopoverComponent_1.duct._mesh);
        }
    };
    var PopoverComponent_1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fuckList'),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "something", void 0);
    PopoverComponent = PopoverComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/popover/popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n<ion-list #fuckList radio-group [(ngModel)]="dtype" (ionChange)="changeDuctType($event)">\n  <ion-row padding>\n    <ion-col>\n      <button (click)="changeBackground(\'#c4c4c4\')" ion-button small color="popover_gray">gray</button>\n    </ion-col>\n    <ion-col>\n      <button (click)="changeBackground(\'#000080\')" ion-button small color="popover_blue">blue</button>\n    </ion-col>\n    <ion-col>\n      <button (click)="changeBackground(\'#000000\')" ion-button small color="popover_black">black</button>\n    </ion-col>\n  </ion-row>\n  <ion-item *ngFor="let type of type_list">\n    <ion-label>{{type}}</ion-label>\n    <ion-radio value={{type}}></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(614);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_credentials__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_duct_creation_duct_creation_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_services_firebase_service__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { ComponentsModule } from '../components/components.module';


//import { SegmentComponent } from '../components/segment/segment.component';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_duct_creation_duct_creation_component__["a" /* DuctCreationComponent */]
                //SegmentComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duct-list/duct-list.module#DuctCreationPageModule', name: 'DuctListPage', segment: 'duct-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-creation/job-creation.module#JobCreationPageModule', name: 'JobCreationPage', segment: 'job-creation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-edit/job-edit.module#JobEditPageModule', name: 'JobEditPage', segment: 'job-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobs/jobs-list.module#JobsPageModule', name: 'JobsListPage', segment: 'jobs-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/samples/samples.module#SamplesPageModule', name: 'SamplesPage', segment: 'samples', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // Firebase initialization
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__firebase_credentials__["a" /* FB_HAVEMETAL_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_duct_creation_duct_creation_component__["a" /* DuctCreationComponent */]
                //SegmentComponent
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__models_services_firebase_service__["a" /* JobListService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Segment = /** @class */ (function (_super) {
    __extends(Segment, _super);
    function Segment(w, h) {
        var _this = _super.call(this, w, h) || this;
        _this._length = 14; //default measurement for a single duct segment
        return _this;
    }
    Segment.prototype.draw = function () {
        //It crates the geometry
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, this._length) //Vertex 7
        );
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 0, 3));
        this._geometry.computeFaceNormals();
        //It crates the material
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshStandardMaterial"]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        //It crates the mesh to join everything together
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this._geometry, this._material);
        this._mesh.name = "segment";
    };
    Segment.prototype.setWidth = function () {
        if (this._width >= 1) {
            this._geometry.vertices[1].x = this._width;
            this._geometry.vertices[4].x = this._width;
            this._geometry.vertices[6].x = this._width;
            this._geometry.vertices[7].x = this._width;
            this._geometry.verticesNeedUpdate = true;
        }
    };
    Segment.prototype.setHeigth = function () {
        if (this._height >= 1) {
            this._geometry.vertices[3].y = this._height;
            this._geometry.vertices[4].y = this._height;
            this._geometry.vertices[5].y = this._height;
            this._geometry.vertices[6].y = this._height;
            this._geometry.verticesNeedUpdate = true;
        }
    };
    Segment.prototype.setLength = function () {
        if (this._length >= 1) {
            this._geometry.vertices[2].z = this._length;
            this._geometry.vertices[5].z = this._length;
            this._geometry.vertices[6].z = this._length;
            this._geometry.vertices[7].z = this._length;
            this._geometry.verticesNeedUpdate = true;
        }
    };
    return Segment;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["b" /* Duct */]));

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reduction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Reduction = /** @class */ (function (_super) {
    __extends(Reduction, _super);
    /**
    * Parameters:
    *
    * fromWidth = original width
    * fromHeight = original height
    * toWidth = changing width
    * toHeight = changing heigth
    *
    */
    function Reduction(fromWidth, fromHeight, toWidth, toHeight, direct) {
        var _this = _super.call(this, fromWidth, fromHeight) || this;
        _this._horizonDiff = 0;
        _this._vertDiff = 0;
        _this._direction = direct;
        _this._length = 5; //default lenght for a single reduction piece
        if (fromWidth === toWidth) {
            _this._vertDiff = fromHeight - toHeight; //adjust vertices V2 and V7 to reduz the bottom
        }
        else if (fromHeight === toHeight) {
            _this._horizonDiff = fromWidth - toWidth; //adjust the vertices V6 and v7 to reduces the side
        }
        return _this;
    }
    Reduction.prototype.draw = function () {
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, this._length) //Vertex 7
        );
        //add the reduction difference on the width or height, depending on the parameters
        if (this._horizonDiff === 0) {
            if (this._direction.valueOf() === __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["c" /* FlatSide */].TOP) {
                this._geometry.vertices[2].y += this._vertDiff;
                this._geometry.vertices[7].y += this._vertDiff;
            }
            else if (this._direction.valueOf() === __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["c" /* FlatSide */].BOTTOM) {
                this._geometry.vertices[5].y -= this._vertDiff;
                this._geometry.vertices[6].y -= this._vertDiff;
            }
        }
        else {
            if (this._direction.valueOf() === __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["c" /* FlatSide */].RIGHT) {
                this._geometry.vertices[2].x += this._horizonDiff;
                this._geometry.vertices[5].x += this._horizonDiff;
            }
            else if (this._direction.valueOf() === __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["c" /* FlatSide */].LEFT) {
                this._geometry.vertices[6].x -= this._horizonDiff;
                this._geometry.vertices[7].x -= this._horizonDiff;
            }
        }
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 0, 3));
        this._geometry.computeFaceNormals();
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshStandardMaterial"]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this._geometry, this._material);
        this._mesh.name = "reduction";
    };
    return Reduction;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["b" /* Duct */]));

//# sourceMappingURL=reduction.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transiction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_duct_properties__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Transiction = /** @class */ (function (_super) {
    __extends(Transiction, _super);
    function Transiction(backWidth, backHeight, frontWidth, frontHeight, flat) {
        var _this = _super.call(this, backWidth, backHeight) || this;
        _this._horizonDiff = 0;
        _this._vertDiff = 0;
        _this.sides = __WEBPACK_IMPORTED_MODULE_1__interfaces_duct_properties__["a" /* FLATSIDES */];
        _this._frontWidth = frontWidth;
        _this._frontHeight = frontHeight;
        _this._flat = flat;
        _this._length = 5; //default length for a single transiction piece
        //calculate the width and height difference
        _this.calcDiffHoriVert();
        return _this;
    }
    Transiction.prototype.calcDiffHoriVert = function () {
        this._horizonDiff = this._width - this._frontWidth;
        this._vertDiff = this._height - this._frontHeight;
    };
    Transiction.prototype.draw = function () {
        this._geometry = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this._width, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](this._width, 0, this._length) //Vertex 7
        );
        //add the reduction difference on the width or height, depending on the parameters
        switch (this._flat) {
            case 'LEFT':
                this._horizonDiff != 0 ? this._geometry.vertices[6].x -= this._horizonDiff : null;
                this._horizonDiff != 0 ? this._geometry.vertices[7].x -= this._horizonDiff : null;
                break;
            default:
                this._horizonDiff != 0 ? this._geometry.vertices[5].x += this._horizonDiff : null;
                this._horizonDiff != 0 ? this._geometry.vertices[2].x += this._horizonDiff : null;
                break;
        }
        ;
        this._vertDiff != 0 ? this._geometry.vertices[7].y += this._vertDiff : null;
        this._vertDiff != 0 ? this._geometry.vertices[2].y += this._vertDiff : null;
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_2_three__["Face3"](2, 0, 3));
        this._geometry.computeFaceNormals();
        this._material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshStandardMaterial"]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_2_three__["DoubleSide"] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        this._mesh = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](this._geometry, this._material);
        this._mesh.name = "transiction";
    };
    Transiction.prototype.setFlatSide = function () {
        switch (this._flat) {
            case 'LEFT':
                this._horizonDiff != 0 ? this._geometry.vertices[6].x -= this._horizonDiff : null;
                this._horizonDiff != 0 ? this._geometry.vertices[7].x -= this._horizonDiff : null;
                break;
            default:
                this._horizonDiff != 0 ? this._geometry.vertices[5].x += this._horizonDiff : null;
                this._horizonDiff != 0 ? this._geometry.vertices[2].x += this._horizonDiff : null;
                break;
        }
        ;
        this._vertDiff != 0 ? this._geometry.vertices[7].y += this._vertDiff : null;
        this._vertDiff != 0 ? this._geometry.vertices[2].y += this._vertDiff : null;
        this.calcDiffHoriVert();
        this._geometry.verticesNeedUpdate = true;
    };
    Transiction.prototype.setBackWidth = function () {
        //In this case width is actually the backWidth
        if (this._width >= 1) {
            this._geometry.vertices[1].x = this._width;
            this._geometry.vertices[4].x = this._width;
            this._geometry.verticesNeedUpdate = true;
            this.calcDiffHoriVert();
        }
    };
    Transiction.prototype.setBackHeigth = function () {
        if (this._height >= 1) {
            this._geometry.vertices[3].y = this._height;
            this._geometry.vertices[4].y = this._height;
            this._geometry.verticesNeedUpdate = true;
            this.calcDiffHoriVert();
        }
    };
    Transiction.prototype.setFrontWidth = function () {
        if (this._frontWidth >= 1) {
            this._geometry.vertices[6].x = this._frontWidth;
            this._geometry.vertices[7].x = this._frontWidth;
            this._geometry.verticesNeedUpdate = true;
            this.calcDiffHoriVert();
        }
    };
    Transiction.prototype.setFrontHeigth = function () {
        if (this._frontHeight >= 1) {
            this._geometry.vertices[6].y = this._frontHeight;
            this._geometry.vertices[5].y = this._frontHeight;
            this._geometry.verticesNeedUpdate = true;
            this.calcDiffHoriVert();
        }
    };
    Transiction.prototype.setLength = function () {
        if (this._length >= 1) {
            this._geometry.vertices[2].z = this._length;
            this._geometry.vertices[5].z = this._length;
            this._geometry.vertices[6].z = this._length;
            this._geometry.vertices[7].z = this._length;
            this._geometry.verticesNeedUpdate = true;
        }
    };
    return Transiction;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["b" /* Duct */]));

//# sourceMappingURL=transiction.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Offset = /** @class */ (function (_super) {
    __extends(Offset, _super);
    function Offset(w, h, os, direct) {
        var _this = _super.call(this, w, h) || this;
        _this._direct = direct;
        _this._length = 5; //default lenght for a single offset piece
        _this._offset = os;
        return _this;
    }
    Offset.prototype.draw = function () {
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        //It crates the geometry
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, this._length) //Vertex 7
        );
        //add the reduction difference on the width or height, depending on the parameters
        switch (this._direct) {
            case __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].UP:
                this._geometry.vertices[5].y += this._offset;
                this._geometry.vertices[6].y += this._offset;
                this._geometry.vertices[2].y += this._offset;
                this._geometry.vertices[7].y += this._offset;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].DOWN:
                this._geometry.vertices[5].y -= this._offset;
                this._geometry.vertices[6].y -= this._offset;
                this._geometry.vertices[2].y -= this._offset;
                this._geometry.vertices[7].y -= this._offset;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].LEFT:
                this._geometry.vertices[5].x -= this._offset;
                this._geometry.vertices[6].x -= this._offset;
                this._geometry.vertices[2].x -= this._offset;
                this._geometry.vertices[7].x -= this._offset;
                break;
            default:
                this._geometry.vertices[5].x += this._offset;
                this._geometry.vertices[6].x += this._offset;
                this._geometry.vertices[2].x += this._offset;
                this._geometry.vertices[7].x += this._offset;
                break;
        }
        ;
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 0, 3));
        this._geometry.computeFaceNormals();
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshStandardMaterial"]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this._geometry, this._material);
        this._mesh.name = "offset";
    };
    return Offset;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["b" /* Duct */]));

//# sourceMappingURL=offset.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Cap = /** @class */ (function (_super) {
    __extends(Cap, _super);
    function Cap(w, h) {
        var _this = _super.call(this, w, h) || this;
        _this._length = 0.5; //default length for a single cap
        return _this;
    }
    Cap.prototype.draw = function () {
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this._geometry.vertices.push(
        //               ( X            Y             Z )
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this._width, 0, this._length) //Vertex 7
        );
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](2, 0, 3), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 3), new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](1, 3, 4));
        this._geometry.computeFaceNormals();
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshStandardMaterial"]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](this._geometry, this._material);
        this._mesh.name = "cap";
    };
    return Cap;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["b" /* Duct */]));

//# sourceMappingURL=cap.js.map

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 257,
	"./af.js": 257,
	"./ar": 258,
	"./ar-dz": 259,
	"./ar-dz.js": 259,
	"./ar-kw": 260,
	"./ar-kw.js": 260,
	"./ar-ly": 261,
	"./ar-ly.js": 261,
	"./ar-ma": 262,
	"./ar-ma.js": 262,
	"./ar-sa": 263,
	"./ar-sa.js": 263,
	"./ar-tn": 264,
	"./ar-tn.js": 264,
	"./ar.js": 258,
	"./az": 265,
	"./az.js": 265,
	"./be": 266,
	"./be.js": 266,
	"./bg": 267,
	"./bg.js": 267,
	"./bm": 268,
	"./bm.js": 268,
	"./bn": 269,
	"./bn.js": 269,
	"./bo": 270,
	"./bo.js": 270,
	"./br": 271,
	"./br.js": 271,
	"./bs": 272,
	"./bs.js": 272,
	"./ca": 273,
	"./ca.js": 273,
	"./cs": 274,
	"./cs.js": 274,
	"./cv": 275,
	"./cv.js": 275,
	"./cy": 276,
	"./cy.js": 276,
	"./da": 277,
	"./da.js": 277,
	"./de": 278,
	"./de-at": 279,
	"./de-at.js": 279,
	"./de-ch": 280,
	"./de-ch.js": 280,
	"./de.js": 278,
	"./dv": 281,
	"./dv.js": 281,
	"./el": 282,
	"./el.js": 282,
	"./en-SG": 283,
	"./en-SG.js": 283,
	"./en-au": 284,
	"./en-au.js": 284,
	"./en-ca": 285,
	"./en-ca.js": 285,
	"./en-gb": 286,
	"./en-gb.js": 286,
	"./en-ie": 287,
	"./en-ie.js": 287,
	"./en-il": 288,
	"./en-il.js": 288,
	"./en-nz": 289,
	"./en-nz.js": 289,
	"./eo": 290,
	"./eo.js": 290,
	"./es": 291,
	"./es-do": 292,
	"./es-do.js": 292,
	"./es-us": 293,
	"./es-us.js": 293,
	"./es.js": 291,
	"./et": 294,
	"./et.js": 294,
	"./eu": 295,
	"./eu.js": 295,
	"./fa": 296,
	"./fa.js": 296,
	"./fi": 297,
	"./fi.js": 297,
	"./fo": 298,
	"./fo.js": 298,
	"./fr": 299,
	"./fr-ca": 300,
	"./fr-ca.js": 300,
	"./fr-ch": 301,
	"./fr-ch.js": 301,
	"./fr.js": 299,
	"./fy": 302,
	"./fy.js": 302,
	"./ga": 303,
	"./ga.js": 303,
	"./gd": 304,
	"./gd.js": 304,
	"./gl": 305,
	"./gl.js": 305,
	"./gom-latn": 306,
	"./gom-latn.js": 306,
	"./gu": 307,
	"./gu.js": 307,
	"./he": 308,
	"./he.js": 308,
	"./hi": 309,
	"./hi.js": 309,
	"./hr": 310,
	"./hr.js": 310,
	"./hu": 311,
	"./hu.js": 311,
	"./hy-am": 312,
	"./hy-am.js": 312,
	"./id": 313,
	"./id.js": 313,
	"./is": 314,
	"./is.js": 314,
	"./it": 315,
	"./it-ch": 316,
	"./it-ch.js": 316,
	"./it.js": 315,
	"./ja": 317,
	"./ja.js": 317,
	"./jv": 318,
	"./jv.js": 318,
	"./ka": 319,
	"./ka.js": 319,
	"./kk": 320,
	"./kk.js": 320,
	"./km": 321,
	"./km.js": 321,
	"./kn": 322,
	"./kn.js": 322,
	"./ko": 323,
	"./ko.js": 323,
	"./ku": 324,
	"./ku.js": 324,
	"./ky": 325,
	"./ky.js": 325,
	"./lb": 326,
	"./lb.js": 326,
	"./lo": 327,
	"./lo.js": 327,
	"./lt": 328,
	"./lt.js": 328,
	"./lv": 329,
	"./lv.js": 329,
	"./me": 330,
	"./me.js": 330,
	"./mi": 331,
	"./mi.js": 331,
	"./mk": 332,
	"./mk.js": 332,
	"./ml": 333,
	"./ml.js": 333,
	"./mn": 334,
	"./mn.js": 334,
	"./mr": 335,
	"./mr.js": 335,
	"./ms": 336,
	"./ms-my": 337,
	"./ms-my.js": 337,
	"./ms.js": 336,
	"./mt": 338,
	"./mt.js": 338,
	"./my": 339,
	"./my.js": 339,
	"./nb": 340,
	"./nb.js": 340,
	"./ne": 341,
	"./ne.js": 341,
	"./nl": 342,
	"./nl-be": 343,
	"./nl-be.js": 343,
	"./nl.js": 342,
	"./nn": 344,
	"./nn.js": 344,
	"./pa-in": 345,
	"./pa-in.js": 345,
	"./pl": 346,
	"./pl.js": 346,
	"./pt": 347,
	"./pt-br": 348,
	"./pt-br.js": 348,
	"./pt.js": 347,
	"./ro": 349,
	"./ro.js": 349,
	"./ru": 350,
	"./ru.js": 350,
	"./sd": 351,
	"./sd.js": 351,
	"./se": 352,
	"./se.js": 352,
	"./si": 353,
	"./si.js": 353,
	"./sk": 354,
	"./sk.js": 354,
	"./sl": 355,
	"./sl.js": 355,
	"./sq": 356,
	"./sq.js": 356,
	"./sr": 357,
	"./sr-cyrl": 358,
	"./sr-cyrl.js": 358,
	"./sr.js": 357,
	"./ss": 359,
	"./ss.js": 359,
	"./sv": 360,
	"./sv.js": 360,
	"./sw": 361,
	"./sw.js": 361,
	"./ta": 362,
	"./ta.js": 362,
	"./te": 363,
	"./te.js": 363,
	"./tet": 364,
	"./tet.js": 364,
	"./tg": 365,
	"./tg.js": 365,
	"./th": 366,
	"./th.js": 366,
	"./tl-ph": 367,
	"./tl-ph.js": 367,
	"./tlh": 368,
	"./tlh.js": 368,
	"./tr": 369,
	"./tr.js": 369,
	"./tzl": 370,
	"./tzl.js": 370,
	"./tzm": 371,
	"./tzm-latn": 372,
	"./tzm-latn.js": 372,
	"./tzm.js": 371,
	"./ug-cn": 373,
	"./ug-cn.js": 373,
	"./uk": 374,
	"./uk.js": 374,
	"./ur": 375,
	"./ur.js": 375,
	"./uz": 376,
	"./uz-latn": 377,
	"./uz-latn.js": 377,
	"./uz.js": 376,
	"./vi": 378,
	"./vi.js": 378,
	"./x-pseudo": 379,
	"./x-pseudo.js": 379,
	"./yo": 380,
	"./yo.js": 380,
	"./zh-cn": 381,
	"./zh-cn.js": 381,
	"./zh-hk": 382,
	"./zh-hk.js": 382,
	"./zh-tw": 383,
	"./zh-tw.js": 383
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 645;

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FB_HAVEMETAL_CREDENTIALS; });
var FB_HAVEMETAL_CREDENTIALS = {
    apiKey: "AIzaSyBwHkC6HXy3CS30kwZityGxHufZrQYgFAQ",
    authDomain: "havemetal-f3d84.firebaseapp.com",
    databaseURL: "https://havemetal-f3d84.firebaseio.com",
    projectId: "havemetal-f3d84",
    storageBucket: "havemetal-f3d84.appspot.com",
    messagingSenderId: "1056334326705"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[491]);
//# sourceMappingURL=main.js.map