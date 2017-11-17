import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

import { MovieModule } from './movie/movie.module';
import { BookModule } from './book/book.module';

import { AppComponent } from './app.component';

import { DoubanService } from './douban.service';

const routes: Routes = [{
  path: '',
  redirectTo: '/movie',
  pathMatch: 'full'
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
    RouterModule.forRoot(routes,{
      enableTracing: false
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [DoubanService],
  bootstrap: [AppComponent]
})

export class AppModule { }
