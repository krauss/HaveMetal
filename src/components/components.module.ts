import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { JobsComponent } from './job/jobs.component';

@NgModule({
	declarations: [JobsComponent],
	imports: [ IonicModule ],
	exports: [JobsComponent]
})
export class ComponentsModule {}
