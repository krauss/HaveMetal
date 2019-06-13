webpackJsonp([7],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCreationPageModule", function() { return JobCreationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_creation__ = __webpack_require__(645);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobCreationPageModule = /** @class */ (function () {
    function JobCreationPageModule() {
    }
    JobCreationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_creation__["a" /* JobCreationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_creation__["a" /* JobCreationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__job_creation__["a" /* JobCreationPage */],
            ]
        })
    ], JobCreationPageModule);
    return JobCreationPageModule;
}());

//# sourceMappingURL=job-creation.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_firebase_service__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Firebase imports

/**
 * Generated class for the JobCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobCreationPage = /** @class */ (function () {
    function JobCreationPage(navCtrl, job_list, _toast) {
        this.navCtrl = navCtrl;
        this.job_list = job_list;
        this._toast = _toast;
        this.date = new Date().toISOString();
        this.job = {};
        this.toast = _toast;
    }
    //Function that add new Job
    JobCreationPage.prototype.addNewJob = function (job) {
        var _this = this;
        this.job_list.addJob({
            //TODO get the next available id from the Firebase db
            //_id: this.job.id,
            name: this.job.name,
            address: this.job.address,
            creationDate: this.date
        });
        this.toast.create({
            message: 'Job created successfully!',
            duration: 1200,
            position: 'bottom'
        }).present().then(function () {
            //Reset our job
            _this.job = {};
            // Navigate the user back to the Job List
            _this.navCtrl.pop();
        });
    };
    JobCreationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-creation',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/job-creation/job-creation.html"*/'<!--\n  Generated template for the JobCreationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>New Job</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list padding>\n\n    <ion-item>\n      <ion-label floating>Job Name</ion-label>\n      <ion-input type="text" [(ngModel)]="job.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Site Address</ion-label>\n      <ion-input type="text" [(ngModel)]="job.address"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label stacked>Creation Date</ion-label>\n      <ion-datetime disabled [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block color="light" (click)="addNewJob(job)">Create</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/job-creation/job-creation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__models_services_firebase_service__["a" /* JobListService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], JobCreationPage);
    return JobCreationPage;
}());

//# sourceMappingURL=job-creation.js.map

/***/ })

});
//# sourceMappingURL=7.js.map