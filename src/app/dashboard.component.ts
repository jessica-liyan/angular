import { Component } from '@angular/core';
import {Hero} from './hero';
import { DoubanService } from './douban.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>我的仪表盘</h3>
    <div class="list">
      <a 
        *ngFor="let hero of heroes" 
        [routerLink]="['/detail', hero.id]"
      >
        <span>{{hero.id}}:{{hero.name}}</span>
      </a>
    </div>
  `
})

export class DashboardComponent {
  heroes: Hero[];
  
  constructor(private DoubanService: DoubanService) { }

  ngOnInit(): void {
    this.DoubanService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}