import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RequestModule } from './request/request.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RequestModule,
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
