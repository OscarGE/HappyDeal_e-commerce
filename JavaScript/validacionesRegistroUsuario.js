window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
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
		cuenta:false,
		contra:false,
		contra2:false,
		nombre:false,
		apellidos:false,
		nacimiento:false,
		correo:false,
		tel:false,
		estado:false,
		ciudad:false,
		calle:false,
		postal:false,
	}  
	//Prevenir que el evento submit se ejecute antes de validar==========================================================
	formulario.addEventListener("submit",(e) =>{
	    e.preventDefault();
	    realizarValidacion();
	})
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
            formulario.submit();
        }
        else{
            if(ValoresDeformularioValido[0]==false){
        		window.alert("Revisa el campo Nombre de cuenta \n\n•Caracteres aceptados: letras, números, _ , - , sin espacios\n•Candtidad de caracteres: 4-16");
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
