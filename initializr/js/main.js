$(function(){
            $('.passwordMatch').hide();
            $('#accordion').accordion({
                collapsible: true 
            });
           
        });
      
          var passMatch = function(){
                var pass1 = $('#password').val();
                var pass2 = $('#confirm_password').val();
                if(pass1===pass2){
                    return true;
                }
                else{
                    return false;
                }
             }    
$(function(){
                
                 $('.next_btn0').click(function(){
                    $.scrollTo('.travelerInfo', {duration:250});
                });
                   $('.next_btn1').click(function(){
                    $.scrollTo('.payment', {duration:250});
                });
                    $('.next_btn2').click(function(){
                    $.scrollTo('.confirmation', {duration:250});
                });
                    $('.next_btn3').click(function(){
                    $.scrollTo('.insurance', {duration:250});
                });
                     $('.next_btn4').click(function(){
                    $.scrollTo('.finish', {duration:250});
                });
                  $('.next_btn5').click(function(){
                    $.scrollTo('.finish2', {duration:250});
                });

            
                
            $('#booking').validate({
           
            invalidHandler: function(event, validator) {
             var errors = validator.numberOfInvalids();
                if (errors) {
                    $('#booking').effect('shake'); 
                }               
             },
            submitHandler: function() { $.scrollTo('.payment', {duration:500}); }
            });
            
            $('#payment').validate({
           
            invalidHandler: function(event, validator) {
             var errors = validator.numberOfInvalids();
                if (errors) {
                    $('#payment').effect('shake'); 
                }               
             },
            submitHandler: function() { $.scrollTo('.confirmation', {duration:500}); }
            });

            $('#confirmation').validate({
           
            invalidHandler: function(event, validator) {
             var errors = validator.numberOfInvalids();
           
                if (errors) {
                    $('#confirmation').effect('shake'); 
                }               
             },
            submitHandler: function() { 
                
                if(passMatch()){
                $.scrollTo('.insurance', {duration:500});
                $('.passwordMatch').hide();
                }

                else{
                    $('#confirmation').effect('shake'); 
                    $('.passwordMatch').show();
                }
            }
            });
            
              
              
              

            });

