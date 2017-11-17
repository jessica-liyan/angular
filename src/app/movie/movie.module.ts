import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieTabComponent } from './movie-tab.component';
import { MovieListsComponent } from './movie-lists.component';

const routes: Routes = [{
  path: 'movie',
  component: MovieComponent,
  data: {title: '电影'},
  children: [{
    path: ':id',
    component: MovieDetailComponent,
    data: {title: '电影详情'}
  },{
    path: 'intheater',
    component: MovieTabComponent,
    data: {title: '正在热映'}
  },{
    path: 'coming',
    component: MovieTabComponent,
    data: {title: '即将上映'}
  }]
}]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieTabComponent,
    MovieListsComponent
  ]
})

export class MovieModule { }
