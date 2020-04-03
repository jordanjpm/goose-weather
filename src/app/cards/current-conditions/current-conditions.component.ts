import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data/weather-data';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectWeatherData } from 'src/app/reducers';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  data$: Observable<WeatherData>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(select(selectWeatherData));
  }

}
