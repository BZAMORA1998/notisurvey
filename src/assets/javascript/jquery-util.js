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

          if(window.location.href.indexOf('diseno-encuesta')>-1){
            
            $('#btn_enviarfile').on('change',function (e){
               if($(this).val()!=""){
                var url=URL.createObjectURL(e.target.files[0]);
                $("#txt-enviarfile").css("display","none");
                $("#btn_enviarfile").css("display","none");
                $("#btn_eliminarfile").css("display","block");
                $("#img_logo").attr("src",url);
                $("#img_logo").css("display","block");
                $("#txt_value").text(e.target.files[0].name);
                $("#txt_value").css("display","block");
               }
            });

            $('#btn_eliminarfile').on('click',function (){
                $("#btn_enviarfile").val("");
                $("#txt-enviarfile").css("display","block");
                $("#btn_enviarfile").css("display","block");
                $("#btn_eliminarfile").css("display","none");
                $("#img_logo").css("display","none");
                $("#txt_value").css("display","none");
           });

            //datepicker
            $("#fecha-inicio").datepicker();
            $("#fecha-fin").datepicker();

            $("p").click(function(){
              $(this).css({'border':'1px solid #ea792d','color':'#ea792d'});
              $(this).append('<style>.navmenu ul:after{background:#ea792d !important;}</style>');
            });
          }

          if(window.location.href.indexOf('crear-usuario')>-1){
            var efect="drop";
            var time=1000; 
            
            //creacion de usuario
            $("input[id=pregunta1Siguiente]").click(function () {    
              $("#form-pregunta1").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta2").toggle(efect);
              }, time);
            });

            $("input[id=pregunta2Siguiente]").click(function () {    
              $("#form-pregunta2").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta3").toggle(efect);
              }, time);
            });

            $("input[id=pregunta2Anterior]").click(function () {    
              $("#form-pregunta2").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta1").toggle(efect);
              }, time);
            });

            $("input[id=pregunta3Siguiente]").click(function () {    
              $("#form-pregunta3").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta4").toggle(efect);
              }, time);
            });

            $("input[id=pregunta3Anterior]").click(function () {    
              $("#form-pregunta3").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta2").toggle(efect);
              }, time);
            });

            $("input[id=pregunta4Siguiente]").click(function () {    
              $("#form-pregunta4").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta5").toggle(efect);
              }, time);
            });

            $("input[id=pregunta4Anterior]").click(function () {    
              $("#form-pregunta4").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta3").toggle(efect);
              },time);
            });

            $("input[id=pregunta5Siguiente]").click(function () {    
              $("#form-pregunta5").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta6").toggle(efect);
              }, time);
            });

            $("input[id=pregunta5Anterior]").click(function () {    
              $("#form-pregunta5").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta4").toggle(efect);
              },time);
            });

            $("input[id=pregunta6Siguiente]").click(function () {    
              $("#form-pregunta6").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta7").toggle(efect);
              }, time);
            });

            $("input[id=pregunta6Anterior]").click(function () {    
              $("#form-pregunta6").toggle(efect);
              setTimeout(()=>{
                $("#form-pregunta5").toggle(efect);
              },time);
            });



            $('#show-hide-passwd1').on('click',function(e){
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
  
            $('#show-hide-passwd2').on('click',function(e){
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
          }
});

