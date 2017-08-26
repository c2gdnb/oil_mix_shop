$(document).ready(function(){
	$('.bxslider').bxSlider({
		pager: false
	});

	function heightDetect() {
		$(".bx-viewport, .bxslider li").css("height", $(window).height()-84);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});