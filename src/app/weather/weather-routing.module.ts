import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
