window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	$(document).ready(function() {
		$('#ingresar').click(function(e){
			e.preventDefault();
			var datos=$('#formularioIniciarSesion').serialize();
			$.ajax({
				type: 'POST',
				url: 'PHP/consultaVerificacionUsuario.php',
				data: datos,
				success: function(resp) {
		        	if(resp=="1")
		        		location="index.html";
		        	else
		        		$('#msjNoValido').html('<i class="fas fa-exclamation-triangle"></i> Las credenciales son incorrectas. Por favor, inténtelo nuevamente');	
		      	}
			});
		});
	});
}