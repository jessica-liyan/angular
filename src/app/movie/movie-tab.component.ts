import { Component, OnInit} from '@angular/core';
import {MdButtonModule} from '@angular/material';

@Component({
  selector: 'movie-tab',
  template: `
  <div class="midLayout">
    <div class="tabs">
      <a [routerLink]="['/movie/type',0]" routerLinkActive="active">正在热映</a>
      <a [routerLink]="['/movie/type',1]" routerLinkActive="active">即将上映</a>
    </div>
    <router-outlet></router-outlet>
  </div>
  `
})

export class MovieTabComponent implements OnInit{
  ngOnInit(){
    console.log()
  }
}




