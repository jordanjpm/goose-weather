import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { WeatherComponent } from './weather.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { WeatherDiscussionComponent } from './components/weather-discussion/weather-discussion.component';
import { WeeklyForecastComponent } from './components/weekly-forecast/weekly-forecast.component';

// modules
import { SharedModule } from '../shared/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherStoreModule } from './store/weather-store.module';

@NgModule({
  declarations: [
    CurrentConditionsComponent,
    HourlyForecastComponent,
    WeatherComponent,
    WeatherDiscussionComponent,
    WeeklyForecastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule,
    WeatherStoreModule
  ]
})
export class WeatherModule { }
