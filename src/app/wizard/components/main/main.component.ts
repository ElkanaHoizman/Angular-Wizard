import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  detailsGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {}


}
