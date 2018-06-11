import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DuctListPage } from './duct-list';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    DuctListPage
  ],
  imports: [
    IonicPageModule.forChild(DuctListPage),
    ComponentsModule
  ],
  exports:[
    DuctListPage
  ]
})
export class DuctCreationPageModule {}
