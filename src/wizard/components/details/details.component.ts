import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import isIsraeliIdValid from 'israeli-id-validator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() stepper;
  @ViewChild('errorID', { static: true }) errorid: ElementRef;
  @ViewChild('errorPhone', { static: true }) errorPhone: ElementRef;
  @ViewChild('errorTelephone', { static: true }) errorTelephone: ElementRef;

  public user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {}
  sendDetails(): void {
    let id = this.idValid();
    let mobilePhone = this.phoneValid();
    let telephone = this.telephoneValid();
    let name = this.user.lastName;

    if (id && mobilePhone && telephone && name) {
      localStorage.setItem('details', JSON.stringify(this.user));
      this.stepper.selectedIndex = 1;
    }
  }

  // Id validation
  idValid(): boolean {
    let id = this.user.id;
    if (isIsraeliIdValid(id) === true) {
      this.errorid.nativeElement.innerHTML = '';
      return true;
    } else if (id != undefined) {
      this.errorid.nativeElement.innerHTML = 'Invalid identity number';
      return false;
    }
  }
  // Mobile Phone validation
  phoneValid(): boolean {
    let mobilePhone = this.user.phone;
    if (/^\d{10}$/.test(mobilePhone)) {
      this.errorPhone.nativeElement.innerHTML = '';
      return true;
    } else if (mobilePhone != undefined) {
      this.errorPhone.nativeElement.innerHTML = 'Invalid phone number';
      return false;
    }
  }

  // Telephone validation
  telephoneValid(): boolean {
    let telephone = this.user.telephone;
    let  regex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
    if (regex.test(telephone) || telephone === undefined || telephone === '' ) {
      this.errorTelephone.nativeElement.innerHTML = '';
      return true;
    } else if (telephone != undefined) {
      this.errorTelephone.nativeElement.innerHTML = 'Invalid telephone number';
      return false;
    }
  }
}
