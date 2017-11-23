import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import {Heroes} from './mock-heroes';

@Injectable()
export class DoubanService{
  base_Url = 'https://api.douban.com/v2/';

  constructor(
    private http:  HttpClient
  ){}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Heroes)
  }
  getHero(id: number): Promise<Hero>{
    return this.getHeroes().then(res => res.find(hero => hero.id === id));
  }
  // 搜索图书
  searchBook(q:string, start = 0, count = 20) {
    let url = `${this.base_Url}book/search?q=${q}&start=${start}&count=${count}`
    return this.http.jsonp(url,'callback')
  }
  // 图书详情
  getBookDetail(id){
    let url = `${this.base_Url}book/${id}`
    return this.http.jsonp(url,'callback')
  }
  // 电影正在热映
  getMovieInTheater(city, start = 0, count = 20){
    let url = `${this.base_Url}movie/in_theaters?city=${city}&start=${start}&count=${count}`
    return this.http.jsonp(url,'callback')
  }
  // 即将上线
  getMovieInComing(start = 0, count = 20){
    let url = `${this.base_Url}movie/coming_soon?start=${start}&count=${count}`
    return this.http.jsonp(url,'callback')
  }
  // 电影详情
  getMovieDetail(id){
    let url = `${this.base_Url}movie/${id}`
    return this.http.jsonp(url,'callback')
  }

}
