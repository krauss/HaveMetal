webpackJsonp([10],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segment__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduction__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transiction__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offset__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cap__ = __webpack_require__(582);







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
            case "Curve": return new __WEBPACK_IMPORTED_MODULE_4__offset__["a" /* Offset */](8, 3, 1.5, __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].UP);
            case "Half-Curve": return new __WEBPACK_IMPORTED_MODULE_4__offset__["a" /* Offset */](8, 3, 1.5, __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].UP);
            case "Turn": return new __WEBPACK_IMPORTED_MODULE_4__offset__["a" /* Offset */](8, 3, 1.5, __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Direction */].UP);
            case "Cap": return new __WEBPACK_IMPORTED_MODULE_5__cap__["a" /* Cap */](7, 4);
        }
    };
    return DuctFactory;
}());

//# sourceMappingURL=factory.js.map

/***/ }),

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-duct/add-duct.module": [
		632,
		9
	],
	"../pages/dashboard/dashboard.module": [
		633,
		8
	],
	"../pages/duct-list/duct-list.module": [
		634,
		1
	],
	"../pages/job-creation/job-creation.module": [
		635,
		7
	],
	"../pages/job-edit/job-edit.module": [
		636,
		6
	],
	"../pages/jobs/jobs-list.module": [
		637,
		0
	],
	"../pages/login/login.module": [
		639,
		5
	],
	"../pages/samples/samples.module": [
		638,
		4
	],
	"../pages/scanner/scanner.module": [
		640,
		3
	],
	"../pages/sign-in/sign-in.module": [
		641,
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
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 35:
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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
        return this.jobListRef.remove(job.key);
    };
    JobListService.prototype.editJob = function (job) {
        return this.jobListRef.update(job.key, job);
    };
    JobListService.prototype.getJob = function (job_key) {
        return this.db.object(job_key);
    };
    var _a;
    JobListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]) === "function" ? _a : Object])
    ], JobListService);
    return JobListService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_objects_factory__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_orbit_controls_es6__ = __webpack_require__(425);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DuctCreationComponent);
    return DuctCreationComponent;
}());

