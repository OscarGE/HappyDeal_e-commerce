//window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	$(document).ready(function() {
		$.ajax({
			type: 'POST',
			url: 'PHP/consultaVerProductos.php',
			success: function(resp) {
		    	if(resp!="1"){
		      		var js= JSON.parse(resp);		      			
	     			for(var i=0; i< js.length;i++){
						if(js[i].depa=="Electrónicos"){
							$('#catalogoElectronico').append('<div class="tarjetaProduc"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="200px"><hr>'+js[i].nom_produc+'<br><b class="precio">$'+js[i].precio_produc+'.00</b><br><br><form method="GET" action="DetallesProducto.php"><input name="datosProdu" type="hidden" value="'+js[i].id_produc+'"><button class="enlace1"></i>Ver más</button><form></div>');
						}
						else if(js[i].depa=="Deportes"){
							$('#catalogoDeportes').append('<div class="tarjetaProduc"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="200px"><hr>'+js[i].nom_produc+'<br><b class="precio">$'+js[i].precio_produc+'.00</b><br><br><form method="GET" action="DetallesProducto.php"><input name="datosProdu" type="hidden" value="'+js[i].id_produc+'"><button class="enlace1"></i>Ver más</button><form></div>');
						}
						else if(js[i].depa=="Ropa"){
							$('#catalogoRopa').append('<div class="tarjetaProduc"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="200px"><hr>'+js[i].nom_produc+'<br><b class="precio">$'+js[i].precio_produc+'.00</b><br><br><form method="GET" action="DetallesProducto.php"><input name="datosProdu" type="hidden" value="'+js[i].id_produc+'"><button class="enlace1"></i>Ver más</button><form></div>');
						}
						else if(js[i].depa=="Papelería"){
							$('#catalogoPapeleria').append('<div class="tarjetaProduc"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="200px"><hr>'+js[i].nom_produc+'<br><b class="precio">$'+js[i].precio_produc+'.00</b><br><br><form method="GET" action="DetallesProducto.php"><input name="datosProdu" type="hidden" value="'+js[i].id_produc+'"><button class="enlace1"></i>Ver más</button><form></div>');
						}
						else if(js[i].depa=="Mascotas"){
							$('#catalogoMascotas').append('<div class="tarjetaProduc"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="200px"><hr>'+js[i].nom_produc+'<br><b class="precio">$'+js[i].precio_produc+'.00</b><br><br><form method="GET" action="DetallesProducto.php"><input name="datosProdu" type="hidden" value="'+js[i].id_produc+'"><button class="enlace1"></i>Ver más</button><form></div>');
						}
						else if(js[i].depa=="Alimentos"){
							$('#catalogoAlimentos').append('<div class="tarjetaProduc"><img src="uploads/'+js[i].imagen_produc+'" alt="'+js[i].imagen_produc+'" width="200px"><hr>'+js[i].nom_produc+'<br><b class="precio">$'+js[i].precio_produc+'.00</b><br><br><form method="GET" action="DetallesProducto.php"><input name="datosProdu" type="hidden" value="'+js[i].id_produc+'"><button class="enlace1"></i>Ver más</button><form></div>');
						}
					}
					
		      	}    	
		    }
		});
	});
//}