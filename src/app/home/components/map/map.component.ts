import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';

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

  private subscription: Subscription = new Subscription();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.subscription.add(
      this.searchService.accessLocation().subscribe(
        ({ latitude, longitude, zoom }) => {
          this.latitude = latitude;
          this.longitude = longitude;
          this.zoom = zoom;
        }
    ));
    this.subscription.add(
      this.searchService.accessSearchStatus().subscribe((status) => {
        this.viewList = status;
    }));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
