import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TYPES }  from '../../models/interfaces/duct.properties';
import { DuctFactory }  from '../../models/objects/factory';
import { Job } from '../../models/interfaces/job.interface';
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
  _DUCT: any;
  job_key: string;
  tmp_job: any;
  qty: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, private job_list: JobListService) {
    
    this.job_key = this.navParams.get('job_key');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDuctPage');
  }

  selectDuctType($event) {
    if ($event) {
      //Remove the previously created duct
      if (this._DUCT != undefined){
        this._DUCT = undefined;
      }
      //Creates the new duct selected on the <ion-select> using DuctFactory class
      this._DUCT = DuctFactory.createDuct($event);
      //Calls its method draw() that does the WebGL creation and rendering
      //this._DUCT.draw();
      //Adds the duct in the scene
      //this._SCENE.add( this._DUCT._mesh );
    }
  }

  addDuct(){

    this.tmp_job = this.job_list.getJob(this.job_key);
    
  }



}
