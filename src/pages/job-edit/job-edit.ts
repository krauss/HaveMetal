import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Job } from '../../models/interfaces/job.interface';
import { JobListService } from '../../models/services/firebase.service'

@IonicPage()
@Component({
  selector: 'page-job-edit',
  templateUrl: 'job-edit.html',
})
export class JobEditPage {

  job = {} as Job;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toast: ToastController,
    private job_list: JobListService ) {

      this.job = this.navParams.get('job');
  }


  updateJob(job: Job){
    //Update Item
    this.job_list.editJob(job);

    this.toast.create({
      message: 'Job updated successfully!',
      duration: 1500,
      position: 'bottom'
    }).present().then(() => {
        // Navigate the user back to the Job List
        this.navCtrl.pop();
    });
  }

}
