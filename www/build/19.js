webpackJsonp([19],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuctCreationPageModule", function() { return DuctCreationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duct_creation__ = __webpack_require__(577);
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
            __WEBPACK_IMPORTED_MODULE_2__duct_creation__["a" /* DuctCreationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duct_creation__["a" /* DuctCreationPage */]),
        ],
    })
], DuctCreationPageModule);

//# sourceMappingURL=duct-creation.module.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuctCreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__ = __webpack_require__(405);
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
var DuctCreationPage = (function () {
    function DuctCreationPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.type_list = __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__["b" /* TYPES */];
        this.size_list = __WEBPACK_IMPORTED_MODULE_2__models_interfaces_duct_properties__["a" /* SIZES */];
        this.duct_list = [];
    }
    DuctCreationPage.prototype.addDuct = function () {
        var contactModal = this.modalCtrl.create("ContactUs");
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
    DuctCreationPage.prototype.deleteDuct = function (duct) {
        var index = this.duct_list.indexOf(duct);
        if (index > -1) {
            this.duct_list.splice(index, 1);
        }
    };
    DuctCreationPage.prototype.reorderItems = function (indexes) {
        this.duct_list = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* reorderArray */])(this.duct_list, indexes);
    };
    return DuctCreationPage;
}());
DuctCreationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-duct-creation',
        templateUrl: 'duct-creation.html',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], DuctCreationPage);

//# sourceMappingURL=duct-creation.js.map

/***/ })

});
//# sourceMappingURL=19.js.map