import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { DoubanService } from './../douban.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
 
@Component({
  selector: 'book',
  template: `
  <div class="mt-10 mb-10">
    <input #book (keyup.enter)="search()" [(ngModel)]="keyword" class="input"/>
    <a class="btn" (click)="search(keyword)">搜索</a>
  </div>
  <ul class="listBlock">
    <li *ngFor='let book of bookList' (click)="gotoDetail(book.id)" [class.selected]="selectedId == book.id">
      <i class="block img"><img src="{{book.image}}" class="v-m"/></i>
      <b class="block fs-14 c-3 oneline">{{book.title}}</b>
      <i class="block fs-14 c-9 mt-5">
        <span *ngIf="book.rating.average">{{book.rating.average}}分</span>
        <span *ngIf="book.author.length">/ {{book.author[0]}}</span>
      </i>
      <i class="block fs-14 c-9 mt-5">
        <span *ngIf="book.publisher">{{book.publisher}}</span>
        <span *ngIf="book.pubdate">/ {{book.pubdate}}</span> 
      </i>
      <i class="block fs-16 c-blue mt-5">
        <span *ngIf="book.price">{{book.price}}</span>
      </i>
    </li>
  </ul>
  <div class="pages">
    <span class="fs-14 c-9 v-m">{{index + 1}}/{{n}}页</span>
    <a (click)="home()">首页</a>
    <a (click)="prev()">上一页</a>
    <a (click)="next()">下一页</a>
    <a (click)="end()">末页</a>
  </div>
  `
})

export class BookComponent implements OnInit{
  bookList = [];
  keyword: string= 'js'; // 默认搜索项
  total: number; // 总条数
  index: number; // 当前页数
  count: number = 20; // 每页条数
  n: number; // 总页数

  selectedId: number;

  constructor(
    private DoubanService: DoubanService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){} 
  
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params => {
      this.index = +params.get('page')
      this.selectedId = +params.get('id')
      this.search()
      console.log(this.selectedId)
    })
  }

  search(){
    console.log(this.keyword)
    this.DoubanService.searchBook(this.keyword, this.index*this.count, this.count)
      .subscribe(res => {
        console.log(res)
        this.bookList = res["books"];
        this.total = res["total"];
        this.n = Math.ceil(this.total/this.count)
      })
  }

  prev(){
    this.index = this.index > 0 ? this.index - 1 : 0;
    this.search()
  }
  next(){
    this.index = this.index < this.n -1 ? this.index + 1 : this.n - 1;
    this.search()
  }
  home(){
    this.index = 0
    this.search()
  }
  end(){
    this.index = this.n - 1
    this.search()
  }
  gotoDetail(id){
    this.router.navigate(["/book", id, {page: this.index}])
  }
}




