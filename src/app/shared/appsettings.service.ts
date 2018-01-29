import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators/tap';


const SETTINGS_LOCATIONS = "assets/appsettings.json";
const SETTINGS_KEY = "configuration";
export class AppSettings {
    defaultPrice: number = 1;
    defaultUrl: string = 'http://www.gooogle.com';
}
@Injectable()
export class AppSettingsService {
    constructor(private http: HttpClient) {

    }

    getSettings(): Observable<AppSettings> {

        let settings = localStorage.getItem(SETTINGS_KEY);
        if (settings) {
            return of(JSON.parse(settings));

        }
        else {
            return this.http.get<AppSettings>(SETTINGS_LOCATIONS)
                .pipe(tap(settings => {
                    if (settings) {
                        this.saveSetting(settings);
                    }
                }),
                catchError(
                    this.handleError<AppSettings>("getSettings", new AppSettings())
                ));
        }


    }

    //Handle get ERRORe
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            switch (error.status) {
                case 404:
                    console.error(`Can't find file at: ${SETTINGS_LOCATIONS} `)
                    break;
                default:
                    console.error(error)
                    break;
            }
            return of(result as T);
        }
    }
    // Save Settings to locale storage

    saveSetting(settings: AppSettings) {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    }

    deleteSetting():void{
        localStorage.removeItem(SETTINGS_KEY);
    }
}