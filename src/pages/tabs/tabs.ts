import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { JobsPage } from '../jobs/jobs';
import { ScannerPage } from '../scanner/scanner';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = JobsPage;
  tab3Root = ScannerPage;

  constructor() {

  }
}
