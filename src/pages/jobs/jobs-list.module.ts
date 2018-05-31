import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsListPage } from './jobs-list';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    JobsListPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsListPage),
    ComponentsModule
  ],
  exports: [
    JobsListPage,
  ]
})
export class JobsPageModule {}
