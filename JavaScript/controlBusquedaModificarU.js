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
		      			$('#msjBusqueda2').html('<div class="registro-usuario-2">'+
		      				'<p class="titilo-registro-usuario">Edite al usuario </p><br>'+
							'<form method="get" id="formularioModificar">'+
								'<input id="idU" name="idU" type="hidden" value="'+js[0]+'">'+
								'<p class="subtitilo-registro-usuario">Información de la cuenta</p>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Nombre de cuenta:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="cuenta" name="cuenta" size="50" placeholder="Ingrese nombre de cuenta">'+
										'<small id="smallCuenta"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Contraseña:</label> '+
										'<input class="inputs-registro-usuario" type="password" id="contra" name="contra"size="20" placeholder="Ingrese contraseña">'+
										'<small id="smallContra"></small>'+
									'</li>'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Confirmación:</label> '+
										'<input class="inputs-registro-usuario" type="password" id="contra2" size="20" placeholder="Ingrese contraseña">'+
										'<small id="smallContra2"></small>'+
									'</li>'+
									'<li></li>'+
								'</ul>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario-3"><i class="fas fa-exclamation-circle"></i> Puedes dejar los anteriores campos vacíos para mantener la contraseña actual</label>'+
									'</li>'+
								'</ul><br>&nbsp;'+
								'&nbsp<label class="titulo-label-registro-usuario-2"><input class="inputs-registro-usuario" type="checkbox" id="adminCB" name="adminCB" value="1"> Usuario administrador <i class="fas fa-crown"></i></label>'+			
								
								'<p class="subtitilo-registro-usuario">Información del usario</p>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Nombre:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="nombre" name="nombre" size="26" placeholder="Ingrese su nombre">'+
										'<small id="smallNombre"></small>'+
									'</li>'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Apellidos:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="apellidos" name="apellidos"size="27" placeholder="Ingrese sus apellidos">'+
										'<small id="smallApellidos"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Fecha de nacimiento:</label> '+
										'<input class="inputs-registro-usuario" type="date" id="nacimiento" name="nacimiento" min="1900-01-01" max="2040-12-31"  size="28">'+
										'<small id="smallNacimiento"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Correo electrónico:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="correo" size="25" name="correo"placeholder="Ingrese su direccion e-mail">'+
										'<small id="smallCorreo"></small>'+
									'</li>'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Teléfono:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="tel" size="15" name="tel"placeholder="Ingrese su número">'+
										'<small id="smallTel"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">País de residencia:</label> '+
										'<select class="inputs-registro-usuario" name="pais" id="pais">'+
											'<option value="Canada">Canada <option value="Estados_Unidos">Estados Unidos<option value="México">México<option value="Brasil">Brasil<option value="Colombia">Colombia<option value="Perú">Perú<option value="Argentina">Argentina<option value="Chile">Chile'+
										'</select>'+
									'</li>'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Estado:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="estado" name="estado" size="25" placeholder="Ingrese el estado de recidencia">'+
										'<small id="smallEstado"></small>'+
									'</li>'+
								'</ul><br>'+
								'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Ciudad:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="ciudad" name="ciudad" size="16" placeholder="Ingrese su ciudad">'+
										'<small id="smallCiudad"></small>'+
									'</li>'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Dirección de la calle:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="calle" name="calle" size="28" placeholder="Ingrese su dirección">'+
										'<small id="smallCalle"></small>'+
									'</li><br>'+
									'<ul class="inputs-contenedor-registro-usuario">'+
									'<li class="input-group-registro-usuario">'+
										'<label class="titulo-label-registro-usuario">Código postal:</label> '+
										'<input class="inputs-registro-usuario" type="text" id="postal" name="postal" size="20" placeholder="Ingrese su código">'+
										'<small id="smallPostal"></small>'+
									'</li>'+
								'</ul><br>'+
								'<p class="subtitilo-registro-usuario">Selecione sus gustos</p><br>&nbsp;&nbsp;&nbsp;&nbsp;'+
								'<label class="titulo-label-registro-usuario-cb"><input type="checkbox" id="electronicos" name="gustos[]" value="Electrónicos"> Electrónicos <i class="fas fa-laptop"></i></label> '+
								'<label class="titulo-label-registro-usuario-cb"><input type="checkbox" id="deportes" name="gustos[]" value="Deportes"> Deportes <i class="fas fa-volleyball-ball"></i></label> '+
								'<label class="titulo-label-registro-usuario-cb"><input type="checkbox" id="ropa" name="gustos[]" value="Ropa"> Ropa <i class="fas fa-tshirt"></i></label> <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+
								'<label class="titulo-label-registro-usuario-cb"> <input type="checkbox" id="papeleria" name="gustos[]" value="Papelería"> Papelería <i class="fas fa-cut"></i></label> '+
								'<label class="titulo-label-registro-usuario-cb"><input type="checkbox" id="mascotas" name="gustos[]" value="Mascotas"> Mascotas <i class="fas fa-dog"></i></label> '+
								'<label class="titulo-label-registro-usuario-cb"> <input type="checkbox" id="alimentos" name="gustos[]" value="Alimentos"> Alimentos <i class="fas fa-hamburger"></i></label><br><br><br> '+
								'<p class="button-posi"><button class="button-registro-usuario" id="si"><i class="fas fa-pencil-alt"></i> Modificar</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button-registro-usuario" id="no">Cancelar</button></p>'+
		      				'</form>'+
		      			'</div>');
		      			window.scroll({
							top: 600,
							behavior: 'smooth'   
						});
						//Modificar usuario
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
						const cuenta=document.getElementById("cuenta");
						const contra=document.getElementById("contra"); 
						const contra2=document.getElementById("contra2"); 
						const nombre=document.getElementById("nombre"); 
						const apellidos=document.getElementById("apellidos");
						const nacimiento=document.getElementById("nacimiento");
						const correo=document.getElementById("correo");
						const tel=document.getElementById("tel"); 
						const estado=document.getElementById("estado");
						const ciudad=document.getElementById("ciudad");
						const calle=document.getElementById("calle");
						const postal=document.getElementById("postal");
						const enviar=document.getElementById("enviarRegistro");
						
						//Se llena el formulario con la información de js=============================================================================
						cuenta.value=js[1];	
						nombre.value=js[4];
						apellidos.value=js[5];
						nacimiento.value=js[6].split("-").reverse().join("-");
						correo.value=js[7];
						tel.value=js[8];
						calle.value=js[10];
						estado.value=js[11];
						ciudad.value=js[12];
						postal.value=js[13];
						if(js[3]=="1"){
							 $("#adminCB").prop("checked",true);
						}
						$("#pais option[value="+js[9]+"]").attr("selected",true);
						if(js.length > 14){
							for (var i = 14; i < js.length; i++) {
								if(js[i]=="Electrónicos"){
									$("#electronicos").prop("checked",true);
									continue;
								}
								if(js[i]=="Deportes"){
									$("#deportes").prop("checked",true);
									continue;
								}
								if(js[i]=="Ropa"){
									$("#ropa").prop("checked",true);
									continue;
								}
								if(js[i]=="Papelería"){
									$("#papeleria").prop("checked",true);
									continue;
								}
								if(js[i]=="Mascotas"){
									$("#mascotas").prop("checked",true);
									continue;
								}
								if(js[i]=="Alimentos"){
									$("#alimentos").prop("checked",true);
									continue;
								}
							}
						}
											
						//Objeto que define las expresiones regulares=============================================================================
						const expresiones={
						    cuenta: /^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1\_\-]{4,16}$/, //Letras, números y guion
						    nombre:/^[a-zA-ZÀ-ÿ\u00f1\u00d\s\.]{1,40}$/, //Letras y espacios
						    direccion:/^[a-zA-ZÀ-ÿ0-9\u00f1\u00d\s\-\#\.]{1,40}$/, //Letras, espacios, numeros, # y -
						    fecha:/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/, //aaaa/mm/dd
						    contra:/^.{4,12}$/, //4 a 12 digitos
						    correo:/^[a-z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
						    tel:/^\d{7,14}$/, //7 a 14 número
						    postal:/^\d{5,8}$/, //5 a 8 número
						}
						//Objeto que define un formulario valido=============================================================================
						const formularioValido ={
							cuenta:true,
							contra: true,
							contra2: true,
							nombre:true,
							apellidos:true,
							nacimiento:true,
							correo:true,
							tel:true,
							estado:true,
							ciudad:true,
							calle:true,
							postal:true
						}  
						//Validaciones=============================================================================
						//Validación de cuenta 
						cuenta.addEventListener("keyup",(e) =>{
							//evento.referenciaAlObjeto.valorDelObjeto.quitarEspaciosEnBlanco.tamaño
							if(expresiones.cuenta.test(e.target.value.trim())){
						        formularioValido.cuenta=true;
						        document.getElementById("smallCuenta").innerHTML="✔";
						    }  
						    else{
						        formularioValido.cuenta=false;
						        document.getElementById("smallCuenta").innerHTML="✘";
						    }
						}) 
						//Validación de contraseña 
						contra.addEventListener("keyup",(e) =>{
					        if(expresiones.contra.test(e.target.value.trim())){
					           formularioValido.contra=true;
					           document.getElementById("smallContra").innerHTML="✔";
					        }  
					          else{
					            formularioValido.contra=false;
					            document.getElementById("smallContra").innerHTML="✘";
					          }
					    })
					    //Validación de contraseña2  
					    contra2.addEventListener("keyup",(e) =>{
					        if(expresiones.contra.test(e.target.value.trim()) && e.target.value.trim()==contra.value.trim()){
					        	formularioValido.contra2=true;
					            document.getElementById("smallContra2").innerHTML="✔";
					        }  
					        else{
					            formularioValido.contra2=false;
					            document.getElementById("smallContra2").innerHTML="✘";
					        }
					    })
					    //Validación de nombre 
					    nombre.addEventListener("keyup",(e) =>{
					        if(expresiones.nombre.test(e.target.value.trim())){
					        	formularioValido.nombre=true;
					            document.getElementById("smallNombre").innerHTML="✔";
					        }  
					        else{
					            formularioValido.nombre=false;
					            document.getElementById("smallNombre").innerHTML="✘";
					        }
					    })
					    //Validación de apellidos 
					    apellidos.addEventListener("keyup",(e) =>{
					        if(expresiones.nombre.test(e.target.value.trim())){
					        	formularioValido.apellidos=true;
					            document.getElementById("smallApellidos").innerHTML="✔";
					        }  
					        else{
					            formularioValido.apellidos=false;
					            document.getElementById("smallApellidos").innerHTML="✘";
					        }
					    })
					    //Validación de fecha de nacimiento 
					    nacimiento.addEventListener("keyup",(e) =>{
					        if(expresiones.fecha.test(e.target.value.trim()) || e.target.value.length>0){
					        	formularioValido.nacimiento=true;
					        	document.getElementById("smallNacimiento").innerHTML="";
					        }  
					        else{
					            formularioValido.nacimiento=false;
					            document.getElementById("smallNacimiento").innerHTML="✘";
					        }
					    })
					    nacimiento.addEventListener("change",(e) =>{
					        if(e.target.value.length>0){
					        	formularioValido.nacimiento=true;
					       }
					    })
					    //Validación de correo 
					    correo.addEventListener("keyup",(e) =>{
					        if(expresiones.correo.test(e.target.value.trim())){
					           formularioValido.correo=true;
					           document.getElementById("smallCorreo").innerHTML="✔";
					        }  
					        else{
					            formularioValido.correo=false;
					            document.getElementById("smallCorreo").innerHTML="✘";
					        }
					    })
					    //Validación de teléfono
					    tel.addEventListener("keyup",(e) =>{
					        if(expresiones.tel.test(e.target.value.trim())){
					           formularioValido.tel=true;
					           document.getElementById("smallTel").innerHTML="✔";
					        }  
					        else{
					            formularioValido.tel=false;
					            document.getElementById("smallTel").innerHTML="✘";
					    	}     
					    })    
					    //Validación de estado 
					    estado.addEventListener("keyup",(e) =>{
					        if(expresiones.nombre.test(e.target.value.trim())){
					        	formularioValido.estado=true;
					            document.getElementById("smallEstado").innerHTML="✔";
					        }  
					        else{
					            formularioValido.estado=false;
					            document.getElementById("smallEstado").innerHTML="✘";
					        }
					    })
					    //Validación de ciudad 
					    ciudad.addEventListener("keyup",(e) =>{
					        if(expresiones.nombre.test(e.target.value.trim())){
					        	formularioValido.ciudad=true;
					            document.getElementById("smallCiudad").innerHTML="✔";
					        }  
					        else{
					            formularioValido.estado=false;
					            document.getElementById("smallCiudad").innerHTML="✘";
					        }
					    })
					    //Validación de calle 
					    calle.addEventListener("keyup",(e) =>{
					        if(expresiones.direccion.test(e.target.value.trim())){
					        	formularioValido.calle=true;
					            document.getElementById("smallCalle").innerHTML="✔";
					        }  
					        else{
					            formularioValido.calle=false;
					            document.getElementById("smallCalle").innerHTML="✘";
					        }
					    })
					    //Validación de código postal  
					    postal.addEventListener("keyup",(e) =>{
					        if(expresiones.postal.test(e.target.value.trim())){
					           formularioValido.postal=true;
					           document.getElementById("smallPostal").innerHTML="✔";
					        }  
					        else{
					            formularioValido.postal=false;
					            document.getElementById("smallPostal").innerHTML="✘";
					    	}     
					    })  
					    //Función de validación===========================================================================
					    function realizarValidacion(){
					        const ValoresDeformularioValido=Object.values(formularioValido);
					        //Ejecuta la sentencia en cada iteración
					        const esValido = ValoresDeformularioValido.findIndex(valor => valor == false); 
					        if(esValido == -1){
					           	var datos2=$('#formularioModificar').serialize();
								$.ajax({
									type: 'GET',
									url: 'PHP/consultaModificarU.php',
									data: datos2,
									success: function(resp2) {
										if(resp2=='1'){
											alert("El usario ha sido modificado");
						        			location.reload();
										}
										else{
											alert("Error: El usario no ha sido modificado - "+resp2);
						        			location.reload();
										}
									}
								});
					        }
					        else{
					            if(ValoresDeformularioValido[0]==false){
					        		alert("Revisa el campo Nombre de cuenta \n\n•Caracteres aceptados: letras, números, _ , - , sin espacios\n•Candtidad de caracteres: 4-16");
					        		cuenta.focus();
					            }
					            else if(ValoresDeformularioValido[1]==false){
					            	window.alert("Revisa el campo Contraseña \n\n•Caracteres aceptados: letras, números, símbolos\n•Candtidad de caracteres: 4-12");
					            	contra.focus();
					            }
					            else if(ValoresDeformularioValido[2]==false){
					            	window.alert("Revisa el campo Confirmación \n\n•Caracteres aceptados: letras, números, símbolos\n•Candtidad de caracteres: 4-12\n•Las contraseñas deben coincidir");
					            	contra2.focus();
					            }
					            else if(ValoresDeformularioValido[3]==false){
					            	window.alert("Revisa el campo Nombre \n\n•Caracteres aceptados: letras, espacios\n•Candtidad de caracteres: 1-40");
					            	nombre.focus();
					            }
					            else if(ValoresDeformularioValido[4]==false){
					            	window.alert("Revisa el campo Apellidos \n\n•Caracteres aceptados: letras, espacios\n•Candtidad de caracteres: 1-40");
					            	apellidos.focus();
					            }
					            else if(ValoresDeformularioValido[5]==false){
					            	window.alert("Revisa el campo Fecha de nacimiento \n\n•Formato dd/mm/aaaa\n•Fechas aceptadas: 01/01/1900 - 21/12/2040");
					            	nacimiento.focus();
					            }
					            else if(ValoresDeformularioValido[6]==false){
					            	window.alert("Revisa el campo Correo electrónico \n\n•La direción del correo no es valida\n•Puede que falte el @ o el dominio");
					            	correo.focus();
					            }
					            else if(ValoresDeformularioValido[7]==false){
					            	window.alert("Revisa el campo Teléfono \n\n•Caracteres aceptados: solo dígitos, sin espacios\n•Candtidad de dígitos: 7-14");
					            	tel.focus();
					            }
					            else if(ValoresDeformularioValido[8]==false){
					            	window.alert("Revisa el campo Estado \n\n•Caracteres aceptados: letras, espacios\n•Candtidad de caracteres: 1-40");
					            	estado.focus();
					            }
					            else if(ValoresDeformularioValido[9]==false){
					            	window.alert("Revisa el campo Ciudad \n\n•Caracteres aceptados: letras, espacios\n•Candtidad de caracteres: 1-40");
					            	ciudad.focus();
					            }
					            else if(ValoresDeformularioValido[10]==false){
					            	window.alert("Revisa el campo Dirección de la calle \n\n•Caracteres aceptados: letras, espacios, números, # , -, .\n•Candtidad de caracteres: 1-40");
					            	calle.focus();
					            }
					            else if(ValoresDeformularioValido[11]==false){
					            	window.alert("Revisa el campo Código postal \n\n•Caracteres aceptados: solo dígitos, sin espacios\n•Candtidad de dígitos: 5-8");
					            	postal.focus();
					            }

					        }
					    }
		        	}
		      	}
			});
		});
	});
}