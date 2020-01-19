import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatRippleModule, MatAutocompleteModule } from '@angular/material';
import { DetailsComponent } from './components/details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { GoodsComponent } from './components/goods/goods.component';
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './components/summary/summary.component';


@NgModule({
  declarations: [MainComponent, DetailsComponent, GoodsComponent, SummaryComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRippleModule,
    MatAutocompleteModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MainComponent]
})
export class WizardModule {}
