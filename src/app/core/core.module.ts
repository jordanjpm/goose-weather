import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
