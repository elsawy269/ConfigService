import { AppSettingsService, AppSettings } from './../shared/appsettings.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'settings',
    templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {
    constructor(private appsettSRV: AppSettingsService) { }

    settings: AppSettings;
    ngOnInit() {
        this.appsettSRV.getSettings().subscribe(settings =>
            this.settings = settings
        )
    }
    saveSettings(): void {
        this.appsettSRV.saveSetting(this.settings);
    }

    deleteSetting():void{
        this.appsettSRV.deleteSetting();
    }
}