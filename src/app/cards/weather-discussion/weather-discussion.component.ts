import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data/weather-data';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectWeatherData } from 'src/app/reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-discussion',
  templateUrl: './weather-discussion.component.html',
  styleUrls: ['./weather-discussion.component.css']
})
export class WeatherDiscussionComponent implements OnInit {

  data$: Observable<WeatherData>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeatherData)).pipe(map(state => state.weatherData));
  }

}
