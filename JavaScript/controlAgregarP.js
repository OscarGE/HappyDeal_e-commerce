window.onload=function(){//Espera a que todos los elementos de la página se hayan cargado 
	//Se almacenan los elementos en variables js=============================================================================
	const formulario=document.getElementById("formularioResgistro"); 
	const producto=document.getElementById("producto");
	const descripcion=document.getElementById("descripcion"); 
	const imagen=document.getElementById("imagen"); 
	const precio=document.getElementById("precio"); 
	const existencia=document.getElementById("existencia");
	
	//Objeto que define las expresiones regulares=============================================================================
	const expresiones={
	    producto: /^[\s\S]{1,45}$/, 
	    descripcion:/^[\s\S]{1,1000}$/,
	  	precio: /^\d{1,6}$/,
	}
	//Objeto que define un formulario valido=============================================================================
	const formularioValido ={
		producto:false,
		descripcion:false,
		imagen:false,
		precio:false,
		existencia:false
	}  
	//Prevenir que el evento submit se ejecute antes de validar==========================================================
	formulario.addEventListener("submit",(e) =>{
	    e.preventDefault();
	    realizarValidacion();
	})
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
            fData.append('imagen',$("input[name=imagen]")[0].files[0]);
            fData.append('producto',$('#producto').val());
            fData.append('descripcion',$('#descripcion').val());
            fData.append('precio',$('#precio').val());
            fData.append('existencia',$('#existencia').val());
            fData.append('depa',$('#depa').val());

			$.ajax({
				type: 'POST',
				url: 'PHP/consultaAgregarP.php',
				data: fData,
                processData: false,
                contentType: false,
				success: function(resp) {
					if(resp=='1'){
						alert("El producto ha sido agregado");
						location.reload();
					}
					else{
						alert("Error: El producto no ha sido agregado - "+resp);
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