import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class search {
clientID: string = 'PAST YOUR CLIENT ID';
baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';
constructor(private _http: Http) { }
search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }
}
// [app.module.ts]
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { AppComponent } from './app.component';
//import { SearchComponent } from './Search.component';
//import { Search } from './Search.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    //AppComponent,
    //SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  //providers: [Search],
  //bootstrap: [AppComponent]
})
export class AppModule { }