import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import { DoubanService } from './douban.service';
 
@Component({
  selector: 'my-heroes',
  template: `
  <ul class="list">
    <li 
      *ngFor="let hero of heroes" 
      (click)="onSelect(hero)"
      [class.selected]="selectedHero == hero"
    >
      <span>{{hero.id}}:{{hero.name}}</span>
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}}is my hero</h2>
    <button (click)="gotoDetail()">查看详情</button>
  </div>
  `
})

// 创建公共属性，以供绑定
export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private DoubanService: DoubanService,
    private router: Router,
  ){} 

  getHeroes():void{
    this.DoubanService.getHeroes().then(res => this.heroes= res)
  }
  
  ngOnInit():void{
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}




