$(document).ready(function(){
        //funcionalidad del ojito de contraseña
        $('#show-hide-passwd').on('click',function(e){
            e.preventDefault();
      
            var current=$(this).attr('action');
                    
            if(current=='hide'){
                $(this).prev().attr('type','text');
                $(this).removeClass('glyphicon glyphicon-eye-open').addClass('glyphicon glyphicon-eye-close').attr('action','show');
            }
    
            if(current=='show'){
                 $(this).prev().attr('type','password');
                 $(this).removeClass('glyphicon glyphicon-eye-close').addClass('glyphicon glyphicon-eye-open').attr('action','hide');
            }
          });

          if(window.location.href.indexOf('preguntas')>-1){
            //acordeon  
            $("#acordeon").accordion();
          }
});

