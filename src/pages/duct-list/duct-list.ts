import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Duct } from '../../models/interfaces/duct.interface';


@IonicPage()
@Component({
  selector: 'page-duct-list',
  templateUrl: 'duct-list.html',
})
export class DuctListPage {

  duct_list: Array<Duct> = [];
  job_key: any;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

      this.job_key = this.navParams.get('job_key');

  }

  
  addDuctList(){
    this.navCtrl.push('AddDuctPage', { job_key: this.job_key });
  }

}
