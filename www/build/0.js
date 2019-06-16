webpackJsonp([0],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_list__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */],
            ]
        })
    ], JobsPageModule);
    return JobsPageModule;
}());

//# sourceMappingURL=jobs-list.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_jobs_component__ = __webpack_require__(642);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__job_jobs_component__["a" /* JobsComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_angular2_moment__["MomentModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__job_jobs_component__["a" /* JobsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the JobComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], JobsComponent.prototype, "job", void 0);
    JobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jobs',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/job/jobs.component.html"*/'<!-- Generated template for the JobComponent component -->\n<ion-card>\n  <ion-card-header>\n    <ion-card-title color="primary">{{job.name}}</ion-card-title>\n    <p ion-text color="secondary">Created on {{job.creationDate | amDateFormat:\'DD/MM/YYYY\' }}</p>\n  </ion-card-header>\n  <ion-card-content>\n    <p ion-text>Mechanical drawings:</p>\n    <p ion-text>3D model:</p>\n    <p ion-text>Duct work:</p>\n    <br>\n    <ion-icon name="pin"></ion-icon> {{job.address}}\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/components/job/jobs.component.html"*/
        })
    ], JobsComponent);
    return JobsComponent;
}());

//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListPage; });
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



var JobsListPage = /** @class */ (function () {
    function JobsListPage(navCtrl, actionSheetCtrl, alertCtrl, job) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.job = job;
        this.job_list$ = this.job.getJobList().valueChanges();
    }
    JobsListPage.prototype.addJob = function () {
        this.navCtrl.push('JobCreationPage');
    };
    JobsListPage.prototype.selectJob = function (job) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + job.name,
            buttons: [
                {
                    text: 'Upload Mechanical Drawing',
                    icon: 'cloud-upload',
                    handler: function () {
                        //Send the user to the  TaskCreationPage and pass the key as a parameter
                        //this.navCtrl.push('TaskCreationPage', { jobID: job.$key });
                    }
                },
                {
                    text: 'Generate 3D Model',
                    icon: 'cube',
                    handler: function () {
                        //Send the user to the  TaskCreationPage and pass the key as a parameter
                        //this.navCtrl.push('TaskCreationPage', { jobID: job.$key });
                    }
                },
                {
                    text: 'Add Duct Work',
                    icon: 'add',
                    handler: function () {
                        //Send the user to the  TaskCreationPage and pass the key as a parameter
                        _this.navCtrl.push('DuctListPage', { jobID: job.key });
                    }
                },
                {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        //Send the user to the JobEditPage and pass the key as a parameter
                        _this.navCtrl.push('JobEditPage', { job: job });
                    }
                },
                {
                    text: 'Delete',
                    icon: 'trash',
                    role: 'destructive',
                    handler: function () {
                        console.log(job.key);
                        _this.alertCtrl.create({
                            title: 'Mate, are you serious?',
                            buttons: [
                                {
                                    text: 'No',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        //Delete the current ShoppingItem
                                        _this.job.removeJob(job);
                                    }
                                }
                            ]
                        }).present();
                    }
                },
                {
                    text: 'Cancel',
                    icon: 'undo',
                    role: 'cancel',
                    handler: function () {
                        console.log("The user has selected the cancel button");
                    }
                }
            ]
        }).present();
    };
    JobsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-jobs-list',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/jobs/jobs-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center> Jobs </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab padding bottom right>\n    <button color="primary" ion-fab (click)="addJob()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <!-- Add the card for each job from the firebase db -->\n  <jobs *ngFor="let job_item of job_list$ | async" [job]="job_item" (click)="selectJob(job_item)" padding></jobs>\n</ion-content>\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/jobs/jobs-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__models_services_firebase_service__["a" /* JobListService */]])
    ], JobsListPage);
    return JobsListPage;
}());

//# sourceMappingURL=jobs-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map