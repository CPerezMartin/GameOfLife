import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GolComponent } from './gol/gol.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularDocComponent } from './angular-doc/angular-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    GolComponent,
    AngularDocComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
