window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	$(document).ready(function() {
		$.ajax({
			type: 'POST',
			url: 'PHP/consultaVerProductos.php',
			success: function(resp) {
		    	if(resp=="1"){
		        	$('#tablaProducto').html('<p class="subtitilo-registro-usuario-w"><i class="fas fa-exclamation-triangle"></i> Error: la tabla no se encuentra o esta vacía</p>');	
		        }	
		        else{
		      		var js= JSON.parse(resp);		      			
		   			$('#tablaProducto').html('<div class="registro-usuario-4">'+
	    				'<p class="titilo-registro-usuario"><i class="far fa-list-alt"></i> Lista de los productos registrados en el sistema</p><br>'+
	      				'<table id="tablaP" class="styled-table" border=1 width=100%>'+
							'<tr>'+
								'<td class="registorT"><p class="tablaTitulos">ID</p></td>'+
								'<td class="registorT"><p class="tablaTitulos">Producto</p></td>'+
								'<td class="registorT"><p class="tablaTitulos">Descripción</p></td>'+
								'<td class="registorT"><p class="tablaTitulos">Imagen</p></td>'+
								'<td class="registorT"><p class="tablaTitulos">Precio</p></td>'+
								'<td class="registorT"><p class="tablaTitulos">Existencia</p></td>'+
								'<td class="registorT"><p class="tablaTitulos">Departamento</p></td>'+
							'</tr>'+
						'</table>'+
	     			'</div>');
		   			var tabla;
	     			for(var i=0; i< js.length;i++){
						tabla+='<tr><td class="Tregistro">'+js[i].id_produc+'</td><td class="Tregistro">'+js[i].nom_produc+'</td><td class="Tregistro">'+js[i].descripcion_produc+'</td><td class="Tregistro"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="100px"></td><td class="Tregistro">$'+js[i].precio_produc+'</td><td class="Tregistro">'+js[i].existencia_produc+'</td><td class="Tregistro">'+js[i].depa+'</td></tr>';
					}
					$('#tablaP').append(tabla);

		      	}    	
		    }
		});
	});
}