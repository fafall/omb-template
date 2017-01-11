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

    /* $input =$('  #omb-login-page #omb-content .form-control').val();
     console.log($input);*/



/** affichage details virement **/

   var clique = 0;
$('.omb-liste-virement .omb-btn').click(function(){

   //$(this).parents('.omb-content-list').siblings('.omb-detail').addClass('omb-collapse');
    if(clique % 2 == 0){

      //console.log(clique);
      $(this).parents('.omb-content-list').siblings('.omb-detail').addClass('omb-collapse');
   /* $(this).parents('.omb-content-list').siblings('.omb-detail').slideDown(1000);*/
      $(this).html('<span class="fa fa-minus fa-lg"></span>');
   }
   else
   {
    $(this).parents('.omb-content-list').siblings('.omb-detail').removeClass('omb-collapse');
    /* $(this).parents('.omb-content-list').siblings('.omb-detail').slideUp(1000)*/
      $(this).html('<span class="fa fa-plus fa-lg"></span>');
     //console.log(clique);
   }
    clique++;
});

/*$('.omb-liste-virement .omb-btn').click(function(){
   var $this=$(this).parents('.omb-content-list').siblings('.omb-detail').addClass('omb-collapse');$(this);        
   if($this.is(':hidden'))
    {
      $this.show('');
    }else{
      $this.hide('');
    }
 });
*/


  /*   if($(this).parents('.omb-content-list').siblings('.omb-detail :visible')){
        console.log('visible');
        $(this).parents('.omb-content-list').siblings('.omb-detail').removeClass('omb-collapse');
     }
     else{
        console.log('hide');
        $(this).parents('.omb-content-list').siblings('.omb-detail').addClass('omb-collapse');

     }
}
*/
 

});