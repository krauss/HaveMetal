import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDuctPage } from './add-duct';

@NgModule({
  declarations: [
    AddDuctPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDuctPage),
  ],
})
export class AddDuctPageModule {}
