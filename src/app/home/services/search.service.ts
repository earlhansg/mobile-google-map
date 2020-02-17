import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private location = new Subject();
    private searchValue = new BehaviorSubject(false);

    sendLocation(latitude, longitude, zoom) {
        this.location.next({ latitude, longitude, zoom });
    }
    accessLocation() {
        return this.location.asObservable();
    }
    searchStatus(status: boolean) {
        this.searchValue.next(status);
    }
    accessSearchStatus() {
        return this.searchValue.asObservable();
    }

}
