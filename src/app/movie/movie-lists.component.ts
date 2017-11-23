import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import {DoubanService } from './../douban.service';
 
@Component({
  selector: 'movie-lists',
  template: `
  <ul class="listLine">
    <li *ngFor="let item of data" (click)="gotoDetail(item.id)" class="row w wrapper">
      <i class="col v-t pr-20 img" *ngIf="item.images"><img src="{{item.images.small}}" class="w v-m"/></i>
      <i class="col v-t">
        <b class="block fs-14 c-3 oneline mt-5">{{item.title}}</b>
        <span *ngIf="item.rating.average" class="block fs-14 c-9 mt-5">{{item.rating.average}}分</span>
        <span *ngIf="item.casts && item.casts.length" class="block fs-14 c-9 mt-5">{{getCasts(item)}}</span>
        <span *ngIf="item.year" class="block fs-14 c-9 mt-5">{{item.year}}年</span>
      </i>
    </li>
  </ul>
  <a (click)="more()" class="btn">显示更多</a>
  `
})

export class MovieListsComponent implements OnInit,OnChanges{
  data = [];
  city = '武汉';
  id: number;
  n: number;
  index: number = 0;
  count: number = 2;

  constructor(
    private DoubanService: DoubanService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ){} 

  ngOnInit(){
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .switchMap(() => this.activatedRoute.params)
      .subscribe(res => {
        this.id = +res;
        this.index = 0;
        this.data = [];
        console.log('获取数据')
        this.fetch()
      })
    this.activatedRoute.paramMap
      .switchMap(params => params.get('id'))
      .subscribe(res => {
        this.id = +res;
        this.index = 0;
        this.data = [];
        this.fetch()
        console.log(this.id, this.index, this.data)
      })
  }

  ngOnChanges(changes){
    console.log(changes)
  }

  fetch(){
    switch(this.id){
      case 0:
      this.DoubanService.getMovieInTheater(this.city,this.index*this.count, this.count).subscribe((res)  => {
        console.log('fetch',res)
        this.n = Math.ceil(res["total"]/res["count"])
        this.data = this.data.concat(res["subjects"])
      })
      break;
      case 1:
      this.DoubanService.getMovieInComing(this.index*this.count, this.count).subscribe((res)  => {
        console.log('fetch',res)
        this.n = Math.ceil(res["total"]/res["count"])
        this.data = this.data.concat(res["subjects"])
      })
      break;
    }
  }

  more(){
    if(this.index < this.n -1){
      this.index++
      this.fetch()
    }else{
      alert('没有更多了！')
    }
  }

  getCasts(item){
    return item.casts.map((item,idx)=>item.name).join('/')
  }

  gotoDetail(id){
    this.router.navigate(["movie",id])
  }
}




