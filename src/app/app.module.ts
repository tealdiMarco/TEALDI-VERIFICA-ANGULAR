import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';//! PER FORMGROUP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentiComponent } from './studenti/studenti.component';
import { InserisciComponent } from './inserisci/inserisci.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    StudentiComponent,
    InserisciComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
