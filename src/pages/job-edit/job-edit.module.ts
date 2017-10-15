import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobEditPage } from './job-edit';

@NgModule({
  declarations: [
    JobEditPage,
  ],
  imports: [
    IonicPageModule.forChild(JobEditPage),
  ],
})
export class JobEditPageModule {}
