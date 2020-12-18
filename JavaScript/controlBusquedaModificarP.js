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
		      			$('#msjBusqueda2').html('<div class="registro-usuario-5">'+
							'<p class="titilo-registro-usuario">Edite al producto</p><br>'+
							'<form method="POST" id="formularioResgistro" enctype="multipart/form-data" action="">'+
								'<input id="idU" name="idU" type="hidden" value="'+js[0]+'">'+
								'<p class="subtitilo-registro-usuario">Ingrese la información del producto</p>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Nombre del producto:</label>'+
										'<input class="inputs-registro-usuario" type="text" id="producto" name="producto" size="50" placeholder="Ingrese nombre de producto">'+
										'<small id="smallProducto"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Descripción:</label><br>&nbsp;'+
										'<textarea class="textarea-registro" id="descripcion" name="descripcion" rows="7" cols="50" placeholder="Ingrese una descripción para el producto"></textarea>'+
										'<small id="smallDescripcion"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario-3"><i class="fas fa-exclamation-circle"></i> Puedes dejar el siguiente campo vacío para mantener la imagen actual</label>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Imagen:</label>'+
										'<input class="inputs-registro-usuario" id="imagen" name="imagen" type="file" accept="image/*" >'+
										'<small id="smallImagen"></small>'+
										'<div class="prevImgEstilo" id="prevImg"><i class="far fa-image"></i></div>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Precio: $</label>'+
										'<input class="inputs-registro-usuario" type="text" id="precio" name="precio" size="12" placeholder="Precio" >'+
										'<small id="smallPrecio"></small>'+
									'</li>'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Existencia:</label>'+
										'<input class="inputs-registro-usuario" type="text" id="existencia" name="existencia" size="12" placeholder="Existencia" >'+
										'<small id="smallExistencia"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Departamento:</label>'+
										'<select class="inputs-registro-usuario" name="depa" id="depa">'+
											'<option value="Electrónicos">Electrónicos <option value="Deportes">Deportes <option value="Ropa">Ropa <option value="Papelería">Papelería<option value="Mascotas">Mascotas<option value="Alimentos">Alimentos'+
										'</select>'+
									'</li>'+
								'</ul><br><br>'+
								'<p class="button-posi"><button class="button-registro-usuario" id="si"><i class="fas fa-pencil-alt"></i> Modificar</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button-registro-usuario" id="no">Cancelar</button></p>'+
				      		'</form>'+
						'</div>');
		      			window.scroll({
							top: 600,
							behavior: 'smooth'   
						});
						//Modificar producto
						$('#no').click(function(e){
							 location.reload();
						});
						$('#si').click(function(e){
							e.preventDefault();
							realizarValidacion();
						});
						//Código de validación========================================================================================
						//Se almacenan los elementos en variables js=============================================================================
						const formulario=document.getElementById("formularioResgistro"); 
						const producto=document.getElementById("producto");
						const descripcion=document.getElementById("descripcion"); 
						const imagen=document.getElementById("imagen"); 
						const precio=document.getElementById("precio"); 
						const existencia=document.getElementById("existencia");
						
						//Se llena el formulario con la información de js=============================================================================
						producto.value=js[1];
						descripcion.value=js[2];
						precio.value=js[4];
						existencia.value=js[5];
						$("#depa option[value="+js[6]+"]").attr("selected",true);
											
						//Objeto que define las expresiones regulares=============================================================================
						const expresiones={
						    producto: /^[\s\S]{1,45}$/, 
	   						descripcion:/^[\s\S]{1,1000}$/,
	  						precio: /^\d{1,6}$/,
						}
						//Objeto que define un formulario valido=============================================================================
						const formularioValido ={
							producto:true,
							descripcion:true,
							imagen:true,
							precio:true,
							existencia:true
						}  
						//Validaciones=============================================================================
						//Validación de producto 
						producto.addEventListener("keyup",(e) =>{
							//evento.referenciaAlObjeto.valorDelObjeto.quitarEspaciosEnBlanco.tamaño
							if(expresiones.producto.test(e.target.value.trim())){
						        formularioValido.producto=true;
						        document.getElementById("smallProducto").innerHTML="✔";
						    }  
						    else{
						        formularioValido.producto=false;
						        document.getElementById("smallProducto").innerHTML="✘";
						    }
						}) 
						//Validación de descripcion
						descripcion.addEventListener("keyup",(e) =>{
					        if(expresiones.descripcion.test(e.target.value.trim())){
					           formularioValido.descripcion=true;
					           document.getElementById("smallDescripcion").innerHTML="✔";
					        }  
					          else{
					            formularioValido.descripcion=false;
					            document.getElementById("smallDescripcion").innerHTML="✘";
					          }
					    })
					    //Validación de imagen  
					    imagen.addEventListener("change",(e) =>{
					        if(e.target.value.length>0){
					        	formularioValido.imagen=true;
					            document.getElementById("smallImagen").innerHTML="✔";
					        }  
					        else{
					            formularioValido.imagen=false;
					            document.getElementById("smallimagen").innerHTML="✘";
					        }
					    })
					    //Validación de precio 
					    precio.addEventListener("keyup",(e) =>{
					        if(expresiones.precio.test(e.target.value.trim())){
					        	formularioValido.precio=true;
					            document.getElementById("smallPrecio").innerHTML="✔";
					        }  
					        else{
					            formularioValido.precio=false;
					            document.getElementById("smallPrecio").innerHTML="✘";
					        }
					    })
					    //Validación de existencia 
					    existencia.addEventListener("keyup",(e) =>{
					        if(expresiones.precio.test(e.target.value.trim())){
					        	formularioValido.existencia=true;
					            document.getElementById("smallExistencia").innerHTML="✔";
					        }  
					        else{
					            formularioValido.existencia=false;
					            document.getElementById("smallExistencia").innerHTML="✘";
					        }
					    })
					    //Función de validación===========================================================================
					    function realizarValidacion(){
					        const ValoresDeformularioValido=Object.values(formularioValido);
					        //Ejecuta la sentencia en cada iteración
					        const esValido = ValoresDeformularioValido.findIndex(valor => valor == false); 
					        if(esValido == -1){
					           	var fData = new FormData();
					            fData.append('idU',$('#idU').val());
					           	fData.append('imagen',$("input[name=imagen]")[0].files[0]);
					           	fData.append('producto',$('#producto').val());
					            fData.append('descripcion',$('#descripcion').val());
					            fData.append('precio',$('#precio').val());
					            fData.append('existencia',$('#existencia').val());
					            fData.append('depa',$('#depa').val());
								$.ajax({
									type: 'POST',
									url: 'PHP/consultaModificarP.php',
									data: fData,
									processData: false,
                					contentType: false,
									success: function(resp2) {
										if(resp2=='1'){
											alert("El producto ha sido modificado");
						        			location.reload();
										}
										else{
											alert("Error: El producto no ha sido modificado - "+resp2);
						        			location.reload();
										}
									}
								});
					        }
					        else{
					            if(ValoresDeformularioValido[0]==false){
					        		window.alert("Revisa el campo Nombre del producto \n\n•Caracteres aceptados: todos\n•Candtidad de caracteres: 1-45");
					        		producto.focus();
					            }
					            else if(ValoresDeformularioValido[1]==false){
					            	window.alert("Revisa el campo Descripción \n\n•Caracteres aceptados: todos\n•Candtidad de caracteres: 1-1000");
					            	descripcion.focus();
					            }
					            else if(ValoresDeformularioValido[2]==false){
					            	window.alert("Es necesario cargar una imagen para el producto.");
					            	imagen.focus();
					            }
					            else if(ValoresDeformularioValido[3]==false){
					            	window.alert("Revisa el campo Precio \n\n•Caracteres aceptados: solo dígitos\n•Intervalo de dígitos: 1-999999");
					            	precio.focus();
					            }
					            else if(ValoresDeformularioValido[4]==false){
					            	window.alert("Revisa el campo Existencia \n\n•Caracteres aceptados: solo dígitos\n•Intervalo de dígitos: 1-999999");
					            	existencia.focus();
					            }
					        }
					    }
					    $(document).ready(function() {
							$(document).on("change","#imagen", function(){
								var imgCodified = URL.createObjectURL(this.files[0]);
								$('#prevImg').html('<img src="'+imgCodified+'" alt="Producto" width="100px">');	
							});
						});
		        	}
		      	}
			});
		});
	});
}