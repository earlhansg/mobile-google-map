import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { PlacesStoreService } from '../../services/places-store.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  latitude: number;
  longitude: number;
  zoom: number;
  viewList: boolean;
  selectedMarker;

  private subscription: Subscription[] = [];

  constructor(private searchService: SearchService,
              private placeStoreService: PlacesStoreService) {}

  ngOnInit() {
    this.subscription.push(
      this.searchService.accessLocation().subscribe(
        ({ latitude, longitude, zoom }) => {
          this.latitude = latitude;
          this.longitude = longitude;
          this.zoom = zoom;
        }
    ));

    this.subscription.push(
      this.searchService.accessSearchStatus().subscribe((status) => {
        this.viewList = status;
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
