import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GolComponent } from './gol/gol.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularDocComponent } from './angular-doc/angular-doc.component';

const routes: Routes = [
   { path: '', component: GolComponent },
   { path: 'gol', component: GolComponent },
   { path: 'angular-documentation', component: AngularDocComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
