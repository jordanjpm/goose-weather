import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/weather/models/weather-data/weather-data';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectWeatherData } from 'src/app/weather/store/selectors/weather.selector';
import { WeatherFeatureState } from 'src/app/weather/store/reducers';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  data$: Observable<WeatherData>;

  constructor(private store: Store<WeatherFeatureState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeatherData));
  }

}
