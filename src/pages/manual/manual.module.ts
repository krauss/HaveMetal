import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Manual } from './manual';

@NgModule({
  declarations: [
    Manual,
  ],
  imports: [
    IonicPageModule.forChild(Manual),
  ],
})
export class ManualModule {}
