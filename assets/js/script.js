$(document).ready(function(){

	$heightContainer=$('.omb-internal .omb-container').height();
	console.log($heightContainer);

	$('.omb-internal .omb-left-menu').height($heightContainer);


    /** input trigger **/

    $('  #omb-login-page #omb-content .form-control').keypress(function(){
    	$(this).siblings('label').addClass('omb-move');

     });
    $('  #omb-login-page #omb-content .form-control').keydown(function(){
    	$(this).siblings('label').removeClass('omb-move');
    

     });
     $input =$('  #omb-login-page #omb-content .form-control').val();
     console.log($input);





});