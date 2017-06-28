import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

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
