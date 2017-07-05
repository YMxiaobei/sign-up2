import { Component, OnInit } from '@angular/core';
import { getVTypes } from '../../data/v-types';
import { NgForm } from '@angular/forms';

let mockTags = [ "蜘蛛侠", "蜘蛛", "燃向", "动画", "AMV", "火影忍者", "蝙蝠侠", "热血", "自制", "新人向", "MAD", "Fate", "海贼王", "变形金刚" ];

@Component({
  selector: 'app-contribute-info',
  templateUrl: './contribute-info.component.html',
  styleUrls: ['./contribute-info.component.scss']
})
export class ContributeInfoComponent implements OnInit {
  v_title: string = '《蜘蛛侠》演示';
  upload_status: string = '暂停上传';
  progress_percentage: number = 0;

  selected_v_type: string = "动画";
  selected_v_sub_type: string = "MAD·AMV";
  max_title_size: number = 80;
  max_v_Introduction_size: number = 250;
  v_Introduction: string ="";
  recommend_tags: any = mockTags;
  addable_tags_remain: number = 10;

  v_types: any = getVTypes();

  constructor() { }

  ngOnInit() {
  }

}
