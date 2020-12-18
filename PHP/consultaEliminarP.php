<?php 
	session_start();
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(isset($_GET['buscarID'])){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();
	   	//Almacenando los GET en variables php
	   	$aEliminar=$_GET['buscarID'];	
	  	//Consulta con el ID
	  	$consulta="DELETE FROM producto WHERE id_produc='$aEliminar'";
	  	if($conexion->query($consulta) == TRUE){
			echo "1";
		}else{
			echo "0";
		}
		mysqli_close($conexion);	
	}
 ?>