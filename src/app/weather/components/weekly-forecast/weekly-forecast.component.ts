import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/weather/models/weather-data/weather-data';
import { WeatherFeatureState } from 'src/app/weather/store/reducers';
import { selectWeatherData } from 'src/app/weather/store/selectors/weather.selector';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.css']
})
export class WeeklyForecastComponent implements OnInit {

  data$: Observable<WeatherData>;

  constructor(private store: Store<WeatherFeatureState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeatherData));
  }

}
