import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { JobsComponent } from './job/jobs.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
	declarations: [JobsComponent],
	imports: [ IonicModule, MomentModule ],
	exports: [JobsComponent]
})
export class ComponentsModule {}
