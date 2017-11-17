import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { DoubanService } from './../douban.service';
 
@Component({
  selector: 'movie-list',
  template: `
  <ul class="listBlock">
    <li *ngFor="let item of data" (click)="gotoDetail(item.id)">
      <i class="block img" *ngIf="item.images"><img src="{{item.images.small}}" class="h v-m"/></i>
      <b class="block fs-14 c-3 oneline mt-5">{{item.title}}</b>
      <span *ngIf="item.rating.average" class="block fs-14 c-9 mt-5">{{item.rating.average}}分</span>
      <span *ngIf="item.casts && item.casts.length" class="block fs-14 c-9 mt-5">{{getCasts(item)}}</span>
      <span *ngIf="item.year" class="block fs-14 c-9 mt-5">{{item.year}}年</span>
    </li>
  </ul>
  `
})

export class MovieListComponent{
  @Input() data;

  constructor(
    private DoubanService: DoubanService,
    private router: Router,
  ){} 

  getCasts(item){
    return item.casts.map((item,idx)=>item.name).join('/')
  }

  gotoDetail(id){
    this.router.navigate(["movie",id])
  }
}




