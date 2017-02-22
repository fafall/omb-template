$(document).ready(function(){
      $('.menu-tab').click(function(){
        $('.menu-hide').toggleClass('show');
        $('.menu-tab').toggleClass('active');
      });

    $('.show-more').click(function(){
        $('.users-options').toggleClass('show');
    });

    //handle select all checkbox

    $("#all").change(function(){  //"select all" change 
        $(".choice input").prop('checked', $(this).prop("checked")); //change all ".choice input" checked status
        $(".choice input").parents('tr').addClass('actif');
      
      //if parent all is unchecked 
        if(false==$("#all").prop('checked')){
            $(".choice input").parents('tr').removeClass('actif');
        }

    }); //change checkbox

    //".choice input" change 
    $('.choice input').change(function(){ 
        //uncheck "select all", if one of the listed checkbox item is unchecked
        if(false == $(this).prop("checked")){ //if this item is unchecked
            $("#all").prop('checked', false); //change "select all" checked status to false
             $(this).parents('tr').removeClass('actif');
        }
        //check "select all" if all checkbox items are checked
        if ($('.choice input:checked').length == $('.choice input').length ){
            $("#all").prop('checked', true);
        }

        if(true == $(this).prop("checked")){ //if this item is checked
           $(this).parents('tr').addClass('actif');
        }
    }); //change function




    //** handle accordeon  change icone to be continued ....**//

    $('.card a' ).click(function() {
        $child1 = $(this).parents('.card-header').siblings('.collapse');
        /*console.log($child1);*/

        if($child1.hasClass('show')){
            $(this).parents('.card').removeClass('in'); 
             $(this).find('span').removeClass('fa-chevron-circle-up')
             .addClass('fa-chevron-circle-down');
        }
        else{
        
         $(this).parents('.card').addClass('in');
         $(this).find('span').removeClass('fa-chevron-circle-down')
         .addClass('fa-chevron-circle-up');
           
        }
        
        
    }); // click accordeon

    //handle close button file

    $('.file span.red').click(function(){
       $liste = $(this).parents('li').slideUp();

    });


    //handle done steps by adding a done class

 $checkedStep =$(".steps input");


  $checkedStep.each(function(){

     if(true == $(this).prop("checked")){ //if this item is unchecked
           
             $(this).prevAll('label').addClass('done');
        }



  });

    


}); //document ready