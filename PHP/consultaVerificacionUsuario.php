<?php 
	session_start();
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(isset($_POST['usuario']) && isset($_POST['pass'])){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();
	   	//Almacenando los POST en variables php
	   	$usuario=$_POST['usuario'];
    	$password=$_POST['pass'];
    	//Se encripta la contraseña con md5
    	$passwordCodif=md5($password);	
	  	//Consulta con los datos de login
    	$consulta="SELECT * FROM cuenta_usr WHERE usr_name='$usuario' AND usr_passw='$passwordCodif'";
    	$resultado=$conexion->query($consulta);
		if($resultado->num_rows==1){
			$datos=mysqli_fetch_array($resultado);
			$_SESSION["tipoCuenta"]=$datos['is_admin'];
			$_SESSION["idCuenta"]=$datos['id_usr'];
			$_SESSION["nomCuenta"]=$datos['usr_name'];
			echo "1";
		}
		else{
			echo "0";
		}
		mysqli_close($conexion);
	}
 ?>
