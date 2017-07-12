import { Component, OnInit, Input } from '@angular/core';
import { getVTypes } from '../../data/v-types';
import { NgForm } from '@angular/forms';
import { getFileDataUrl } from 'public/function';
import { VideoInfo } from 'app/classes/video-info';
import { getIndex, sToTimeStr } from 'public/function';

let mockTags = [ "蜘蛛侠", "蜘蛛", "燃向", "动画", "AMV", "火影忍者", "蝙蝠侠", "热血", "自制", "新人向", "MAD", "Fate", "海贼王", "变形金刚" ];

@Component({
  selector: 'app-contribute-info',
  templateUrl: './contribute-info.component.html',
  styleUrls: ['./contribute-info.component.scss']
})
export class ContributeInfoComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() video_size: number;
  @Input() video_title: string;

  progress_save: number = 0;

  upload_rate: number = 0;
  unit: string = "k";
  remain_time: string = "00:00:00";
  upload_status: string = '上传中';
  img_info: any;


  upload_data: VideoInfo = new VideoInfo ();
  
  selected_v_sub_type: string = "MAD·AMV";
  max_title_size: number = 80;
  max_v_Introduction_size: number = 250;
  v_Introduction: string ="";
  recommend_tags: any = mockTags;
  addable_tags_remain: number = 10;
  img_base64_str: string;
  img_cut_out_show: boolean = false;
  _getIndex = getIndex;
  custom_tags: string[] = [];
  active_v_type: number;
  selected_v_type: number;

  v_types: any = getVTypes();

  constructor() { }

  getTitle () {
    this.upload_data.contribute_title = this.video_title;
    return true;
  } 

  getSubType ( v_sub_type: string, index ): any {
    if ( index === this.selected_v_type ) {
      return v_sub_type;
    }
    else {
      return "";
    }
  }

  onkeydown ( e: any, newTag: string ) {
    if ( !newTag ) {
      return;
    }

    if ( e.keyCode == 13 ) {
      if ( this.addable_tags_remain === 0 ) {
        alert ( "最多能添加10个标签" );
        return;
      }

      let index = getIndex ( newTag, this.custom_tags );

      if ( index !== false ) {
        alert ( "自定义标签不能重复" );
        return;
      }

      this.custom_tags.push ( newTag );
      this.addTag ( newTag );

    }

  }

  _alert ( data: any ) {
    alert ( data );
  }

  addTag ( tag: string ) {
    var index = getIndex ( tag, this.upload_data.tags );

    if ( index===false ) {
      if ( this.addable_tags_remain === 0 ) { 
        return;
      }

      this.upload_data.tags.push ( tag );

      this.addable_tags_remain -= 1;

    }
    else {
      this.upload_data.tags.splice ( index, 1 );

      this.addable_tags_remain += 1;
    }

  } 

  rmTag ( tag ) {
    var index = getIndex ( tag, this.custom_tags );

    if ( typeof index === "number" ) {
      this.custom_tags.splice ( index, 1 );
    }

    this.addTag ( tag );
  }

  openImg ( e:any ) {
    let input = e.target;
    let _self = this;

    if ( input.files && input.files[ 0 ] ) {
      getFileDataUrl ( input.files[ 0 ], function ( result ) {
        _self.img_base64_str = result;
        _self.img_cut_out_show = true;
      } )
    }
  }

  submit () {
    console.log ( this.upload_data );
  }

  ngOnInit() {
    let _self = this;

    this.upload_data.contribute_title = this.video_title;
    this.upload_data.tags = [];
    this.upload_data.introduction = "";

    setInterval ( function () {
      let rate = _self.video_size * _self.progress / 100 - _self.video_size * _self.progress_save / 100;
      let remain_time;


      if ( rate > 0 ) {
        remain_time = _self.video_size * ( 100 - _self.progress ) / 100 / rate;
      }
      else {
        remain_time = 0;
      }
      
      if ( rate > 1024000 ) {
        _self.upload_rate = rate / 1024000;
        _self.unit = "m"
      }
      else if ( rate < 1000 ) {
        _self.unit = "b"
      }
      else {
        _self.upload_rate = Math.round ( rate / 1000 );
        _self.unit = "k"
      }

      _self.remain_time = sToTimeStr ( remain_time );
      console.log ( _self.remain_time );
    }, 1000 )
  }

}
