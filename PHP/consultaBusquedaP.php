<?php 
	session_start();
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(isset($_GET['buscarID'])){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();
	   	//Almacenando los GET en variables php
	   	$buscarID=$_GET['buscarID'];	
	  	//Consulta con el ID
    	$consulta="SELECT * FROM producto WHERE id_produc='$buscarID'";
    	$resultado=$conexion->query($consulta);
		if($resultado->num_rows==1){
			$datos_cuenta=mysqli_fetch_array($resultado);
			$infoCuenta = array("$datos_cuenta[id_produc]", "$datos_cuenta[nom_produc]", "$datos_cuenta[descripcion_produc]","$datos_cuenta[imagen_produc]", "$datos_cuenta[precio_produc]", "$datos_cuenta[existencia_produc]", "$datos_cuenta[depa]");
			echo json_encode($infoCuenta);
		}
		else{
			echo "1";
		}
		mysqli_close($conexion);
	}
 ?>