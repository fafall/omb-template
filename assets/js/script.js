$(document).ready(function(){

	$heightContainer=$('#omb-ouverture-compte .omb-container').height();
	console.log($heightContainer);

	$('#omb-ouverture-compte .omb-left-menu').height($heightContainer);

});