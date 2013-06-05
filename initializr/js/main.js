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

        var removeHighlight = function(x){
        var i = -1;
        while (i < 5){
            i++;
            
            console.log('next_btn'+i);

            if (i === x) { 
            $('.next_btn'+i).addClass('highlight');
            }
            else{
                $('.next_btn'+i).removeClass('highlight');
            }
        }
       

    }
$(function(){

                

                $(window).scroll(function(){
                    var pos = window.scrollY;
               

                if(pos < 200){
                    removeHighlight(0);
                }

                if ((pos > 600) && (pos < 1300)) {
                    removeHighlight(1);
                }

                if ((pos > 1400) && (pos < 2100)) {
                    removeHighlight(2);
                }
                if ((pos > 2300) && (pos < 3400)) {
                    removeHighlight(3);
                }
                if (pos > 3500) {
                    removeHighlight(4);
                }
                });
                
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


             $('#insurance').validate({
           
            invalidHandler: function(event, validator) {
             var errors = validator.numberOfInvalids();
           
                if (errors) {
                    $('#insurance').effect('shake'); 
                }               
             },
            submitHandler: function() { 
                
              
                $.scrollTo('.finish', {duration:500});

            
            }
            });


              $('#finish').validate({
           
            invalidHandler: function(event, validator) {
             var errors = validator.numberOfInvalids();
           
                if (errors) {
                    $('#finish').effect('shake'); 
                }               
             },
            submitHandler: function() { 
                
               
                $.scrollTo('.finish2', {duration:500});
               
                

            }
            });
              
              
              

            });

