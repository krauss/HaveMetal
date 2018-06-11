import { Component, Input } from '@angular/core';
import { Segment } from '../../models/objects/segment';

/**
 * Generated class for the SegmentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'segment',
  templateUrl: 'segment.component.html'
})
export class SegmentComponent {

  @Input() segment: Segment;

}
