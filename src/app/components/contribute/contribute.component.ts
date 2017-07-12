import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  uploader: FileUploader = new FileUploader ( {
  	url: "http://localhost:3000/API/contribute/video",
  	method: "post"
  } );

  show: number = 1;
  progress: number = 0;

  video_size: number;
  video_title: string = "";

  constructor() { }

  onProgress (  progress ) {
    this.progress = progress;
  }

  uploadVideo () {
    let _self = this;

    this.video_size = this.uploader.queue[ 0 ].file.size;
    this.video_title = this.uploader.queue[ 0 ].file.name.split ( "." )[ 0 ];

    console.log ( this.video_title );

    this.uploader.queue[ 0 ].onProgress = function ( progress ) {
      _self.onProgress ( progress );
    };
  	this.uploader.queue[ 0 ].upload ();
    this.show = 2;
  }

  ngOnInit() {
  }

}
