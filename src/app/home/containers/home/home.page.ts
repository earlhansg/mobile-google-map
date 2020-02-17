import { Component, OnInit } from '@angular/core';

import { PlacesService } from '../../services/places.service';
import { PlacesStoreService } from '../../services/places-store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private placesService: PlacesService,
              private placeStoreService: PlacesStoreService) {}

  ngOnInit() {
    // this.placesService.getPlaces().subscribe(
    //   (data) => {
    //     // const list = data.data.listPlacesString2;
    //     // console.log(JSON.parse(list));
    //     console.log(data);
    //   }
    // );
  }

}
