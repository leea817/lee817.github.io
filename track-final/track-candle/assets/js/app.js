$(document).ready(function(){
   $('.candle1').mouseenter(function(){
      $(this).addClass('hover');
	  $(this).addClass('show');
   });

   $('.candle1').mouseout(function(){
      $(this).removeClass('hover');
	  $(this).removeClass('show');
   });
});

