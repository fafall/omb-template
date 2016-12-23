$(document).ready(function(){

	$heightContainer=$('.omb-internal .omb-container').height();
	console.log($heightContainer);

	$('.omb-internal .omb-left-menu').height($heightContainer);

});