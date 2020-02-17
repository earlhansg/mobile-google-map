import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('search', {static: false}) searchElementRef: ElementRef;
  latitude: number;
  longitude: number;
  zoom: number;
  private geoCoder;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private searchService: SearchService) {}
  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
        this.geoCoder = new google.maps.Geocoder();

        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ['address']
        });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            // get the place result
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            // verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            // set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
            this.searchService.sendLocation(this.latitude, this.longitude, this.zoom);
          });
        });
      });
  }

}
