$('.entryboxes').click(function() {
	var button_name = $(this).data('button');
	$('.C').attr('class','sequence');
	$('.C').addClass(button_name);


	$('.entryboxes').removeClass('active');
	$(this).addClass('active');



		if (button_name== 'pink1') {
		$('.sequence1').removeClass('hide');
		$('.sequence2').addClass('hide');
		$('.sequence3').addClass('hide');
		$('.sequence4').addClass('hide');
		$('.sequence5').addClass('hide');
	}
		if (button_name== 'pink2') {
		$('.sequence2').removeClass('hide');
		$('.sequence1').addClass('hide');
		$('.sequence3').addClass('hide');
		$('.sequence4').addClass('hide');
		$('.sequence5').addClass('hide');
	}
	if (button_name== 'pink3') {
		$('.sequence3').removeClass('hide');
		$('.sequence2').addClass('hide');
		$('.sequence1').addClass('hide');
		$('.sequence4').addClass('hide');
		$('.sequence5').addClass('hide');
	}
	if (button_name== 'pink4') {
		$('.sequence4').removeClass('hide');
		$('.sequence2').addClass('hide');
		$('.sequence3').addClass('hide');
		$('.sequence1').addClass('hide');
		$('.sequence5').addClass('hide');
	}
	if (button_name== 'pink5') {
		$('.sequence5').removeClass('hide');
		$('.sequence2').addClass('hide');
		$('.sequence3').addClass('hide');
		$('.sequence4').addClass('hide');
		$('.sequence1').addClass('hide');
	}

});

$('.entryboxes').click(function() {
	var button_name = $(this).data('button');
	$('.C').attr('class','sequence');
	$('.poem').addClass('hide');

	});


$('.keys').click(function(){
	var img         = $(this).data('img');
	var class_name  = $(this).data('classname');
	var img_to_show = '<div class ="'+ class_name +' logo"> <img src="assets/img/' + img +'" /> </div>';

	$('.poementry').append(img_to_show);

	$('.keys').removeClass('active');
	$(this).addClass('active');


});

