import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

// Firebase imports
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { JobListService } from '../../models/services/firebase.service';
import { Job } from '../../models/interfaces/job.interface';
import { Observable } from 'rxjs/Observable';

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
  job = {} as Job
  toast: ToastController

  constructor(private navCtrl: NavController, private job_list: JobListService, private _toast: ToastController) {
    this.toast = _toast;
  }


  //Function that add new Job
  addNewJob(job: Job){

    this.job_list.addItem({
      //TODO get the next available id from the Firebase db
      //_id: this.job.id,
      name: this.job.name,
      address: this.job.address,
      creationDate: this.date
    });
    

    this.toast.create({
      message: 'Job created successfully!',
      duration: 1200,
      position: 'bottom'
    }).present().then(() => {

        //Reset our job
        this.job = {} as Job;

        // Navigate the user back to the Job List
        this.navCtrl.pop();
    })
  }

}
