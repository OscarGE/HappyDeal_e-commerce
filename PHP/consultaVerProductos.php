<?php 
	session_start();
	//Conexón a la base de datos
	include("conexionBaseDatos.php");
	$conexion = conectar();	
  	//Consulta 
  	$consulta="SELECT * FROM producto";
  	$resultado=$conexion->query($consulta);
  	if($resultado == TRUE){
		if($resultado->num_rows>0){
			while ($dat=mysqli_fetch_assoc($resultado)) {
				$arr[]=$dat;
			}
			echo json_encode($arr);
		}
		else{
			echo "1";
		}
	}else{
		echo "1";
	}
	mysqli_close($conexion);	
	
 ?>