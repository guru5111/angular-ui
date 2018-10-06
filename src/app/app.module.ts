import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppComponentService} from './app.component.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
