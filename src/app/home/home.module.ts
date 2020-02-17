import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './containers/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ],
  declarations: [HomePage, HeaderComponent, SearchComponent, MapComponent]
})
export class HomePageModule {}
