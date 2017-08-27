$(document).ready(function(){
	$('.bxslider').bxSlider({
		pager: false
	});
	$('.bxslider-2').bxSlider({
		pager: false
	});

	function heightDetect() {
		$(".main-s .bx-viewport, .bxslider li").css("height", $(window).height()-84);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});