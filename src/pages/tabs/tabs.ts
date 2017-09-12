import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { Manual } from '../manual/manual';
import { Design } from '../design/design';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Manual;
  tab2Root = Design;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
