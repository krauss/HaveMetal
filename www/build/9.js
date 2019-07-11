webpackJsonp([9],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDuctPageModule", function() { return AddDuctPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_duct__ = __webpack_require__(644);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDuctPageModule = /** @class */ (function () {
    function AddDuctPageModule() {
    }
    AddDuctPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_duct__["a" /* AddDuctPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_duct__["a" /* AddDuctPage */]),
            ],
        })
    ], AddDuctPageModule);
    return AddDuctPageModule;
}());

//# sourceMappingURL=add-duct.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDuctPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_objects_factory__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_services_firebase_service__ = __webpack_require__(421);
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
 * Generated class for the AddDuctPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddDuctPage = /** @class */ (function () {
    function AddDuctPage(navCtrl, navParams, job_list, _toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.job_list = job_list;
        this._toast = _toast;
        this.type_list = __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__["b" /* TYPES */];
        this.job_key = this.navParams.get('job_key');
        this.toast = _toast;
    }
    AddDuctPage.prototype.addDuct = function (t) {
        this.tmp_job = this.job_list.getJob(this.job_key).valueChanges();
        this.tmp_job.ductList = new Array(this.qty);
        for (var i = 0; i < this.qty; i++) {
            this.tmp_job.ductList[i] = __WEBPACK_IMPORTED_MODULE_3__models_objects_factory__["a" /* DuctFactory */].createDuct(t);
        }
        console.log(this.type);
        console.log(this.tmp_job.ductList);
        console.log(this.tmp_job.name);
        console.log(this.tmp_job.address);
        /*this.job_list.editJob(this.tmp_job);/*.then(ref => {
    
          this.toast.create({
    
            message: 'Ducts created & added successfully!',
            duration: 1200,
            position: 'bottom'
    
          }).present().then(() => {
      
              this.navCtrl.pop();
    
          })
        });*/
    };
    AddDuctPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    var _a, _b, _c, _d;
    AddDuctPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-duct',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/add-duct/add-duct.html"*/'<!--\n  Generated template for the AddDuctPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Add New Duct</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item required>\n    <ion-label>Type</ion-label>\n      <!--<ion-select [(ngModel)]="type" (ionChange)="selectDuctType($event)">-->\n          <ion-select [(ngModel)]="type">\n          <ion-option *ngFor="let type of type_list">{{type}}</ion-option>\n      </ion-select>\n  </ion-item> \n\n  <ion-item required>\n    <ion-label>Quantity</ion-label>\n    <ion-input type="number" [(ngModel)]="qty"></ion-input>\n  </ion-item>\n    \n  <button margin-top ion-button block clear color="primary" (click)="addDuct(type)">Add</button>\n  \n  <button ion-button block clear color="secondary" (click)="cancel()">Cancel</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/add-duct/add-duct.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__models_services_firebase_service__["a" /* JobListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_services_firebase_service__["a" /* JobListService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" ? _d : Object])
    ], AddDuctPage);
    return AddDuctPage;
}());

//# sourceMappingURL=add-duct.js.map

/***/ })

});
//# sourceMappingURL=9.js.map