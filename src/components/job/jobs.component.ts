import { Component, Input } from '@angular/core';
import { Job } from '../../models/interfaces/job.interface';



/**
 * Generated class for the JobComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jobs',
  templateUrl: 'jobs.component.html'
})
export class JobsComponent {


  @Input() job: Job;

}
