import { Component, OnInit, Input } from '@angular/core';
import { getFileDataUrl } from 'public/function';

@Component({
  selector: 'app-img-cut-out',
  templateUrl: './img-cut-out.component.html',
  styleUrls: ['./img-cut-out.component.scss']
})
export class ImgCutOutComponent implements OnInit {
  @Input() img_element: any;

  reselecte_active: boolean = false;
  upload_img_max_width: number = 480;
  upload_img_max_height: number = 480 / 960 * 600;
  img_mini_width: number = 240;

  img_ratio: number;
  mid_width: number;
  mid_height: number;
  mid_left: number;
  mid_top: number;


  direction: string;
  slide_active: boolean = false;
  mouseX_save: number;
  mouseY_save: number;
  img_height: number;
  img_width: number;

  _alert ( data:any ) {
    alert ( data );
  }

 

  @Input() img_base64_str: string;

  constructor() { }

   getSize ( img:any ) {
    let img_width = img.width;
    let img_height = img.height;
    this.img_height = img.height;
    this.img_width = img.width;

    if ( img_height > this.upload_img_max_height ) {
      this.mid_height = this.upload_img_max_height;
      this.mid_left = 0;
      this.mid_width = this.upload_img_max_width

      this.direction = "V";
    }

    else {
      this.mid_height = img_height;


      this.direction = "H";

      this.mid_width = this.upload_img_max_width * ( img_height / this.upload_img_max_height );

      this.mid_left = ( this.upload_img_max_width - this.mid_width ) / 2;
      this.mid_top = 0;
    }

    this.img_ratio = this.img_mini_width / this.mid_width;
  }

  activeSlide ( e ) {
    this.mouseX_save = e.clientX;
    this.mouseY_save = e.clientY;

    this.slide_active = true;
  }

  openImg ( e:any ) {
    let input = e.target;
    let _self = this;

    if ( input.files && input.files[ 0 ] ) {
      getFileDataUrl ( input.files[ 0 ], function ( result ) {
        _self.img_base64_str = result;
      } )
    }
  }

  ngOnInit() {
    let _self = this;

    window.addEventListener ( "mousemove", function (e) {
      if ( !_self.slide_active ) { 
        return 
      }

      if ( _self.direction === "H" ) {
        var distance = e.clientX - _self.mouseX_save;

        _self.mid_left += distance;

        if ( _self.mid_left < 0 ) {
          _self.mid_left = 0;
        }
        else if ( _self.mid_left > _self.upload_img_max_width - _self.mid_width ) {
          _self.mid_left = _self.upload_img_max_width - _self.mid_width;
        }

      }
      else if ( _self.direction === "V" ) {
        var distance = e.clientY - _self.mouseY_save;

        _self.mid_top += distance;

        if ( _self.mid_top < 0 ) {
          _self.mid_top = 0;
        } 
        else if ( _self.mid_top > _self.upload_img_max_height - _self.mid_height ) {
          _self.mid_top = _self.upload_img_max_height - _self.mid_height;
        }
      }

      _self.mouseX_save = e.clientX;
      _self.mouseY_save = e.clientY;
      
    } );

    window.addEventListener ( "mouseup", function ( e ) {
      _self.mouseX_save = null;
      _self.mouseY_save = null;

      _self.slide_active = false;
    } )
  }

}
