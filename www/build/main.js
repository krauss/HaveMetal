webpackJsonp([9],{

/***/ 117:
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

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		543,
		8
	],
	"../pages/job-creation/job-creation.module": [
		544,
		7
	],
	"../pages/job-edit/job-edit.module": [
		545,
		6
	],
	"../pages/jobs/jobs.module": [
		546,
		0
	],
	"../pages/login/login.module": [
		547,
		5
	],
	"../pages/samples/samples.module": [
		548,
		1
	],
	"../pages/scanner/scanner.module": [
		549,
		4
	],
	"../pages/sign-in/sign-in.module": [
		550,
		3
	],
	"../pages/task-creation/task-creation.module": [
		551,
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
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 403:
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

var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = 'DashboardPage';
        this.tab2Root = 'JobsPage';
        this.tab3Root = 'ScannerPage';
        this.tab4Root = 'SamplesPage';
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/tabs/tabs.html"*/'<ion-tabs color="s_light">\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Jobs" tabIcon="construct"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Scanner" tabIcon="barcode"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Samples" tabIcon="cube"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/tabs/tabs.html"*/
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_interfaces_duct_properties__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_objects_factory__ = __webpack_require__(512);
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
var PopoverComponent = PopoverComponent_1 = (function () {
    function PopoverComponent(navParams) {
        this.navParams = navParams;
        this.type_list = __WEBPACK_IMPORTED_MODULE_3__models_interfaces_duct_properties__["b" /* TYPES */];
    }
    PopoverComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            PopoverComponent_1._scene = this.navParams.data.scene;
            // this.background = this.getColorName(this.contentEle.style.backgroundColor);
            //this.duct.color = this.getColorName(this.duct.color);
            //console.log(this._duct.geometry.name);
            // this.setFontFamily();
            //this.setDuctType();
        }
    };
    //This method is going to get the duct's color
    // getColorName(background: any) {
    //   let colorName = 'white';
    //
    //   if (!background) return 'white';
    //
    //   for (var key in this.colors) {
    //     if (this.colors[key].bg === background) {
    //       colorName = key;
    //     }
    //   }
    //
    //   return colorName;
    // }
    //TODO implement the method to change the type of the duct
    // setDuctType(){
    //   if (this.duct.type) {
    //     //TODO
    //     this.type_list = this.duct.type;
    //   }
    // }
    PopoverComponent.prototype.changeBackground = function (color) {
        PopoverComponent_1.duct.material.color = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Color */](color);
    };
    PopoverComponent.prototype.changeDuctType = function ($event) {
        if ($event) {
            if (PopoverComponent_1.duct != undefined) {
                var tmp = PopoverComponent_1._scene.getObjectByName(PopoverComponent_1.duct.mesh.name);
                PopoverComponent_1._scene.remove(tmp);
            }
            //console.log(PopoverComponent.duct);
            PopoverComponent_1.duct = __WEBPACK_IMPORTED_MODULE_4__models_objects_factory__["a" /* DuctFactory */].createDuct($event);
            PopoverComponent_1.duct.draw();
            PopoverComponent_1._scene.add(PopoverComponent_1.duct.mesh);
        }
    };
    return PopoverComponent;
}());
PopoverComponent = PopoverComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popover',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/popover/popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n<ion-list radio-group [(ngModel)]="type" (ionChange)="changeDuctType($event)">\n  <ion-row padding>\n    <ion-col>\n      <button (click)="changeBackground(\'#c4c4c4\')" ion-button small color="popover_gray">gray</button>\n    </ion-col>\n    <ion-col>\n      <button (click)="changeBackground(\'#000080\')" ion-button small color="popover_blue">blue</button>\n    </ion-col>\n    <ion-col>\n      <button (click)="changeBackground(\'#000000\')" ion-button small color="popover_black">black</button>\n    </ion-col>\n  </ion-row>\n  <ion-item *ngFor="let type of type_list">\n    <ion-label>{{type}}</ion-label>\n    <ion-radio value={{type}}></ion-radio>\n  </ion-item>\n  <!-- <ion-item >\n    <ion-label>Duct Segment</ion-label>\n    <ion-radio value="Segment"></ion-radio>\n  </ion-item>\n  <ion-item >\n    <ion-label>Curve</ion-label>\n    <ion-radio value="Curve"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Transiction</ion-label>\n    <ion-radio value="Transiction"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Reduction</ion-label>\n    <ion-radio value="Reduction"></ion-radio>\n  </ion-item>\n  <ion-select [(ngModel)]="type">\n    <ion-option *ngFor="let type of type_list">{{type}}</ion-option>\n  </ion-select> -->\n</ion-list>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/popover/popover.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _a || Object])
], PopoverComponent);

