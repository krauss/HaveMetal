import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Design } from './design';

@NgModule({
  declarations: [
    Design,
  ],
  imports: [
    IonicPageModule.forChild(Design),
  ],
})
export class DesignModule {}
