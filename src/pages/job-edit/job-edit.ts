import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

import { Job } from '../../models/interfaces/job.interface';

/**
 * Generated class for the JobEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-edit',
  templateUrl: 'job-edit.html',
})
export class JobEditPage {

  jobSubscription: Subscription;
  jobRef: AngularFireObject<Job>;
  job = {} as Job;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private toast: ToastController) {

      const jobID = this.navParams.get('jobID');
      console.log(jobID);

      this.jobRef = this.db.object(`job-list/${jobID}`);

      //Subscribe the object and assign the result to this
      this.jobSubscription = this.jobRef.valueChanges().subscribe(job => this.job = job);
  }


  updateJob(job: Job){
    //Update Item
    this.jobRef.update(job);

    this.toast.create({
      message: 'Job updated successfully!',
      duration: 1500,
      position: 'bottom'
    }).present().then(() => {
        // Navigate the user back to the Job List
        this.navCtrl.pop();
    });
  }

  ionViewWillLeave(){
    this.jobSubscription.unsubscribe();
  }

}
