import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

// Firebase imports
import { JobListService } from '../../models/services/firebase.service';
import { Job } from '../../models/interfaces/job.interface';

/**
 * Generated class for the JobCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-creation',
  templateUrl: 'job-creation.html',
})

export class JobCreationPage {

  date: string = new Date().toISOString();
  job: Job = {
    name: '',
    address: '',
    creationDate: this.date
  }
  toast: ToastController

  constructor(private navCtrl: NavController, private job_list: JobListService, private _toast: ToastController) {
    this.toast = _toast;
  }


  //Function that add new Job
  addNewJob(job: Job){

    this.job_list.addJob(this.job).then(ref => {

      //Receives the key back from the database and updates the same object with that very key
      this.job.key = ref.key;
      this.job_list.editJob(this.job);

      this.toast.create({
        message: 'Job created successfully!',
        duration: 1200,
        position: 'bottom'
      }).present().then(() => {
  
          //Reset our job
          this.job = {} as Job;
  
          // Navigate the user back to the Job List
          //this.navCtrl.setRoot('JobsListPage', { key: ref.key })
          this.navCtrl.pop();
      })
    });   
    
  }

}