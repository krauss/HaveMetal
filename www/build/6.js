webpackJsonp([6],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobEditPageModule", function() { return JobEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_edit__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobEditPageModule = (function () {
    function JobEditPageModule() {
    }
    return JobEditPageModule;
}());
JobEditPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__job_edit__["a" /* JobEditPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_edit__["a" /* JobEditPage */]),
        ],
    })
], JobEditPageModule);

//# sourceMappingURL=job-edit.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(400);
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
 * Generated class for the JobEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobEditPage = (function () {
    function JobEditPage(navCtrl, navParams, db, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toast = toast;
        this.job = {};
        var jobID = this.navParams.get('jobID');
        console.log(jobID);
        this.jobRef = this.db.object("job-list/" + jobID);
        //Subscribe the object and assign the result to this
        this.jobSubscription = this.jobRef.subscribe(function (job) { return _this.job = job; });
    }
    JobEditPage.prototype.updateJob = function (job) {
        var _this = this;
        //Update Item
        this.jobRef.update(job);
        this.toast.create({
            message: 'Job updated successfully!',
            duration: 1500,
            position: 'bottom'
        }).present().then(function () {
            // Navigate the user back to the Job List
            _this.navCtrl.pop();
        });
    };
    JobEditPage.prototype.ionViewWillLeave = function () {
        this.jobSubscription.unsubscribe();
    };
    return JobEditPage;
}());
JobEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-job-edit',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/job-edit/job-edit.html"*/'<!--\n  Generated template for the JobEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{job.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list padding>\n\n    <ion-item>\n      <ion-label floating>Job Name</ion-label>\n      <ion-input type="text" [(ngModel)]="job.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Site Address</ion-label>\n      <ion-input type="text" [(ngModel)]="job.address"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block color="light" (click)="updateJob(job)">Save</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/job-edit/job-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], JobEditPage);

//# sourceMappingURL=job-edit.js.map

/***/ })

});
//# sourceMappingURL=6.js.map