<?php 
	session_start();
	if(!(isset($_SESSION["idCuenta"]))){
		echo "1";
	}
	elseif (isset($_SESSION["idCuenta"])){
		$infoCuenta = array("$_SESSION[idCuenta]", "$_SESSION[nomCuenta]", "$_SESSION[tipoCuenta]");
		echo json_encode($infoCuenta);
	}

	
 ?>