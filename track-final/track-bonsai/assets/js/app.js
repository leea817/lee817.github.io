$(document).ready(function(){
   $('.box').mouseover(function(){
      $(this).addClass('hover');
   });
   $('.box').mouseout(function(){
      $(this).removeClass('hover');
   });
});
/*
$('.weather-bar').click(function(){
	$('.weather-bar').slideToggle();
});*/

$('.nav-item').click(function() {
	var button_name = $(this).data('button');
	$('.bonsaicontent').attr('class', 'bonsaicontent');
	// you do this to go in any order and get the color the buttons are assigned. it means, find content div, find class, you're trying to remove unnecessary classes after you click on one. column content changes to 
	$('.bonsaicontent').addClass(button_name);

	$('.nav-item').removeClass('active'); //so that it doesnt stay black once you click it aka active, this is looking at all items on the page. in fact, it is making an array. 
	$(this).addClass('active');

	if (button_name== 'icon1') {
		$('.bonsai1').show();
		$('.bonsai2').hide();
		$('.bonsai3').hide();
		$('.bonsai4').hide();
		$('.bonsai5').hide();
	}
	if (button_name== 'icon2') {
		$('.bonsai2').show();
		$('.bonsai1').hide();
		$('.bonsai3').hide();
		$('.bonsai4').hide();
		$('.bonsai5').hide();
	};
	if (button_name== 'icon3') {
		$('.bonsai3').show();
		$('.bonsai2').hide();
		$('.bonsai1').hide();
		$('.bonsai4').hide();
		$('.bonsai5').hide();
	}
	if (button_name== 'icon4') {
		$('.bonsai4').show();
		$('.bonsai2').hide();
		$('.bonsai3').hide();
		$('.bonsai1').hide();
		$('.bonsai5').hide();
	}
	if (button_name== 'icon5') {
		$('.bonsai5').show();
		$('.bonsai2').hide();
		$('.bonsai3').hide();
		$('.bonsai4').hide();
		$('.bonsai1').hide();
	}box


});



