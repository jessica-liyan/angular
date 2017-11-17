import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
    data: {title: '图书'},
    // children: [{
    //   path: ':id',
    //   component: BookDetailComponent,
    //   data: {title: '图书详情'}
    // }]
  },
  {
    path: 'book/:id',
    component: BookDetailComponent,
    data: {title: '图书详情'}
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BookComponent,
    BookDetailComponent
  ]
})

export class BookModule { }
