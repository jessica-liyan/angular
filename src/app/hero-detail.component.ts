import { Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Hero} from './hero';
import { DoubanService } from './douban.service';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}}</h2>
    <input type="text" placeholder="请输入用户名" [(ngModel)]="hero.name">
    <button class="btn" (click)="goBack()">返回</button>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

// 选定的hero是通过获取路由路径中的id参数，并在heroes数组中查询到的
export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private DoubanService: DoubanService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit():void{
    this.route.paramMap.switchMap((params) => this.DoubanService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero)
  }

  goBack():void{
    this.location.back()
  }
}






