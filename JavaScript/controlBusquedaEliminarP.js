window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	$(document).ready(function() {
		$('#buscarIDbtn').click(function(e){
			e.preventDefault();
			var datos=$('#formularioBusqueda').serialize();
			$.ajax({
				type: 'GET',
				url: 'PHP/consultaBusquedaP.php',
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
									'<td class="registorT"><p class="tablaTitulos">Producto</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Descripción</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Imagen</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Precio</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Existencia</p></td>'+
									'<td class="registorT"><p class="tablaTitulos">Departamento</p></td>'+
								'</tr>'+
								'<tr>'+
									'<td class="Tregistro">'+js[0]+'</td><td class="Tregistro">'+js[1]+'</td><td class="Tregistro">'+js[2]+'</td><td class="Tregistro"><img src="uploads/'+js[3]+'" alt="'+js[3]+'" width="100px"></td><td class="Tregistro">'+js[4]+'</td><td class="Tregistro">'+js[5]+'</td><td class="Tregistro">'+js[6]+'</td>'+
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
								url: 'PHP/consultaEliminarP.php',
								data: datos,
								success: function(resp2) {
						        	if(resp2=="1"){
						        		alert("El producto ha sido eliminado");
						        		location.reload();
						        	}
						        	else {
						        		alert("Error: El producto no ha sido eliminado");
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