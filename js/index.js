$( document ).ready(function() {

$('.menu').click(function(){
	//show nav
	$('nav').slideToggle();
	});
$('button').click(function(){
	alert('Thanks for your submission!');
});

	$("input").on('blur', function(){
		var element = $(this);
		if(element.val()){
			$(element).addClass('filled');
		}	else {
			$(element).removeClass('filled');
		}
	});
});
