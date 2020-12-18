window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	$(document).ready(function() {
		$('#buscarIDbtn').click(function(e){
			e.preventDefault();
			var datos=$('#formularioBusqueda').serialize();
			$.ajax({
				type: 'GET',
				url: 'PHP/consultaBusquedaU.php',
				data: datos,
				success: function(resp) {
		        	if(resp=="1"){
		        		$('#msjBusqueda').html('<p class="subtitilo-registro-usuario-w"><i class="fas fa-exclamation-triangle"></i> El usario no ha sido encontrado</p>');	
		        		$('#msjBusqueda2').html('');
		        	}	
		        	else{
		      			var js= JSON.parse(resp);
		        		$('#msjBusqueda').html('');			      			
		      			$('#msjBusqueda2').html('<div class="registro-usuario-4">'+
		      				'<p class="titilo-registro-usuario">¿Desea dar de baja al usario?</p><br>'+
		      				'<table class="styled-table" border=1 width=100%>'+
								'<tr>'+
									'<td class="registorT"><p class="tablaTitulos">ID</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Cuenta</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Contraseña</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Tipo</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Nombre</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Apellido</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Fecha de nacimiento</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">E-mail</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Teléfono</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">País</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Dirección</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Estado</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Ciudad</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Código postal</p></td>'+
								'</tr>'+
								'<tr>'+
									'<td class="Tregistro">'+js[0]+'</td><td class="Tregistro">'+js[1]+'</td><td class="Tregistro">'+js[2]+'</td><td class="Tregistro">'+js[3]+'</td><td class="Tregistro">'+js[4]+'</td><td class="Tregistro">'+js[5]+'</td><td class="Tregistro">'+js[6]+'</td><td class="Tregistro">'+js[7]+'</td><td class="Tregistro">'+js[8]+'</td><td class="Tregistro">'+js[9]+'</td><td class="Tregistro">'+js[10]+'</td><td class="Tregistro">'+js[11]+'</td><td class="Tregistro">'+js[12]+'</td><td class="Tregistro">'+js[13]+'</td>'+
								'</tr>'+
							'</table>'+
							'<br> <button class="button-registro-usuario" id="si"><i class="fas fa-bomb"></i> Sí</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button-registro-usuario" id="no">No</button>'+
		      			'</div>');
		      			window.scroll({
							top: 600,
							behavior: 'smooth'   
						});
						//Eliminar usuario
						$('#no').click(function(e){
							 location.reload();
						});
						$('#si').click(function(e){
							$.ajax({
								type: 'GET',
								url: 'PHP/darDeBaja.php',
								data: datos,
								success: function(resp2) {
						        	if(resp2=="1"){
						        		alert("El usuario ha sido eliminado");
						        		location.reload();
						        	}
						        	else {
						        		alert("Error: El usuario no ha sido eliminado");
						        		location.reload();
						        	}
						      	}
							});
						});
		        	}
		      	}
			});
		});
	});
}