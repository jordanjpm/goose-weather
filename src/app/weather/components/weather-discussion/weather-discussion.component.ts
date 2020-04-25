import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/weather/models/weather-data/weather-data';
import { WeatherFeatureState } from 'src/app/weather/store/reducers';
import { selectWeatherData } from 'src/app/weather/store/selectors/weather.selector';

@Component({
  selector: 'app-weather-discussion',
  templateUrl: './weather-discussion.component.html',
  styleUrls: ['./weather-discussion.component.css']
})
export class WeatherDiscussionComponent implements OnInit {

  data$: Observable<WeatherData>;

  constructor(private store: Store<WeatherFeatureState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeatherData));
  }

}