//# sourceMappingURL=duct-creation.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_interfaces_duct_properties__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_objects_factory__ = __webpack_require__(157);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 427:
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

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(552);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_credentials__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_duct_creation_duct_creation_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_services_firebase_service__ = __webpack_require__(421);
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
                        { loadChildren: '../pages/add-duct/add-duct.module#AddDuctPageModule', name: 'AddDuctPage', segment: 'add-duct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duct-list/duct-list.module#DuctCreationPageModule', name: 'DuctListPage', segment: 'duct-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-creation/job-creation.module#JobCreationPageModule', name: 'JobCreationPage', segment: 'job-creation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-edit/job-edit.module#JobEditPageModule', name: 'JobEditPage', segment: 'job-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobs/jobs-list.module#JobsPageModule', name: 'JobsListPage', segment: 'jobs-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/samples/samples.module#SamplesPageModule', name: 'SamplesPage', segment: 'samples', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // Firebase initialization
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__firebase_credentials__["a" /* FB_HAVEMETAL_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabaseModule"],
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

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(36);
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

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reduction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(36);
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

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transiction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_duct_properties__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(36);
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

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(36);
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

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(36);
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

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 229,
	"./af.js": 229,
	"./ar": 230,
	"./ar-dz": 231,
	"./ar-dz.js": 231,
	"./ar-kw": 232,
	"./ar-kw.js": 232,
	"./ar-ly": 233,
	"./ar-ly.js": 233,
	"./ar-ma": 234,
	"./ar-ma.js": 234,
	"./ar-sa": 235,
	"./ar-sa.js": 235,
	"./ar-tn": 236,
	"./ar-tn.js": 236,
	"./ar.js": 230,
	"./az": 237,
	"./az.js": 237,
	"./be": 238,
	"./be.js": 238,
	"./bg": 239,
	"./bg.js": 239,
	"./bm": 240,
	"./bm.js": 240,
	"./bn": 241,
	"./bn.js": 241,
	"./bo": 242,
	"./bo.js": 242,
	"./br": 243,
	"./br.js": 243,
	"./bs": 244,
	"./bs.js": 244,
	"./ca": 245,
	"./ca.js": 245,
	"./cs": 246,
	"./cs.js": 246,
	"./cv": 247,
	"./cv.js": 247,
	"./cy": 248,
	"./cy.js": 248,
	"./da": 249,
	"./da.js": 249,
	"./de": 250,
	"./de-at": 251,
	"./de-at.js": 251,
	"./de-ch": 252,
	"./de-ch.js": 252,
	"./de.js": 250,
	"./dv": 253,
	"./dv.js": 253,
	"./el": 254,
	"./el.js": 254,
	"./en-SG": 255,
	"./en-SG.js": 255,
	"./en-au": 256,
	"./en-au.js": 256,
	"./en-ca": 257,
	"./en-ca.js": 257,
	"./en-gb": 258,
	"./en-gb.js": 258,
	"./en-ie": 259,
	"./en-ie.js": 259,
	"./en-il": 260,
	"./en-il.js": 260,
	"./en-nz": 261,
	"./en-nz.js": 261,
	"./eo": 262,
	"./eo.js": 262,
	"./es": 263,
	"./es-do": 264,
	"./es-do.js": 264,
	"./es-us": 265,
	"./es-us.js": 265,
	"./es.js": 263,
	"./et": 266,
	"./et.js": 266,
	"./eu": 267,
	"./eu.js": 267,
	"./fa": 268,
	"./fa.js": 268,
	"./fi": 269,
	"./fi.js": 269,
	"./fo": 270,
	"./fo.js": 270,
	"./fr": 271,
	"./fr-ca": 272,
	"./fr-ca.js": 272,
	"./fr-ch": 273,
	"./fr-ch.js": 273,
	"./fr.js": 271,
	"./fy": 274,
	"./fy.js": 274,
	"./ga": 275,
	"./ga.js": 275,
	"./gd": 276,
	"./gd.js": 276,
	"./gl": 277,
	"./gl.js": 277,
	"./gom-latn": 278,
	"./gom-latn.js": 278,
	"./gu": 279,
	"./gu.js": 279,
	"./he": 280,
	"./he.js": 280,
	"./hi": 281,
	"./hi.js": 281,
	"./hr": 282,
	"./hr.js": 282,
	"./hu": 283,
	"./hu.js": 283,
	"./hy-am": 284,
	"./hy-am.js": 284,
	"./id": 285,
	"./id.js": 285,
	"./is": 286,
	"./is.js": 286,
	"./it": 287,
	"./it-ch": 288,
	"./it-ch.js": 288,
	"./it.js": 287,
	"./ja": 289,
	"./ja.js": 289,
	"./jv": 290,
	"./jv.js": 290,
	"./ka": 291,
	"./ka.js": 291,
	"./kk": 292,
	"./kk.js": 292,
	"./km": 293,
	"./km.js": 293,
	"./kn": 294,
	"./kn.js": 294,
	"./ko": 295,
	"./ko.js": 295,
	"./ku": 296,
	"./ku.js": 296,
	"./ky": 297,
	"./ky.js": 297,
	"./lb": 298,
	"./lb.js": 298,
	"./lo": 299,
	"./lo.js": 299,
	"./lt": 300,
	"./lt.js": 300,
	"./lv": 301,
	"./lv.js": 301,
	"./me": 302,
	"./me.js": 302,
	"./mi": 303,
	"./mi.js": 303,
	"./mk": 304,
	"./mk.js": 304,
	"./ml": 305,
	"./ml.js": 305,
	"./mn": 306,
	"./mn.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 308,
	"./ms-my": 309,
	"./ms-my.js": 309,
	"./ms.js": 308,
	"./mt": 310,
	"./mt.js": 310,
	"./my": 311,
	"./my.js": 311,
	"./nb": 312,
	"./nb.js": 312,
	"./ne": 313,
	"./ne.js": 313,
	"./nl": 314,
	"./nl-be": 315,
	"./nl-be.js": 315,
	"./nl.js": 314,
	"./nn": 316,
	"./nn.js": 316,
	"./pa-in": 317,
	"./pa-in.js": 317,
	"./pl": 318,
	"./pl.js": 318,
	"./pt": 319,
	"./pt-br": 320,
	"./pt-br.js": 320,
	"./pt.js": 319,
	"./ro": 321,
	"./ro.js": 321,
	"./ru": 322,
	"./ru.js": 322,
	"./sd": 323,
	"./sd.js": 323,
	"./se": 324,
	"./se.js": 324,
	"./si": 325,
	"./si.js": 325,
	"./sk": 326,
	"./sk.js": 326,
	"./sl": 327,
	"./sl.js": 327,
	"./sq": 328,
	"./sq.js": 328,
	"./sr": 329,
	"./sr-cyrl": 330,
	"./sr-cyrl.js": 330,
	"./sr.js": 329,
	"./ss": 331,
	"./ss.js": 331,
	"./sv": 332,
	"./sv.js": 332,
	"./sw": 333,
	"./sw.js": 333,
	"./ta": 334,
	"./ta.js": 334,
	"./te": 335,
	"./te.js": 335,
	"./tet": 336,
	"./tet.js": 336,
	"./tg": 337,
	"./tg.js": 337,
	"./th": 338,
	"./th.js": 338,
	"./tl-ph": 339,
	"./tl-ph.js": 339,
	"./tlh": 340,
	"./tlh.js": 340,
	"./tr": 341,
	"./tr.js": 341,
	"./tzl": 342,
	"./tzl.js": 342,
	"./tzm": 343,
	"./tzm-latn": 344,
	"./tzm-latn.js": 344,
	"./tzm.js": 343,
	"./ug-cn": 345,
	"./ug-cn.js": 345,
	"./uk": 346,
	"./uk.js": 346,
	"./ur": 347,
	"./ur.js": 347,
	"./uz": 348,
	"./uz-latn": 349,
	"./uz-latn.js": 349,
	"./uz.js": 348,
	"./vi": 350,
	"./vi.js": 350,
	"./x-pseudo": 351,
	"./x-pseudo.js": 351,
	"./yo": 352,
	"./yo.js": 352,
	"./zh-cn": 353,
	"./zh-cn.js": 353,
	"./zh-hk": 354,
	"./zh-hk.js": 354,
	"./zh-tw": 355,
	"./zh-tw.js": 355
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
webpackContext.id = 584;

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(420);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 631:
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

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLATSIDES; });
/* unused harmony export Direction */
var TYPES = ['Segment', 'Transiction', 'Reduction', 'Offset', 'Curve', 'Half-Curve', 'Turn', 'Cap'];
var FLATSIDES = ['LEFT', 'RIGHT', 'BOTTOM', 'TOP'];
var Direction = ['LEFT', 'RIGHT', 'UP', 'DOWN'];
//# sourceMappingURL=duct.properties.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map