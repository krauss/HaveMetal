webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
    }
    HomePage.prototype.tabspage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Hi {{userDetails.name}}! Welcome to DuctFrabication</h1>\n  <h3>xxx xxxx xxxx xxx xxx xx xx xx xxx x xxxx xx xxxxx x x xx x x xx x xxxx xxx xxx x xxx xxxx xx xx</h3>\n\n  <button ion-button block color="primary" class="margintop" (click)="tabspage()">OK</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manual_manual__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__design_design__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HomePage } from '../home/home';


var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__manual_manual__["a" /* Manual */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__design_design__["a" /* Design */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/tabs/tabs.html"*/'<ion-tabs padding>\n  <ion-tab [root]="tab1Root" tabTitle="Manual" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Design" tabIcon="cog"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(101);
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
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl) {
        this.navCtrl = navCtrl;
        if (localStorage.getItem('userData')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */]);
    };
    return Welcome;
}());
Welcome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/welcome/welcome.html"*/'<ion-content padding id="welcome">\n	<h1>Duct Fabrication Assiantance</h1>\n	<ion-img class="imgsize" src="../../assets/images/ductWork.jpg"></ion-img>\n	<p>xxxxxxx x xx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x xx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x xx xx xxxxxxxxxxxxxxxxxxxxxx\n	</p>\n\n	<button ion-button block color="secondary" class="margintop" (click)="signup()">Signup</button>\n	<button ion-button block color="secondary" (click)="login()">Login</button>\n</ion-content>'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], Welcome);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    AboutPage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    AboutPage.prototype.logout = function () {
        //API Token logout
        localStorage.clear();
        setTimeout(this.backToWelcome(), 1000);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="title">\n      About\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block id="logout" color="primary" (click)="logout()">Logout</button>\n</ion-content>'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(99);
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
 * Generated class for the Manual page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Manual = (function () {
    function Manual(navCtrl, app, authService) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = { "user_id": "", "token": "", "search_word": "" };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userPostData.user_id = data.userData.user_id;
        this.userPostData.token = data.userData.token;
        //this.getFeed();
        this.getManual();
    }
    Manual.prototype.getManual = function () {
        var _this = this;
        //Api connections
        this.authService.postData(this.userPostData, "manual").then(function (result) {
            _this.responseData = result;
            if (_this.responseData.manualData) {
                _this.dataSet = _this.responseData.manualData;
            }
            else {
                console.log("No Access");
            }
        }, function (err) {
            //connection fail message
        });
    };
    Manual.prototype.getFeed = function () {
        var _this = this;
        //Api connections
        this.authService.postData(this.userPostData, "feed").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.feedData) {
                _this.dataSet = _this.responseData.feedData;
            }
            else {
                console.log("No Access");
            }
        }, function (err) {
            //connection fail message
        });
    };
    Manual.prototype.convertTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    Manual.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Manual');
    };
    return Manual;
}());
Manual = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-manual',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/manual/manual.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Manual</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="body">\n    <ion-input class="searchText" type="text" value="" [(ngModel)]="userPostData.search_word"></ion-input>\n    <button ion-button block class="searchButton" (click)="getManual()">Search</button>\n\n    <ion-card *ngFor="let item of dataSet">\n        <ion-card-content class="topiccontent">\n          <img class="imgcontent" src="{{item.imagelink}}" alt="{{item.imagelink}}">\n          <h2 [innerHTML]="item.title"></h2>\n          <p>{{item.description}}</p>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/manual/manual.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], Manual);

