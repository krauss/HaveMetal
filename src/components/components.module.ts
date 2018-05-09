import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

import { JobsComponent } from './job/jobs.component';

@NgModule({
	declarations: [ JobsComponent ],
	imports: [ IonicModule, MomentModule ],
	exports: [ JobsComponent ]
})

export class ComponentsModule {}
