import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobCreationPage } from './job-creation';

@NgModule({
  declarations: [
    JobCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(JobCreationPage),
  ],
  exports: [
    JobCreationPage,
  ]
})
export class JobCreationPageModule {}
