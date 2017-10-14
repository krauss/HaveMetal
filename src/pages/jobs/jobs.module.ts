import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsPage } from './jobs';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsPage),
    ComponentsModule
  ],
  exports: [
    JobsPage,
  ]
})
export class JobsPageModule {}
