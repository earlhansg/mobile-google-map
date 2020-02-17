import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { Place } from '../models/place.model';


@Injectable({
    providedIn: 'root'
})

export class PlacesService {
    private placesJsonUrl = 'http://localhost:4200/assets/places.json';

    constructor(private http: HttpClient) {}

    getPlaces(): Observable<Place[]> {
        return this.http.get(this.placesJsonUrl).pipe(
            pluck('data', 'listPlacesString2'),
            map((places: string) => JSON.parse(places))
        );
    }
}
