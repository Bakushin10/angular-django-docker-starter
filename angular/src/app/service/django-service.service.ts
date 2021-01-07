import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class DjangoService {

    constructor(private http: HttpClient) { }

    getDataFromDjango() {
        console.log("calling api..")
        const url = environment.apiBase + "data/"
        return this.http.get(url);
    }
}