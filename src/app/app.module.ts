import { SettingsComponent } from './settings/settings.component';
import { AppSettingsService } from './shared/appsettings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [
    AppComponent,ProductDetailComponent,SettingsComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,HttpClientModule
  ],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
