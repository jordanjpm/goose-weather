import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// weather store
import { reducers, weatherFeatureKey } from './reducers';
import { WeatherEffects } from './effects/weather.effects';

// services
import { WeatherService } from '../services/weather.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(weatherFeatureKey, reducers),
    EffectsModule.forFeature([WeatherEffects])
  ],
  providers: [WeatherService]
})
export class WeatherStoreModule { }
