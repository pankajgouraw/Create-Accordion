$(document).ready(function(){
  $('.accHeader').click(function(){

  	$(".accBody").slideUp();
  	$(this).next().slideDown();

    $('.accHeader').find("i").removeClass("rotateArrow");
  	$(this).find("i").addClass("rotateArrow");

  })
});