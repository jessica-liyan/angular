import { rxSubscriber } from 'rxjs/symbol/rxSubscriber';
import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="app">
    <nav class="nav">
      <a class="btn" routerLink="/book" routerLinkActive="active">图书</a>
      <a class="btn" routerLink="/movie" routerLinkActive="active">电影</a>
    </nav>
    <div class="main"><router-outlet></router-outlet></div>
  </div>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(){
    // this.router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .map(res => console.log(res))
  }
}
