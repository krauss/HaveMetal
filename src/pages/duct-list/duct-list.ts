import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, reorderArray, ModalController } from 'ionic-angular';
import { Duct } from '../../models/interfaces/duct.interface';
import { DuctFactory } from '../../models/objects/factory';
import { DuctCreationComponent } from '../../components/duct-creation/duct-creation.modal';

/**
 * Generated class for the TaskCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duct-list',
  templateUrl: 'duct-list.html',
})
export class DuctListPage {

  duct_list: Array<Duct> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  addDuct(){
      let contactModal = this.modalCtrl.create(DuctCreationComponent);
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
  }

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

  deleteDuct(duct){

      let index = this.duct_list.indexOf(duct);

      if(index > -1){
          this.duct_list.splice(index, 1);
      }
  }

  reorderItems(indexes){
        this.duct_list = reorderArray(this.duct_list, indexes);
    }

}
