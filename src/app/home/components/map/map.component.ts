import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  latitude: number;
  longitude: number;
  zoom: number;
  subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
      this.subscription = this.searchService.accessLocation().subscribe(
          ({ latitude, longitude, zoom }) => {
              this.latitude = latitude;
              this.longitude = longitude;
              this.zoom = zoom;
          }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
