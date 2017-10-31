// click nav-item
//if statement that chekc swhich button waws clicked
// remove hide class from corresponding button

//$('.nav-item').click(function() {
//	if ($(this).hasClass('apple-button')) {
//		$('.apple').removeClass('hide');	
//	} else if ($(this).hasClass('nike-button')) {
//		$('.nike').removeClass('hide');
//	}else if ($(this).hasClass('disney-button')) {
//		$('.disney').removeClass('hide');
//	} else {
//		$('.vogue').removeClass('hide');
//	}
//});


$('.nav-item').click (function(){
	var button_name = $(this).data('horse');
	alert(button_name);
});