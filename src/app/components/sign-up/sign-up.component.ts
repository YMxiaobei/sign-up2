import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

log ( data: any ):void {
  	console.log( data );
  }

  constructor ( private service: AppService ) {};

  postUserInfo ( data: any ):void {
  	let json = JSON.stringify ( data );

  	this.service
  		  .postUserInfo ( json )
  		  .then ( response => console.log ( response ) ); 
  }	

  ngOnInit() {
  }

}