var _a, _b, _c;
//# sourceMappingURL=manual.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Design; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the Design page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Design = (function () {
    function Design(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Design.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Design');
    };
    return Design;
}());
Design = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-design',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/design/design.html"*/'<ion-header>\n    <script src="js/jquery-3.2.1.js"></script>\n    <script src="js/jquery-ui.js"></script>\n    <script src="js/samples.js"></script>\n\n  <ion-navbar>\n    <ion-title>Design</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Design Duct!!!</h2>\n  <div class="container">\n    <div class="div_samples">\n      <div class="row">\n        <div class="eleven columns">\n          <h4 id="sample_head">Here are some samples</h4>\n        </div>\n      </div>\n      <div class="row">\n        <div class="three columns">\n          <ul class="samples_d">\n            <li id="bu_StraightDuct">Straigth Duct</li>\n            <li id="bu_RadiusDuct">Radius Duct</li>\n            <li id="bu_TransictionDuct">Transiction Duct</li>\n          </ul>\n        </div>\n        <!-- Fancy page uses canvas html5 component to show WebGL renderer. -->\n        <div class="eight columns">\n          <div id="div_drawArea"></div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="four columns">\n          <img src="img/ic_home_black_24dp_1x.png" alt="home" id="back_index_page">\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!--  Third-party classes imports  -->\n<script src="js/lib/three.js"></script>\n<script src="js/lib/BrowserDetector.js"></script>\n<script src="js/lib/TrackballControls_v2.js"></script>\n\n<!--  Proprietary classes -->\n<script src="js/src/entities/StraightDuct.js"></script>\n<script src="js/src/entities/RadiusDuct.js"></script>\n<script src="js/src/entities/TransictionDuct.js"></script>\n<script src="js/src/objects/Main.js"></script>\n<script src="js/src/objects/Controlls.js"></script>\n<script src="js/src/objects/WebGLRenderer.js"></script>\n<script src="js/src/objects/Camera.js"></script>\n<script src="js/src/objects/Light.js"></script>\n'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/design/design.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], Design);

