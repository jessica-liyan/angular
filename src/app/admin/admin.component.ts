import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div>
    <a class="btn" routerLink="./movie" routerLinkActive="active">管理电影</a>
    <a class="btn" routerLink="./book" routerLinkActive="active">管理图书</a>
    <router-outlet></router-outlet>
  </div>
  `
})

export class AdminComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
