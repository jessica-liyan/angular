import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { ManageMovieComponent } from './manage-movie.component';
import { ManageBookComponent } from './manage-book.component';

import {AuthGuard} from '../auth-guard.service'

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {title: '管理'},
    children: [
      {
        path: '',
        children: [{
          path: 'movie',
          component: ManageMovieComponent,
          data: {title: '管理电影'}
        },{
          path: 'book',
          component: ManageBookComponent,
          data: {title: '管理图书'}
        }]
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent,
    ManageMovieComponent,
    ManageBookComponent
  ]
})

export class AdminModule { }