//# sourceMappingURL=design.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(98);
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
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, authService, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userData = { "username": "", "password": "", "email": "", "name": "" };
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.signup = function () {
        var _this = this;
        if (this.userData.username && this.userData.password && this.userData.email && this.userData.name) {
            //Api connections
            this.authService.postData(this.userData, "signup").then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                localStorage.setItem('userData', JSON.stringify(_this.responseData));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }, function (err) {
                //connection fail message
            });
        }
        else {
            this.presentToast("Give all the user details");
        }
    };
    Signup.prototype.presentToast = function (msg) {
        var toast = this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Signup.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.name"></ion-input>\n    </ion-item>\n    <ion-item>\n\n      <ion-label fixed>Email</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n    </ion-item>\n\n    <button ion-button block color="primary" (click)="signup()">Signup</button>\n\n    <p>Already signup. Go to <a href="#" (click)="login()">Login Page</a></p>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_samples_samples__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_design_design__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_moment__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_moment__);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_samples_samples__["a" /* SamplesPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__["a" /* Manual */],
            __WEBPACK_IMPORTED_MODULE_15__pages_design_design__["a" /* Design */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__pages_samples_samples__["a" /* SamplesPage */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_14__pages_manual_manual__["a" /* Manual */],
            __WEBPACK_IMPORTED_MODULE_15__pages_design_design__["a" /* Design */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(196);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SamplesPage = (function () {
    function SamplesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SamplesPage;
}());
SamplesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-samples',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/samples/samples.html"*/'<ion-header>\n    <script src="js/jquery-3.2.1.js"></script>\n    <script src="js/jquery-ui.js"></script>\n    <script src="js/samples.js"></script>\n\n  <ion-navbar>\n    <ion-title>Samples</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Samples Duct!!!</h2>\n  <div class="container">\n    <div class="div_samples">\n      <div class="row">\n        <div class="eleven columns">\n          <h4 id="sample_head">Here are some samples</h4>\n        </div>\n      </div>\n      <div class="row">\n        <div class="three columns">\n          <ul class="samples_d">\n            <li id="bu_StraightDuct">Straigth Duct</li>\n            <li id="bu_RadiusDuct">Radius Duct</li>\n            <li id="bu_TransictionDuct">Transiction Duct</li>\n          </ul>\n        </div>\n        <!-- Fancy page uses canvas html5 component to show WebGL renderer. -->\n        <div class="eight columns">\n          <div id="div_drawArea"></div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="four columns">\n          <img src="img/ic_home_black_24dp_1x.png" alt="home" id="back_index_page">\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!--  Third-party classes imports  -->\n<script src="js/lib/three.js"></script>\n<script src="js/lib/BrowserDetector.js"></script>\n<script src="js/lib/TrackballControls_v2.js"></script>\n\n<!--  Proprietary classes -->\n<script src="js/src/entities/StraightDuct.js"></script>\n<script src="js/src/entities/RadiusDuct.js"></script>\n<script src="js/src/entities/TransictionDuct.js"></script>\n<script src="js/src/objects/Main.js"></script>\n<script src="js/src/objects/Controlls.js"></script>\n<script src="js/src/objects/WebGLRenderer.js"></script>\n<script src="js/src/objects/Camera.js"></script>\n<script src="js/src/objects/Light.js"></script>\n'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/samples/samples.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SamplesPage);

//# sourceMappingURL=samples.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 275,
	"./af.js": 275,
	"./ar": 276,
	"./ar-dz": 277,
	"./ar-dz.js": 277,
	"./ar-kw": 278,
	"./ar-kw.js": 278,
	"./ar-ly": 279,
	"./ar-ly.js": 279,
	"./ar-ma": 280,
	"./ar-ma.js": 280,
	"./ar-sa": 281,
	"./ar-sa.js": 281,
	"./ar-tn": 282,
	"./ar-tn.js": 282,
	"./ar.js": 276,
	"./az": 283,
	"./az.js": 283,
	"./be": 284,
	"./be.js": 284,
	"./bg": 285,
	"./bg.js": 285,
	"./bn": 286,
	"./bn.js": 286,
	"./bo": 287,
	"./bo.js": 287,
	"./br": 288,
	"./br.js": 288,
	"./bs": 289,
	"./bs.js": 289,
	"./ca": 290,
	"./ca.js": 290,
	"./cs": 291,
	"./cs.js": 291,
	"./cv": 292,
	"./cv.js": 292,
	"./cy": 293,
	"./cy.js": 293,
	"./da": 294,
	"./da.js": 294,
	"./de": 295,
	"./de-at": 296,
	"./de-at.js": 296,
	"./de-ch": 297,
	"./de-ch.js": 297,
	"./de.js": 295,
	"./dv": 298,
	"./dv.js": 298,
	"./el": 299,
	"./el.js": 299,
	"./en-au": 300,
	"./en-au.js": 300,
	"./en-ca": 301,
	"./en-ca.js": 301,
	"./en-gb": 302,
	"./en-gb.js": 302,
	"./en-ie": 303,
	"./en-ie.js": 303,
	"./en-nz": 304,
	"./en-nz.js": 304,
	"./eo": 305,
	"./eo.js": 305,
	"./es": 306,
	"./es-do": 307,
	"./es-do.js": 307,
	"./es.js": 306,
	"./et": 308,
	"./et.js": 308,
	"./eu": 309,
	"./eu.js": 309,
	"./fa": 310,
	"./fa.js": 310,
	"./fi": 311,
	"./fi.js": 311,
	"./fo": 312,
	"./fo.js": 312,
	"./fr": 313,
	"./fr-ca": 314,
	"./fr-ca.js": 314,
	"./fr-ch": 315,
	"./fr-ch.js": 315,
	"./fr.js": 313,
	"./fy": 316,
	"./fy.js": 316,
	"./gd": 317,
	"./gd.js": 317,
	"./gl": 318,
	"./gl.js": 318,
	"./gom-latn": 319,
	"./gom-latn.js": 319,
	"./he": 320,
	"./he.js": 320,
	"./hi": 321,
	"./hi.js": 321,
	"./hr": 322,
	"./hr.js": 322,
	"./hu": 323,
	"./hu.js": 323,
	"./hy-am": 324,
	"./hy-am.js": 324,
	"./id": 325,
	"./id.js": 325,
	"./is": 326,
	"./is.js": 326,
	"./it": 327,
	"./it.js": 327,
	"./ja": 328,
	"./ja.js": 328,
	"./jv": 329,
	"./jv.js": 329,
	"./ka": 330,
	"./ka.js": 330,
	"./kk": 331,
	"./kk.js": 331,
	"./km": 332,
	"./km.js": 332,
	"./kn": 333,
	"./kn.js": 333,
	"./ko": 334,
	"./ko.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mr": 344,
	"./mr.js": 344,
	"./ms": 345,
	"./ms-my": 346,
	"./ms-my.js": 346,
	"./ms.js": 345,
	"./my": 347,
	"./my.js": 347,
	"./nb": 348,
	"./nb.js": 348,
	"./ne": 349,
	"./ne.js": 349,
	"./nl": 350,
	"./nl-be": 351,
	"./nl-be.js": 351,
	"./nl.js": 350,
	"./nn": 352,
	"./nn.js": 352,
	"./pa-in": 353,
	"./pa-in.js": 353,
	"./pl": 354,
	"./pl.js": 354,
	"./pt": 355,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 355,
	"./ro": 357,
	"./ro.js": 357,
	"./ru": 358,
	"./ru.js": 358,
	"./sd": 359,
	"./sd.js": 359,
	"./se": 360,
	"./se.js": 360,
	"./si": 361,
	"./si.js": 361,
	"./sk": 362,
	"./sk.js": 362,
	"./sl": 363,
	"./sl.js": 363,
	"./sq": 364,
	"./sq.js": 364,
	"./sr": 365,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 365,
	"./ss": 367,
	"./ss.js": 367,
	"./sv": 368,
	"./sv.js": 368,
	"./sw": 369,
	"./sw.js": 369,
	"./ta": 370,
	"./ta.js": 370,
	"./te": 371,
	"./te.js": 371,
	"./tet": 372,
	"./tet.js": 372,
	"./th": 373,
	"./th.js": 373,
	"./tl-ph": 374,
	"./tl-ph.js": 374,
	"./tlh": 375,
	"./tlh.js": 375,
	"./tr": 376,
	"./tr.js": 376,
	"./tzl": 377,
	"./tzl.js": 377,
	"./tzm": 378,
	"./tzm-latn": 379,
	"./tzm-latn.js": 379,
	"./tzm.js": 378,
	"./uk": 380,
	"./uk.js": 380,
	"./ur": 381,
	"./ur.js": 381,
	"./uz": 382,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 382,
	"./vi": 384,
	"./vi.js": 384,
	"./x-pseudo": 385,
	"./x-pseudo.js": 385,
	"./yo": 386,
	"./yo.js": 386,
	"./zh-cn": 387,
	"./zh-cn.js": 387,
	"./zh-hk": 388,
	"./zh-hk.js": 388,
	"./zh-tw": 389,
	"./zh-tw.js": 389
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
webpackContext.id = 403;

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
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
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, authService, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userData = { "username": "", "password": "" };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.home = function () {
        var _this = this;
        //Api connections
        if (this.userData.username && this.userData.password) {
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                if (_this.responseData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.presentToast("Please give a valid username and password.");
                }
            }, function (err) {
                //connection fail message
            });
        }
        else {
            this.presentToast("Please fill all details.");
        }
    };
    Login.prototype.presentToast = function (msg) {
        var toast = this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n    </ion-item>\n\n    <button ion-button block color="primary" (click)="home()">Login</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Aoddy/project/javascript/ionic_website_protoype/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiURL = "http://localhost:8888/PHP-Slim-Restful/api/";
//let apiURL = "http://192.168.1.6:8888/PHP-Slim-Restful/api/";
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            console.log(apiURL + type);
            _this.http.post(apiURL + type, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map