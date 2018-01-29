import { Product } from './product';
import { AppSettings, AppSettingsService } from './../shared/appsettings.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    constructor(private appSettingsService:AppSettingsService) { }

    product:Product;
    settings:AppSettings;
    ngOnInit() { 

        this.appSettingsService.getSettings()
        .subscribe(settings=>this.settings=settings,
            ()=>null,
        ()=>{
            this.product=new Product();
            this.product.price=this.settings.defaultPrice;
            this.product.url=this.settings.defaultUrl;
        })
    }

    saveProduct():void{
        
    }
}