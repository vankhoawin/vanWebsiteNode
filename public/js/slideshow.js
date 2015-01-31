var pictureNum = 14;
var pictureCurr = 0;

function changePictureLeft() {
		if (pictureCurr == 0)
			pictureCurr = pictureNum - 1;
		else
			pictureCurr = pictureCurr - 1;
		document.body.style.backgroundImage = 'url(../static/back' + pictureCurr + '.jpg)';
	}

function changePictureRight() {
		pictureCurr = (pictureCurr+1) % pictureNum;
		document.body.style.backgroundImage = 'url(../static/back' + pictureCurr + '.jpg)';
	}
