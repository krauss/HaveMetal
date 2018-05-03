import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

import { JobsComponent } from './job/jobs.component';
import { PopoverComponent } from './popover/popover';

@NgModule({
	declarations: [ JobsComponent ],
	imports: [ IonicModule, MomentModule ],
	exports: [ JobsComponent ]
})

export class ComponentsModule {}
