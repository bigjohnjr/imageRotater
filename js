$(function() {
		setInterval("rotateImages()", 3000);
	});

function rotateImages() {
	var oCurPhoto = $("#linkedin-rotate div.current");
	
	var oNxtPhoto = oCurPhoto.next();
	if (oNxtPhoto.length == 0)
		oNxtPhoto = $("#linkedin-rotate div:first");

		oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({opacity: 0}).addClass('current').animate({opacity: 1.0}, 1000, function() {
						oCurPhoto.removeClass('previous');
					});
	}
