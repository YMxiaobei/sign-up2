interface Poster {
	width: number,
	height: number,
	left: number,
	top: number,
	src: string
}

export class VideoInfo {
	contribute_type: string;
	no_free_reprint: boolean;
	v_parent_type: string;
	v_sub_type: string;
	contribute_title: string;
	tags: string[];
	introduction: string;
	poster: Poster;
}
