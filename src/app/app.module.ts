import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

import { MovieModule } from './movie/movie.module';
import { BookModule } from './book/book.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { DoubanService } from './douban.service';
import { AuthGuard } from './auth-guard.service';
import 'hammerjs';

import {MdButtonModule} from '@angular/material';
import { ElModule} from 'element-angular';

const routes: Routes = [{
  path: '',
  redirectTo: '/movie',
  pathMatch: 'full'
},{
  path: 'login',
  component: LoginComponent,
  outlet: 'popup'
},{
  path: '**',
  component: PageNotFoundComponent,
}]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MovieModule,
    BookModule,
    AdminModule,
    MdButtonModule, 
    ElModule.forRoot(),
    RouterModule.forRoot(routes,{
      enableTracing: false
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [DoubanService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
