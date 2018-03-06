import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { WeatherService } from './shared/remote/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ContactComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
