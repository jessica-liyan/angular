import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DoubanService } from './../douban.service';

@Component({
  selector: 'movie-detail',
  template: `
    <a (click)="goBack()" class="btn"><img src="../assets/image/back1.png" class="v-m"/><span class="fs-14 c-f v-m ml-10">返回</span></a>
    <div class="midLayout" *ngIf="movie">
      <h2>{{movie.title}}</h2>
      <div class="wrapper">
        <div class="row w">
          <div class="col v-t pr-15" style="width:200px;">
            <img src="{{movie.image}}"/>
          </div>
          <div class="col v-t fs-14 c-3 lh-20">
            <p *ngIf="movie.attrs.director">导演：<i class="c-9">{{movie.attrs.director.join('/')}}</i></p>
            <p *ngIf="movie.attrs.writer">编剧：<i class="c-9">{{movie.attrs.writer.join('/')}}</i></p>
            <p *ngIf="movie.attrs.cast">主演：<i class="c-9">{{movie.attrs.cast.join('/')}}</i></p>
            <p *ngIf="movie.attrs.movie_type">类型：<i class="c-9">{{movie.attrs.movie_type.join('/')}}</i></p>
            <p *ngIf="movie.attrs.alt_title">又名：<i class="c-9">{{movie.attrs.alt_title}}</i></p>
            <p *ngIf="movie.attrs.country">国家/地区：<i class="c-9">{{movie.attrs.country.join('/')}}</i></p>
            <p *ngIf="movie.attrs.language">语言：<i class="c-9">{{movie.attrs.language.join('/')}}</i></p>
            <p *ngIf="movie.attrs.pubdate">上映时间：<i class="c-9">{{movie.attrs.pubdate.join('/')}}</i></p>
            <p *ngIf="movie.attrs.movie_duration">片长：<i class="c-9">{{movie.attrs.movie_duration}}</i></p>
          </div>
        </div>
        <h3 class="fs-16 c-3 mt-20 mb-10">内容简介</h3>
        <p class="fs-14 c-6 lh-20" *ngIf="movie.summary">{{movie.summary}}</p>
        <p class="fs-14 c-6 lh-20" *ngIf="!movie.summary">暂无简介</p>
      </div>
    </div>
  `
})

export class MovieDetailComponent implements OnInit{
  movie : object = {
    attrs: {
      director: []
    }
  };
  constructor(
    private DoubanService: DoubanService,
    private router: Router,
    private activatedRoute :ActivatedRoute,
    private location: Location
  ){} 

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.DoubanService.getMovieDetail(params.id).then(res => {
        console.log(res)
        this.movie = res
      })
    })
  }

  goBack(){
    this.location.back()
  }
}




