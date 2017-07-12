import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

let mockData = {
	name: "动画",
	sub_types: [
		{
			name: "MAD·AMV",
			tip: "具有一定创作度的动/静画二次创作视频"
		},
		{
			name: "MMD·3D",
			tip: "使用MMD和其他3D软件制作的视频"
		},
		{
			name: "综合",
			tip: "以动画及相关内容为素材的创作"
		},
		{
			name: "短片·手书·配音",
			tip: "颇具特色的短片/手书及ACG相关配音"
		}
	]
}

@Component({
  selector: 'app-classify-v-type',
  templateUrl: './classify-v-type.component.html',
  styleUrls: ['./classify-v-type.component.scss']
})
export class ClassifyVTypeComponent implements OnInit {

  @Input() data: any;
  @Output() selectedType: EventEmitter<any> = new EventEmitter ()

  @Input() selected: string;
  
  @Input() sub_show: boolean = false;

  onSelected ( type_name:string ): void {
  	let _self = this;

  	let type = {
  	  parent_type: _self.data.name,
  	  sub_type: _self.selected
  	}

  	this.selectedType.emit ( type );
  }

  constructor() { }

  ngOnInit() {
  }

}
