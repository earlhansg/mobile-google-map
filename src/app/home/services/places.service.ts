import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Place } from '../models/place.model';


@Injectable({
    providedIn: 'root'
})

export class PlacesService {
    private placesJsonUrl = 'http://localhost:4200/assets/places.json';

    constructor(private http: HttpClient) {}

    getPlaces(): Observable<Place[]> {
        return this.http.get(this.placesJsonUrl).pipe(
            map((list) => {
                return JSON.parse(list.data.listPlacesString2);
            })
        );
    }
}
