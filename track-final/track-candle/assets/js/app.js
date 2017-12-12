$('.candle1').hover(function() {
  // mouseon
  $(this).addClass('hover');
  $(this).addClass('show');
  $('.fire, .sparks').addClass('show');

}, function() {
  // mouseout
  $(this).removeClass('hover');
  $(this).removeClass('show');
  $('.fire, .sparks').removeClass('show');
})