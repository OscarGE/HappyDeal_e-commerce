<?php  	
	
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(!(@$_POST['producto']=="") AND !(@$_POST['descripcion']=="") AND !(@$_POST['precio']=="") AND !(@$_POST['existencia']=="")){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();
	    
	    //Se carga la imagen en la carpeta uploads 
	  	$uploads_dir = $_SERVER['DOCUMENT_ROOT'].'\Tienda\uploads/';//Dirección para el destino 
		$name = $_FILES['imagen']['name'];
		if (is_uploaded_file($_FILES['imagen']['tmp_name'])){       
		    move_uploaded_file($_FILES['imagen']['tmp_name'], $uploads_dir.$name);
		    //Consulta de la tabla producto
			$consulta_producto="INSERT INTO producto(nom_produc, descripcion_produc, imagen_produc, precio_produc, existencia_produc, depa)" . "VALUES ('$_POST[producto]', '$_POST[descripcion]', '$name', $_POST[precio], $_POST[existencia], '$_POST[depa]')";
			if($conexion->query($consulta_producto) == TRUE){
		    	echo "1";
		    }
		    else{
		    	echo "Error: falló consulta_producto -> $conexion->error";
		    }
		    mysqli_close($conexion);
		}
	}
	else{
		echo "Error: Datos incompletos";
	}
?>
