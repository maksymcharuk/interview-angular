import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: 'dashboard',
      },
      {
        label: 'Interview templates',
        routerLink: 'interview-templates',
      },
      {
        label: 'Interviews',
        routerLink: 'interviews',
      },
      {
        label: 'Candidates',
        routerLink: 'candidates',
      },
      {
        label: 'Projects',
        routerLink: 'projects',
      },
    ];
  }
}
