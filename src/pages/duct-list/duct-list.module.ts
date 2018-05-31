import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DuctListPage } from './duct-list';

@NgModule({
  declarations: [
    DuctListPage,
  ],
  imports: [
    IonicPageModule.forChild(DuctListPage),
  ],
})
export class DuctCreationPageModule {}
