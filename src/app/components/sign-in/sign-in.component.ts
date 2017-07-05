import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  qrcode_mouseover: boolean = false;
  user_not_exit: boolean = false;
  pwd_error: boolean = false;
  no_username: boolean = false;
  varidation_fail: boolean = false;
  varidation_success: boolean = false;
  remenber_me: boolean = false;

  reset () {
    this.user_not_exit = false;
	this.no_username = false;
	this.pwd_error = false;
	this.remenber_me = false;
  }

  submit ( formData: NgForm ):void {
  	this.reset ();

  	if ( !formData.value.username ) {
  	  this.no_username=true;
  	  return; 
  	}
  	else if ( !formData.value.passwd ) {
  	  this.pwd_error=true;
  	  return;
  	}
  	else if ( !this.varidation_success ) {
  	  this.varidation_fail = true;
  	  return;
  	}
  	else {

  	}
  }

  constructor() { }

  ngOnInit() {
  }

}
