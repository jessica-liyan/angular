import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { DoubanService } from './../douban.service';
import {MovieListsComponent} from './movie-lists.component';
 
@Component({
  selector: 'movie-tab',
  template: `
  <div class="midLayout">
    <nav class="tabs">
      <a routerLink="/movie/intheater" routerLinkActive="active">正在热映</a>
      <a routerLink="/movie/coming" routerLinkActive="active">即将上映</a>
    </nav>
    <div *ngIf="type == 'intheater'">
      <movie-lists [data]="movieInComing.subjects"></movie-lists>
    </div>
    <div *ngIf="type == 'coming'">
      <movie-lists [data]="movieInComing.subjects"></movie-lists>
    </div>
  </div>
  `
})

export class MovieTabComponent implements OnInit{
  type: string;
  city = '武汉';
  movieInTheater = {};
  movieInComing = {};

  constructor(
    private DoubanService: DoubanService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ){} 
  
  ngOnInit():void{
    console.log(this.activatedRoute)
    // this.activatedRoute.params.subscribe(res => {
    //   console.log(res.type)
    //   this.type = res.type
    // })
    // this.DoubanService.getMovieInTheater(this.city).then((res)  => {
    //   console.log(res, typeof res)
    //   this.movieInTheater = res
    // })
    // this.DoubanService.getMovieInComing().then((res)  => {
    //   this.movieInComing = res
    // })
    // this.title.setTitle(this.type)
  }
}




