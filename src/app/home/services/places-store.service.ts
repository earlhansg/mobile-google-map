import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

import { Place } from '../models/place.model';
import { PlacesService } from './places.service';

@Injectable({
    providedIn: 'root'
})

export class PlacesStoreService {

    constructor(private placesService: PlacesService ) {
        this.fetchAll();
    }

    // tslint:disable-next-line:variable-name
    private readonly _places = new BehaviorSubject<Place[]>([]);

    readonly places$ = this._places.asObservable();

    get places(): Place[] {
        return this._places.getValue();
    }

    set places(val: Place[]) {
        this._places.next(val);
    }

    async fetchAll() {
        this.places = await this.placesService.getPlaces().toPromise();
    }
}
