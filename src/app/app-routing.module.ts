import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { HomeComponent } from './pages/home/home.component';
import { PressureGaugesComponent } from './pages/pressure-gauges/pressure-gauges.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { 
    path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' },
    children: [ 
      { 
        path: 'all-products', component: AllProductsComponent, data: { breadcrumb: 'All Products' },
        children: [ 
          { 
            path: 'pressure-gauges', component: PressureGaugesComponent, data: { breadcrumb: 'Pressure Gauges' } 
          }, 
        ],
      }, 
    ], 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
