import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CurrentConditionsComponent } from '../cards/current-conditions/current-conditions.component';
import { WeatherDiscussionComponent } from '../cards/weather-discussion/weather-discussion.component';
import { WeeklyForecastComponent } from '../cards/weekly-forecast/weekly-forecast.component';
import { HourlyForecastComponent } from '../cards/hourly-forecast/hourly-forecast.component';
import { LocationData } from '../models/location-data/location-data';
import { Observable } from 'rxjs';
import * as USCities from '../../assets/us_cities.json';
import { City } from '../models/city/city';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as fromLocationActions from '../store/actions/location.actions';
import { selectLocationError } from '../store/selectors/location.selector';
import * as fromWeatherActions from '../store/actions/weather.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  locationError$: Observable<any>;
  locationData$: Observable<LocationData>;

  lat: string;
  long: string;
  cardsDesktop = [];
  cardsMobile = [];
  displayValues = false;
  spinnerColor = 'primary';
  spinnerSize = 8;
  citiesCtrl = new FormControl();
  filteredCities: Observable<City[]>;
  cities = [];
  selectedLocation = '';

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsMobile;
      } else {
        return this.cardsDesktop;
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {
    // desktop view
    this.cardsDesktop = [
      {
        title: 'Current Conditions',
        cols: 1,
        rows: 1,
        component: CurrentConditionsComponent
      },
      {
        title: 'Hourly Forecast',
        cols: 1,
        rows: 1,
        component: HourlyForecastComponent
      },
      {
        title: 'Weather Discussion',
        cols: 1,
        rows: 2,
        component: WeatherDiscussionComponent
      },
      {
        title: 'Weekly Forecast',
        cols: 2,
        rows: 1,
        component: WeeklyForecastComponent
      }
    ];

    // Mobile View
    this.cardsMobile = [
      {
        title: 'Current Conditions',
        cols: 3,
        rows: 1,
        component: CurrentConditionsComponent
      },
      {
        title: 'Hourly Forecast',
        cols: 3,
        rows: 1,
        component: HourlyForecastComponent
      },
      {
        title: 'Weather Discussion',
        cols: 3,
        rows: 2,
        component: WeatherDiscussionComponent
      },
      {
        title: 'Weekly Forecast',
        cols: 3,
        rows: 1,
        component: WeeklyForecastComponent
      }
    ];

    // push a value to the list of locations so the user can go back to where they started
    const homeCity: City = {
      capital: '',
      state: '',
      latitude: '',
      longitude: '',
      combinedName: '(your location)'
    };
    this.cities.push(homeCity);

    // read in file of US capital citys for selection
    // source https://gist.github.com/jpriebe/d62a45e29f24e843c974
    const citiesJSON = JSON.stringify(USCities);
    const parsedCities = JSON.parse(citiesJSON);
    parsedCities.default.forEach((parsedCity) => {
      const city: City = {
        capital: parsedCity.capital,
        state: parsedCity.abbr,
        latitude: parsedCity.lat,
        longitude: parsedCity.long,
        combinedName: parsedCity.capital + ', ' + parsedCity.abbr
      };
      this.cities.push(city);
    });

    this.filteredCities = this.citiesCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this._filterCities(city) : this.cities.slice())
      );
  }

  private _filterCities(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(city => city.capital.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
    this.locationError$ = this.store.pipe(select(selectLocationError));
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        this.savePosition(position);
      });
    } catch (error) {
      alert('Browser does not support location services');
    }
  }

  savePosition(position: Position) {
    const locationData: LocationData = new LocationData();
    locationData.latitude = position.coords.latitude.toFixed(4).toString();
    locationData.longitude = position.coords.longitude.toFixed(4).toString();
    for (const city of this.cities) {
      if (city.combinedName === '(your location)') {
        city.latitude = locationData.latitude;
        city.longitude = locationData.longitude;
      }
    }
    this.store.dispatch(fromLocationActions.loadLocationsSuccess({ data: locationData }));
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    for (const city of this.cities) {
      if (city.combinedName === event.option.value) {
        const latitude = parseFloat(city.latitude).toFixed(4).toString();
        const longitude = parseFloat(city.longitude).toFixed(4).toString();

        const locationData: LocationData = new LocationData();
        locationData.latitude = latitude;
        locationData.longitude = longitude;

        this.store.dispatch(fromWeatherActions.loadWeathersSuccess({ data: null }));
        this.store.dispatch(fromLocationActions.loadLocationsSuccess({ data: locationData }));
        break;
      }
    }
  }

}
