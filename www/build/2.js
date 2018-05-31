webpackJsonp([2],{

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuctCreationPageModule", function() { return DuctCreationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duct_list__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DuctCreationPageModule = (function () {
    function DuctCreationPageModule() {
    }
    return DuctCreationPageModule;
}());
DuctCreationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__duct_list__["a" /* DuctListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duct_list__["a" /* DuctListPage */]),
        ],
    })
], DuctCreationPageModule);

//# sourceMappingURL=duct-list.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_duct_creation_duct_creation_modal__ = __webpack_require__(575);
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
var DuctListPage = (function () {
    function DuctListPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.duct_list = [];
    }
    DuctListPage.prototype.addDuct = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_duct_creation_duct_creation_modal__["a" /* DuctCreationComponent */]);
        contactModal.present();
        // let prompt = this.alertCtrl.create({
        //     title: 'New Duct',
        //     inputs: [{
        //         name: 'title'
        //     }],
        //     buttons: [
        //         {
        //             text: 'Cancel'
        //         },
        //         {
        //             text: 'Add',
        //             handler: data => {
        //                 this.duct_list.push(data);
        //             }
        //         }
        //     ]
        // });
        //
        // prompt.present();
    };
    // editDuct(duct){
    //
    //     let prompt = this.alertCtrl.create({
    //         title: 'Edit Duct',
    //         inputs: [{
    //             name: 'title'
    //         }],
    //         buttons: [
    //             {
    //                 text: 'Cancel'
    //             },
    //             {
    //                 text: 'Save',
    //                 handler: data => {
    //                     let index = this.duct_list.indexOf(duct);
    //
    //                     if(index > -1){
    //                       this.duct_list[index] = data;
    //                     }
    //                 }
    //             }
    //         ]
    //     });
    //
    //     prompt.present();
    //
    // }
    DuctListPage.prototype.deleteDuct = function (duct) {
        var index = this.duct_list.indexOf(duct);
        if (index > -1) {
            this.duct_list.splice(index, 1);
        }
    };
    DuctListPage.prototype.reorderItems = function (indexes) {
        this.duct_list = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* reorderArray */])(this.duct_list, indexes);
    };
    return DuctListPage;
}());
DuctListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-duct-list',template:/*ion-inline-start:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/duct-list/duct-list.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Duct List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addDuct()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list padding reorder="true" (ionItemReorder)="reorderItems($event)">\n\n        <ion-item-sliding *ngFor="let duct of duct_list; let i = index;">\n\n            <ion-item>{{i+1}}- {{duct.title}}</ion-item>\n\n            <ion-item-options>\n                <button ion-button icon-only (click)="editDuct(duct)" color="p_light">\n                    <ion-icon name="paper"></ion-icon>\n                </button>\n                <button ion-button icon-only (click)="deleteDuct(duct)" color="danger">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <div padding>\n      <button ion-button hidden block color="s_light" (click)="addTask()">Save List</button>\n    </div>\n\n</ion-content>\n\n<!-- <ion-content padding>\n\n  <ion-col align-self-start>\n    <ion-row nowrap padding>\n      <ion-list>\n        <ion-item padding>\n          <ion-label>Type:</ion-label>\n          <ion-select [(ngModel)]="type">\n            <ion-option *ngFor="let type of type_list">{{type}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item padding>\n          <ion-label>Size:</ion-label>\n          <ion-select [(ngModel)]="height">\n            <ion-option *ngFor="let size of size_list">{{size}}</ion-option>\n          </ion-select>\n          <ion-select [(ngModel)]="width">\n            <ion-option *ngFor="let size of size_list">{{size}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Quantity:</ion-label>\n          <ion-input type="number" [(ngModel)]="quantity"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Insulated</ion-label>\n          <ion-checkbox color="dark" checked="false"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fire Rated</ion-label>\n          <ion-checkbox color="dark" checked="false"></ion-checkbox>\n        </ion-item>\n\n      </ion-list>\n      <ion-img width="170" height="170" src="/img/offset.png"></ion-img>\n    </ion-row>\n  </ion-col>\n\n\n\n</ion-content> -->\n'/*ion-inline-end:"/home/jrkrauss/workspaces/ionic/havemetal/src/pages/duct-list/duct-list.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _c || Object])
], DuctListPage);

var _a, _b, _c;
//# sourceMappingURL=duct-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map