var PopoverComponent_1, _a;
//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIZES; });
var TYPES = ['Segment', 'Transiction', 'Reduction', 'Curve', 'Half-Curve', 'Square-Curve', 'End-Cap'];
var SIZES = [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650];
//# sourceMappingURL=duct.properties.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(423);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_credentials__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { ComponentsModule } from '../components/components.module';




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__["a" /* PopoverComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job-creation/job-creation.module#JobCreationPageModule', name: 'JobCreationPage', segment: 'job-creation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job-edit/job-edit.module#JobEditPageModule', name: 'JobEditPage', segment: 'job-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jobs/jobs.module#JobsPageModule', name: 'JobsPage', segment: 'jobs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/samples/samples.module#SamplesPageModule', name: 'SamplesPage', segment: 'samples', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-creation/task-creation.module#TaskCreationPageModule', name: 'TaskCreationPage', segment: 'task-creation', priority: 'low', defaultHistory: [] }
                ]
            }),
            // Firebase initialization
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__firebase_credentials__["a" /* FB_HAVEMETAL_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_moment__["MomentModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__components_popover_popover__["a" /* PopoverComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 226,
	"./af.js": 226,
	"./ar": 227,
	"./ar-dz": 228,
	"./ar-dz.js": 228,
	"./ar-kw": 229,
	"./ar-kw.js": 229,
	"./ar-ly": 230,
	"./ar-ly.js": 230,
	"./ar-ma": 231,
	"./ar-ma.js": 231,
	"./ar-sa": 232,
	"./ar-sa.js": 232,
	"./ar-tn": 233,
	"./ar-tn.js": 233,
	"./ar.js": 227,
	"./az": 234,
	"./az.js": 234,
	"./be": 235,
	"./be.js": 235,
	"./bg": 236,
	"./bg.js": 236,
	"./bm": 237,
	"./bm.js": 237,
	"./bn": 238,
	"./bn.js": 238,
	"./bo": 239,
	"./bo.js": 239,
	"./br": 240,
	"./br.js": 240,
	"./bs": 241,
	"./bs.js": 241,
	"./ca": 242,
	"./ca.js": 242,
	"./cs": 243,
	"./cs.js": 243,
	"./cv": 244,
	"./cv.js": 244,
	"./cy": 245,
	"./cy.js": 245,
	"./da": 246,
	"./da.js": 246,
	"./de": 247,
	"./de-at": 248,
	"./de-at.js": 248,
	"./de-ch": 249,
	"./de-ch.js": 249,
	"./de.js": 247,
	"./dv": 250,
	"./dv.js": 250,
	"./el": 251,
	"./el.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es-us": 260,
	"./es-us.js": 260,
	"./es.js": 258,
	"./et": 261,
	"./et.js": 261,
	"./eu": 262,
	"./eu.js": 262,
	"./fa": 263,
	"./fa.js": 263,
	"./fi": 264,
	"./fi.js": 264,
	"./fo": 265,
	"./fo.js": 265,
	"./fr": 266,
	"./fr-ca": 267,
	"./fr-ca.js": 267,
	"./fr-ch": 268,
	"./fr-ch.js": 268,
	"./fr.js": 266,
	"./fy": 269,
	"./fy.js": 269,
	"./gd": 270,
	"./gd.js": 270,
	"./gl": 271,
	"./gl.js": 271,
	"./gom-latn": 272,
	"./gom-latn.js": 272,
	"./gu": 273,
	"./gu.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./kn": 287,
	"./kn.js": 287,
	"./ko": 288,
	"./ko.js": 288,
	"./ky": 289,
	"./ky.js": 289,
	"./lb": 290,
	"./lb.js": 290,
	"./lo": 291,
	"./lo.js": 291,
	"./lt": 292,
	"./lt.js": 292,
	"./lv": 293,
	"./lv.js": 293,
	"./me": 294,
	"./me.js": 294,
	"./mi": 295,
	"./mi.js": 295,
	"./mk": 296,
	"./mk.js": 296,
	"./ml": 297,
	"./ml.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./my": 301,
	"./my.js": 301,
	"./nb": 302,
	"./nb.js": 302,
	"./ne": 303,
	"./ne.js": 303,
	"./nl": 304,
	"./nl-be": 305,
	"./nl-be.js": 305,
	"./nl.js": 304,
	"./nn": 306,
	"./nn.js": 306,
	"./pa-in": 307,
	"./pa-in.js": 307,
	"./pl": 308,
	"./pl.js": 308,
	"./pt": 309,
	"./pt-br": 310,
	"./pt-br.js": 310,
	"./pt.js": 309,
	"./ro": 311,
	"./ro.js": 311,
	"./ru": 312,
	"./ru.js": 312,
	"./sd": 313,
	"./sd.js": 313,
	"./se": 314,
	"./se.js": 314,
	"./si": 315,
	"./si.js": 315,
	"./sk": 316,
	"./sk.js": 316,
	"./sl": 317,
	"./sl.js": 317,
	"./sq": 318,
	"./sq.js": 318,
	"./sr": 319,
	"./sr-cyrl": 320,
	"./sr-cyrl.js": 320,
	"./sr.js": 319,
	"./ss": 321,
	"./ss.js": 321,
	"./sv": 322,
	"./sv.js": 322,
	"./sw": 323,
	"./sw.js": 323,
	"./ta": 324,
	"./ta.js": 324,
	"./te": 325,
	"./te.js": 325,
	"./tet": 326,
	"./tet.js": 326,
	"./th": 327,
	"./th.js": 327,
	"./tl-ph": 328,
	"./tl-ph.js": 328,
	"./tlh": 329,
	"./tlh.js": 329,
	"./tr": 330,
	"./tr.js": 330,
	"./tzl": 331,
	"./tzl.js": 331,
	"./tzm": 332,
	"./tzm-latn": 333,
	"./tzm-latn.js": 333,
	"./tzm.js": 332,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
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
webpackContext.id = 507;

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__segment__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduction__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transiction__ = __webpack_require__(515);



// ductfactory.ts
var DuctFactory = (function () {
    function DuctFactory() {
    }
    DuctFactory.createDuct = function (duct_type) {
        switch (duct_type) {
            case "Segment": return new __WEBPACK_IMPORTED_MODULE_0__segment__["a" /* Segment */]();
            case "Reduction": return new __WEBPACK_IMPORTED_MODULE_1__reduction__["a" /* Reduction */]();
            case "Transiction": return new __WEBPACK_IMPORTED_MODULE_2__transiction__["a" /* Transiction */]();
        }
    };
    return DuctFactory;
}());

