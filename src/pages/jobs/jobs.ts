import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Job } from '../../models/interfaces/job.interface';

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {


    //jobs = {} as Job
    job_list: FirebaseListObservable<Job[]>
    jobs: Job[];

  constructor(private navCtrl: NavController, private database: AngularFireDatabase) {
    this.job_list = database.list('job-list');
  }

  addJob(): void{
    this.navCtrl.push('JobCreationPage');
  }

}
