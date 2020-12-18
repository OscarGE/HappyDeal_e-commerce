<?php  
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(!(@$_POST['producto']=="") AND !(@$_POST['descripcion']=="") AND !(@$_POST['precio']=="") AND !(@$_POST['existencia']=="")){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();	
		//Determinar si contra esta vacía
		if(@$_FILES['imagen']==""){
			$consulta="SELECT imagen_produc FROM producto WHERE id_produc=$_POST[idU]";
			$resultado=$conexion->query($consulta);
			if($resultado==true){
				$imagenBD=mysqli_fetch_array($resultado);
				$name=$imagenBD['imagen_produc'];
			}
			else{
				echo "Error: falló consulta -> $conexion->error";
			}
		}
		else{
			 //Se carga la imagen en la carpeta uploads 
		  	$uploads_dir = $_SERVER['DOCUMENT_ROOT'].'\Tienda\uploads/';//Dirección para el destino 
			$name = $_FILES['imagen']['name'];
			if (is_uploaded_file($_FILES['imagen']['tmp_name'])){       
			    move_uploaded_file($_FILES['imagen']['tmp_name'], $uploads_dir.$name);
			}
		}
		//Consulta de la tabla producto para modificación
		$consulta_producto="UPDATE producto SET nom_produc='$_POST[producto]', descripcion_produc='$_POST[descripcion]', imagen_produc='$name', precio_produc=$_POST[precio], existencia_produc=$_POST[existencia], depa='$_POST[depa]' WHERE id_produc=$_POST[idU]";
		if($conexion->query($consulta_producto) == TRUE){
	    	echo "1";	
		}
	    else{
	    	echo "Error: falló consulta_producto -> $conexion->error";
	    }
	}
	else{
		echo "Error: Datos incompletos";
	}
?>