window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	$(document).ready(function() {
		$.ajax({
			type: 'GET',
			url: 'PHP/consultaVerUsuario.php',
			success: function(resp) {
		    	if(resp=="1"){
		        	$('#tablaUsuarios').html('<p class="subtitilo-registro-usuario-w"><i class="fas fa-exclamation-triangle"></i> Error: la tabla no se encuentra o esta vacía</p>');	
		        }	
		        else{
		      		var js= JSON.parse(resp);		      			
		   			$('#tablaUsuarios').html('<div class="registro-usuario-4">'+
	    				'<p class="titilo-registro-usuario"><i class="far fa-list-alt"></i> Lista de los usarios registrados en el sistema</p><br>'+
	      				'<table id="tablaU" class="styled-table" border=1 width=100%>'+
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
						'</table>'+
	     			'</div>');
		   			var tabla;
	     			for(var i=0; i< js.length;i++){
						tabla+='<tr><td class="Tregistro">'+js[i].id_usr+'</td><td class="Tregistro">'+js[i].usr_name+'</td><td class="Tregistro">'+js[i].usr_passw+'</td><td class="Tregistro">'+js[i].is_admin+'</td><td class="Tregistro">'+js[i].nombre+'</td><td class="Tregistro">'+js[i].apellido+'</td><td class="Tregistro">'+js[i].fecha_nacimiento+'</td><td class="Tregistro">'+js[i].email+'</td><td class="Tregistro">'+js[i].telefono+'</td><td class="Tregistro">'+js[i].pais+'</td><td class="Tregistro">'+js[i].direccion_calle+'</td><td class="Tregistro">'+js[i].estado+'</td><td class="Tregistro">'+js[i].ciudad+'</td><td class="Tregistro">'+js[i].codigo_postal+'</td></tr>';
					}
					$('#tablaU').append(tabla);

		      	}    	
		    }
		});
	});
}