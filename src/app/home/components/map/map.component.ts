import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  constructor() {}

  ngOnInit() {
    this.setCurrentLocation();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = 8.4817689;
        this.longitude = 124.6681274;
        this.zoom = 15;
      });
    }
  }
}
