import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TYPES }  from '../../models/interfaces/duct.properties';
import { Duct }  from '../../models/interfaces/duct.interface';
import { DuctFactory }  from '../../models/objects/factory';
import { ToastController } from 'ionic-angular';
import { JobListService } from '../../models/services/firebase.service';

/**
 * Generated class for the AddDuctPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-duct',
  templateUrl: 'add-duct.html',
})
export class AddDuctPage {


  type_list = TYPES;
  type: any;
  job_key: string;
  tmp_job: any;
  qty: number;
  toast: ToastController;


  constructor(public navCtrl: NavController, public navParams: NavParams, private job_list: JobListService, private _toast: ToastController) {
    
    this.job_key = this.navParams.get('job_key');

    this.toast = _toast;
  }

  addDuct(t: string){

    this.tmp_job = this.job_list.getJob(this.job_key).valueChanges();

    this.tmp_job.ductList = new Array<Duct>(this.qty);
    

    for (var i = 0; i < this.qty; i++){
      
      this.tmp_job.ductList[i] = DuctFactory.createDuct(t);

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

  }

  cancel(){
    this.navCtrl.pop();
  }


}
