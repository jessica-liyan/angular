import { Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { DoubanService } from './../douban.service';
import {MovieListComponent} from './movie-list.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'movie',
  template: `
  <h2>正在热映<a class="more" routerLink="/movie/intheater">更多>></a></h2>
  <movie-list #list [data]="movieInComing.subjects"></movie-list>
  <h2>即将上映<a class="more" routerLink="/movie/coming">更多>></a></h2>
  <movie-list [data]="movieInComing.subjects"></movie-list>
  <router-outlet></router-outlet>
  `
})

export class MovieComponent implements OnInit{
  city : string = '武汉';
  movieInTheater = {};
  movieInComing = {};

  constructor(
    private DoubanService: DoubanService,
    private router: Router
  ){} 
  
  ngOnInit():void{
    this.DoubanService.getMovieInComing().then((res)  => {
      console.log(res)
      this.movieInComing = res
    })
  }

  getCasts(item){
    return item.casts.map((item,idx)=>item.name).join('/')
  }
}




