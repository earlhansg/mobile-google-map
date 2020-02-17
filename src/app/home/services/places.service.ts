import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PlacesService {
    private placesJsonUrl = 'http://localhost:4200/assets/places.json';

    constructor(private http: HttpClient) {}

    getPlaces(): Observable<any> {
        return this.http.get(this.placesJsonUrl);
    }
}
