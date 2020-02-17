import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private location = new Subject();

    sendLocation(latitude, longitude, zoom) {
        this.location.next({ latitude, longitude, zoom });
    }
    accessLocation() {
        return this.location.asObservable();
    }
}
