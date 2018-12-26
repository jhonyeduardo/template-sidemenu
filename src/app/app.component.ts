import { Component } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sidemenu';

  readonly menus: Array<ThfMenuItem> = [
    { label: 'Ínicio', link: '/home' },
    { label: 'Usuários', link: '/users' },
  ];
}
