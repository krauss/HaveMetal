webpackJsonp([1],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreationPageModule", function() { return TaskCreationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_creation__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskCreationPageModule = (function () {
    function TaskCreationPageModule() {
    }
    return TaskCreationPageModule;
}());
TaskCreationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__task_creation__["a" /* TaskCreationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task_creation__["a" /* TaskCreationPage */]),
        ],
    })
], TaskCreationPageModule);

//# sourceMappingURL=task-creation.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskCreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__ = __webpack_require__(551);
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
 * Generated class for the TaskCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskCreationPage = (function () {
    function TaskCreationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type_list = __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__["b" /* TYPES */];
        this.size_list = __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__["a" /* SIZES */];
    }
    TaskCreationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskCreationPage');
    };
    TaskCreationPage.prototype.addTask = function () {
        console.log("Fuck that");
    };
    return TaskCreationPage;
}());
TaskCreationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-task-creation',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/task-creation/task-creation.html"*/'<!--\n  Generated template for the TaskCreationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Task Creation Panel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item padding>\n      <ion-label>Type:</ion-label>\n      <ion-select [(ngModel)]="type">\n        <ion-option *ngFor="let type of type_list">{{type}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item padding>\n      <ion-label>Size:</ion-label>\n      <ion-select [(ngModel)]="height">\n        <ion-option *ngFor="let size of size_list">{{size}}</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="width">\n        <ion-option *ngFor="let size of size_list">{{size}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>How many</ion-label>\n      <ion-input type="number" [(ngModel)]="quantity"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Insulated</ion-label>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Fire Rated</ion-label>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block color="light" (click)="addTask()">Add</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/task-creation/task-creation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TaskCreationPage);

//# sourceMappingURL=task-creation.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIZES; });
var TYPES = ["Segment", "Transiction", "Reduction", "Curve"];
var SIZES = [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650];
//# sourceMappingURL=duct.properties.js.map

/***/ })

});
//# sourceMappingURL=1.js.map