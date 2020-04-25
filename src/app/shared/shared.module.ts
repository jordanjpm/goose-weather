import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxdModule } from '@ngxd/core';

// modules
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    NgxdModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
