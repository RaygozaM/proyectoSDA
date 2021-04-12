
$(document).ready(function() {
  //variables
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
	var pass1 = $('[name=pass1]');
	var pass2 = $('[name=pass2]');
	var confirmacion = "¡Ok válido!";
	var longitud = "La contraseña debe estar formada entre 8-10 carácteres (ambos inclusive)";
  var negacion = "No coinciden las contraseñas";
  var min = "La clave debe tener al menos [a-z], [A-Z], [0-9] y [&$%#/()*]";
  var XD = 0;
	//var vacio = "La contraseña no puede estar vacía";
	//oculto por defecto el elemento span
	var span = $('<span></span>').insertAfter(pass2);
  span.hide();
  
	//función que comprueba las dos contraseñas
	function coincidePassword(){
	var valor1 = pass1.val();
  var valor2 = pass2.val();
  
	//muestro el span
	span.show().removeClass();
	//condiciones dentro de la función
	
	// if(valor1.length==0 || valor1==""){
	// span.text(vacio).addClass('negacion');	
  // }
  //$("#form1").on('submit', function(evt){
	if(valor1.length<8 || valor1.length>10){
  span.text(longitud).addClass('negacion');
  
    XD = 1;
    
	}else{
    if(valor1 != valor2){
      span.text(negacion).addClass('negacion');	
      
        XD = 1;
        
      }else{
        if(strongRegex.test(valor1)){
          //if(valor1.length!=0 && valor1==valor2){
            span.text(confirmacion).removeClass("negacion").addClass('confirmacion');
            alert("¡¡CONTRASEÑAS CORRECTAS!!");
            XD = 0;
            $('#invalidCheck').prop('checked',false);
          
            //}
          	
          }else{
            span.text(min).addClass('negacion');
            
              XD = 1;
              
          }
        
      }
  }  
    
  $("#form1").on('submit', function(evt){
  if (XD == 1) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});	
  }
	pass2.keyup(function(){
	coincidePassword();
  });
  pass1.keyup(function(){
    coincidePassword();
    });
});

$('#pass1').keyup(function(e) {
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{6,}).*", "g");
  if (false == enoughRegex.test($(this).val())) {
          $('#passstrength').html('Contraseña Muy Débil.');
  } else if (strongRegex.test($(this).val())) {
          $('#passstrength').className = 'ok';
          $('#passstrength').html('Contraseña Fuerte!');
  } else if (mediumRegex.test($(this).val())) {
          $('#passstrength').className = 'alert';
          $('#passstrength').html('Contraseña Media!');
  } else {
          $('#passstrength').className = 'error';
          $('#passstrength').html('Contraseña Débil!');
  }
  return true;
});

$(document).ready(function(){    
  $('#iniciar').click(function(){  
      window.location="login.html";
  });   
});



