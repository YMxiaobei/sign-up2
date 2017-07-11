export function getFileDataUrl ( file, callback ) {
	var reader = new FileReader ();

	reader.onload = function () {
		if ( callback ) {
			callback ( reader.result );
		}
	}

	reader.readAsDataURL ( file );
}