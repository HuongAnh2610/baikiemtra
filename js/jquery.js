$(document).ready(function() {
	$('.content').slideUp();

	$('.header h3').on('click', function(event) {
		event.preventDefault();
		$(this).next().slideToggle();

		$('html, body').animate({scrollTop:$(this).offset().top},400); 
	});
});