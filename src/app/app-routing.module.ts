import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { ProductDetailComponent } from './product/product-detail.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'product', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

 