//# sourceMappingURL=factory.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(61);
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
        var _this = _super.call(this) || this;
        _this._width = 8;
        _this._height = 4;
        _this._length = 11; //default measurement
        return _this;
    }
    Segment.prototype.draw = function () {
        //It crates the geometry
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Geometry */]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, 0, this._length) //Vertex 7
        );
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](2, 0, 3));
        this._geometry.computeFaceNormals();
        //It crates the material
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["k" /* MeshStandardMaterial */]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["d" /* DoubleSide */] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        //It crates the mesh to join everything together
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["j" /* Mesh */](this._geometry, this._material);
        this._mesh.name = "segment";
    };
    return Segment;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Duct */]));

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reduction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(61);
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


var Reduction = (function (_super) {
    __extends(Reduction, _super);
    function Reduction() {
        var _this = _super.call(this) || this;
        _this._width = 8;
        _this._height = 4;
        _this._length = 5; //default measurement
        return _this;
    }
    Reduction.prototype.draw = function () {
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Geometry */]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, 0, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width - 2, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width - 2, 0, this._length) //Vertex 7
        );
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](2, 0, 3));
        this._geometry.computeFaceNormals();
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["k" /* MeshStandardMaterial */]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["d" /* DoubleSide */] });
        this._material.castShadow = true;
        this._material.receiveShadow = true;
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["j" /* Mesh */](this._geometry, this._material);
        this._mesh.name = "reduction";
    };
    return Reduction;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Duct */]));

//# sourceMappingURL=reduction.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transiction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(61);
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


var Transiction = (function (_super) {
    __extends(Transiction, _super);
    function Transiction() {
        var _this = _super.call(this) || this;
        _this._width = 8;
        _this._height = 4;
        _this._length = 5; //default measurement
        return _this;
    }
    Transiction.prototype.draw = function () {
        this._geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Geometry */]();
        this._geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, 0, 0), //Vertex 0
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, 0, 0), //Vertex 1
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, 1, this._length), //Vertex 2
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, this._height, 0), //Vertex 3
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width, this._height, 0), //Vertex 4
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](0, this._height, this._length), //Vertex 5
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width - 2, this._height, this._length), //Vertex 6
        new __WEBPACK_IMPORTED_MODULE_1_three__["s" /* Vector3 */](this._width - 2, 1, this._length) //Vertex 7
        );
        this._geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](0, 1, 2), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](1, 2, 7), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](1, 7, 4), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](7, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](3, 4, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](5, 3, 6), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](2, 3, 5), new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Face3 */](2, 0, 3));
        this._geometry.computeFaceNormals();
        this._material = new __WEBPACK_IMPORTED_MODULE_1_three__["k" /* MeshStandardMaterial */]({ color: 0xc4c4c4, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: __WEBPACK_IMPORTED_MODULE_1_three__["d" /* DoubleSide */] });
        //this._material = new THREE.MeshStandardMaterial( { color: 0xb3b3b3, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: THREE.DoubleSide } );
        this._mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["j" /* Mesh */](this._geometry, this._material);
        this._mesh.name = "transiction";
    };
    return Transiction;
}(__WEBPACK_IMPORTED_MODULE_0__interfaces_duct_interface__["a" /* Duct */]));

//# sourceMappingURL=transiction.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 542:
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

},[406]);
//# sourceMappingURL=main.js.map