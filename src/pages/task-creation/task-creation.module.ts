import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskCreationPage } from './task-creation';

@NgModule({
  declarations: [
    TaskCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskCreationPage),
  ],
})
export class TaskCreationPageModule {}
