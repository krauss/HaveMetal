import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Job } from '../../models/interfaces/job.interface';


@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {


  job_list: FirebaseListObservable<Job[]>

  constructor(private navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
    this.job_list = database.list('job-list');
  }

  addJob(): void{
    this.navCtrl.push('JobCreationPage');
  }

  selectJob(job: Job){
    this.actionSheetCtrl.create({
      title: `${job.name}`,
      buttons: [
        {
          text: 'Upload Mechanical Drawing',
          icon: 'cloud-upload',
          handler: () => {
            //Send the user to the  TaskCreationPage and pass the key as a parameter
            //this.navCtrl.push('TaskCreationPage', { jobID: job.$key });
          }
        },
        {
          text: 'Generate 3D Model',
          icon: 'cube',
          handler: () => {
            //Send the user to the  TaskCreationPage and pass the key as a parameter
            //this.navCtrl.push('TaskCreationPage', { jobID: job.$key });
          }
        },
        {
          text: 'Add Duct Work',
          icon: 'add',
          handler: () => {
            //Send the user to the  TaskCreationPage and pass the key as a parameter
            this.navCtrl.push('TaskCreationPage', { jobID: job.$key });
          }
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            //Send the user to the JobEditPage and pass the key as a parameter
            this.navCtrl.push('JobEditPage', { jobID: job.$key });
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {

            this.alertCtrl.create({
              title: 'Are you serious mate?',
              //message: 'Are you f*cking serius?',
              buttons: [
                {
                  text: 'No',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Yes',
                  handler: () => {
                    console.log('Agree clicked');
                    //Delete the current ShoppingItem
                    this.job_list.remove(job.$key);
                  }
                }
              ]
            }).present();

          }
        },
        {
          text: 'Cancel',
          icon: 'undo',
          role: 'cancel',
          handler: () => {
            console.log("The user has selected the cancel button");
          }
        }
      ]
    }).present();
  }

}
