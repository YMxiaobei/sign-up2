export function getFileDataUrl ( file, callback ) {
	var reader = new FileReader ();

	reader.onload = function () {
		if ( callback ) {
			callback ( reader.result );
		}
	}

	reader.readAsDataURL ( file );
}

export function getIndex ( item, arr ) {
	for ( var i = 0, len = arr.length; i < len; i++ ) {
		if ( arr[ i ] === item ) {
			return i;
		}
	}

	return false;
}

export function sToTimeStr ( second ) {
	var h = Math.floor ( second / 3600 );
	var m = Math.floor ( ( second % 3600 ) / 60 );
	var s = ( second % 3600 ) % 60;
	var hStr = h === 0 ? 0 + "0" : h + "";
	var mStr = m === 0 ? 0 + "0" : m + "";
	var sStr = s === 0 ? 0 + "0" : s + "";

	return hStr + ":" + mStr + ":" + sStr;
}