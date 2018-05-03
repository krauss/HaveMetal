import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SamplesPage } from './samples';


//import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SamplesPage,
  ],
  imports: [
    IonicPageModule.forChild(SamplesPage),
    //ComponentsModule
  ],
  exports: [
    SamplesPage,
  ]
})
export class SamplesPageModule {}
