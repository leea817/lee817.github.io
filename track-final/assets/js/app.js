$(document).ready(function(){
   $('.box').mouseover(function(){
      $(this).addClass('hover');
   });
   $('.box').mouseout(function(){
      $(this).removeClass('hover');
   });
});
