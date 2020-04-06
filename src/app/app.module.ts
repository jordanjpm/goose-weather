import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxdModule } from '@ngxd/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { CurrentConditionsComponent } from './cards/current-conditions/current-conditions.component';
import { HourlyForecastComponent } from './cards/hourly-forecast/hourly-forecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDiscussionComponent } from './cards/weather-discussion/weather-discussion.component';
import { WeeklyForecastComponent } from './cards/weekly-forecast/weekly-forecast.component';

import { reducers, metaReducers } from './store/reducers';
import { WeatherEffects } from './store/effects/weather.effects';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CurrentConditionsComponent,
    HourlyForecastComponent,
    PageNotFoundComponent,
    WeatherComponent,
    WeatherDiscussionComponent,
    WeeklyForecastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxdModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        // strictStateSerializability: true,
        // strictActionSerializability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([WeatherEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
