import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { HttpClientModule } from '@angular/common/http';
import { OneNewComponent } from './one-new/one-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    OneNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
