import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatPaginatorModule } from '@angular/material/paginator';
import { SearcherComponent } from './searcher/searcher.component';
import { HomeComponent } from './pages/home/home.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { PressureGaugesComponent } from './pages/pressure-gauges/pressure-gauges.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearcherComponent,
    HomeComponent,
    AllProductsComponent,
    NavbarComponent,
    PressureGaugesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatPaginatorModule,
    BreadcrumbModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
