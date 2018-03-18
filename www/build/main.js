webpackJsonp([6],{

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/job-creation/job-creation.module": [
		539,
		5
	],
	"../pages/job-edit/job-edit.module": [
		537,
		4
	],
	"../pages/jobs/jobs.module": [
		538,
		0
	],
	"../pages/login/login.module": [
		540,
		3
	],
	"../pages/sign-in/sign-in.module": [
		541,
		2
	],
	"../pages/task-creation/task-creation.module": [
		542,
		1
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
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScannerPage = (function () {
    function ScannerPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ScannerPage;
}());
ScannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-scanner',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/scanner/scanner.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center> Scanner </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/scanner/scanner.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ScannerPage);

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardPage = (function () {
    function DashboardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scanner_scanner__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab2Root = 'JobsPage';
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__scanner_scanner__["a" /* ScannerPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/tabs/tabs.html"*/'<ion-tabs color="s_light">\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Jobs" tabIcon="construct"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Scanner" tabIcon="barcode"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/tabs/tabs.html"*/
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(421);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_scanner_scanner__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firebase_credentials__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_scanner_scanner__["a" /* ScannerPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/job-edit/job-edit.module#JobEditPageModule', name: 'JobEditPage', segment: 'job-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jobs/jobs.module#JobsPageModule', name: 'JobsPage', segment: 'jobs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job-creation/job-creation.module#JobCreationPageModule', name: 'JobCreationPage', segment: 'job-creation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-creation/task-creation.module#TaskCreationPageModule', name: 'TaskCreationPage', segment: 'task-creation', priority: 'low', defaultHistory: [] }
                ]
            }),
            // Firebase initialization
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__firebase_credentials__["a" /* FB_HAVEMETAL_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_moment__["MomentModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_scanner_scanner__["a" /* ScannerPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 224,
	"./af.js": 224,
	"./ar": 225,
	"./ar-dz": 226,
	"./ar-dz.js": 226,
	"./ar-kw": 227,
	"./ar-kw.js": 227,
	"./ar-ly": 228,
	"./ar-ly.js": 228,
	"./ar-ma": 229,
	"./ar-ma.js": 229,
	"./ar-sa": 230,
	"./ar-sa.js": 230,
	"./ar-tn": 231,
	"./ar-tn.js": 231,
	"./ar.js": 225,
	"./az": 232,
	"./az.js": 232,
	"./be": 233,
	"./be.js": 233,
	"./bg": 234,
	"./bg.js": 234,
	"./bm": 235,
	"./bm.js": 235,
	"./bn": 236,
	"./bn.js": 236,
	"./bo": 237,
	"./bo.js": 237,
	"./br": 238,
	"./br.js": 238,
	"./bs": 239,
	"./bs.js": 239,
	"./ca": 240,
	"./ca.js": 240,
	"./cs": 241,
	"./cs.js": 241,
	"./cv": 242,
	"./cv.js": 242,
	"./cy": 243,
	"./cy.js": 243,
	"./da": 244,
	"./da.js": 244,
	"./de": 245,
	"./de-at": 246,
	"./de-at.js": 246,
	"./de-ch": 247,
	"./de-ch.js": 247,
	"./de.js": 245,
	"./dv": 248,
	"./dv.js": 248,
	"./el": 249,
	"./el.js": 249,
	"./en-au": 250,
	"./en-au.js": 250,
	"./en-ca": 251,
	"./en-ca.js": 251,
	"./en-gb": 252,
	"./en-gb.js": 252,
	"./en-ie": 253,
	"./en-ie.js": 253,
	"./en-nz": 254,
	"./en-nz.js": 254,
	"./eo": 255,
	"./eo.js": 255,
	"./es": 256,
	"./es-do": 257,
	"./es-do.js": 257,
	"./es-us": 258,
	"./es-us.js": 258,
	"./es.js": 256,
	"./et": 259,
	"./et.js": 259,
	"./eu": 260,
	"./eu.js": 260,
	"./fa": 261,
	"./fa.js": 261,
	"./fi": 262,
	"./fi.js": 262,
	"./fo": 263,
	"./fo.js": 263,
	"./fr": 264,
	"./fr-ca": 265,
	"./fr-ca.js": 265,
	"./fr-ch": 266,
	"./fr-ch.js": 266,
	"./fr.js": 264,
	"./fy": 267,
	"./fy.js": 267,
	"./gd": 268,
	"./gd.js": 268,
	"./gl": 269,
	"./gl.js": 269,
	"./gom-latn": 270,
	"./gom-latn.js": 270,
	"./gu": 271,
	"./gu.js": 271,
	"./he": 272,
	"./he.js": 272,
	"./hi": 273,
	"./hi.js": 273,
	"./hr": 274,
	"./hr.js": 274,
	"./hu": 275,
	"./hu.js": 275,
	"./hy-am": 276,
	"./hy-am.js": 276,
	"./id": 277,
	"./id.js": 277,
	"./is": 278,
	"./is.js": 278,
	"./it": 279,
	"./it.js": 279,
	"./ja": 280,
	"./ja.js": 280,
	"./jv": 281,
	"./jv.js": 281,
	"./ka": 282,
	"./ka.js": 282,
	"./kk": 283,
	"./kk.js": 283,
	"./km": 284,
	"./km.js": 284,
	"./kn": 285,
	"./kn.js": 285,
	"./ko": 286,
	"./ko.js": 286,
	"./ky": 287,
	"./ky.js": 287,
	"./lb": 288,
	"./lb.js": 288,
	"./lo": 289,
	"./lo.js": 289,
	"./lt": 290,
	"./lt.js": 290,
	"./lv": 291,
	"./lv.js": 291,
	"./me": 292,
	"./me.js": 292,
	"./mi": 293,
	"./mi.js": 293,
	"./mk": 294,
	"./mk.js": 294,
	"./ml": 295,
	"./ml.js": 295,
	"./mr": 296,
	"./mr.js": 296,
	"./ms": 297,
	"./ms-my": 298,
	"./ms-my.js": 298,
	"./ms.js": 297,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
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
webpackContext.id = 505;

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
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

/***/ 536:
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

},[404]);
//# sourceMappingURL=main.js.map