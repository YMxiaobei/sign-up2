import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  slideway_lone: number = 260;
  
  slide_left: number = 0;
  plu_left: number = 0;
  plu_top: number = 0;
  embed_left: number = 0;
  embed_top: number = 0;

  mouseX_save: number;
  mouseY_save: number;

  slide_active: boolean = false;
  plu_in: boolean = false;
  img_show: boolean = false;
  slide_lock: boolean = false;
  tip_show: boolean = true; 
  
  @Input() tip_unpass_show: boolean = false;
  @Output() success: EventEmitter<boolean> = new EventEmitter ();
  pass: string = "unknow";

  constructor() { }

  onSlideMouseDown ( event: any ): void {
  	this.mouseX_save = event.clientX;
  	this.slide_active = true;
  }

  onSlideMouseout () {
  	if ( !this.slide_active ) {
  	  this.img_show = false;
  	}
  }

  generateEmbed () {
  	this.embed_left = 262 / 2 + Math.floor ( ( 262 / 2 - 40 ) * Math.random () );
  	this.plu_top = this.embed_top = Math.floor ( ( 117 - 40 ) * Math.random () );
  }

  reset () {
  	this.slide_left = 0;
	this.plu_left = 0;
	this.plu_top = 0;
	this.embed_left = 0;
	this.embed_top = 0;
	this.pass = "unknow";
	this.slide_lock = false;
	this.tip_show = true;

	this.generateEmbed (); 
  }

  ngOnInit() {
  	this.generateEmbed ();

    let _self = this;

  	window.addEventListener ( 'mousemove', function ( e ) {
      if ( !_self.slide_active || _self.slide_lock ) { return };

  	  let x = e.clientX;

  	  _self.slide_left = x - _self.mouseX_save;
  	  console.log ( _self.slide_left );

  	  if ( _self.slide_left < 0 ) { _self.slide_left = 0 }
  	  else if ( _self.slide_left > _self.slideway_lone - 38 ) { _self.slide_left = _self.slideway_lone - 38 };

  	  _self.plu_left = _self.slide_left;

  	  if ( Math.abs ( _self.plu_left - _self.embed_left ) < 3 ) {
  	  	_self.plu_in = true;
  	  }
  	  else {
  	  	_self.plu_in = false;
  	  }
  	} );

  	window.addEventListener ( 'mouseup', function ( e ) {
  	  if ( !_self.slide_active ) { return };

  	  if( Math.abs ( _self.plu_left - _self.embed_left ) < 3 ) {
  	    _self.pass = 'success';
  	    _self.img_show = false;
  	    _self.success.emit ( true );

  	  }
  	  else {
  	  	_self.pass = 'fail';
  	  	_self.success.emit ( false );
  	  }
  	  _self.slide_active = false;
  	  _self.slide_lock = true;
      _self.tip_show = false;
  	} )

  }

}
