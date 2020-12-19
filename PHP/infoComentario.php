<?php 
	session_start();
	if(!(@$_SESSION["idCuenta"]=="")){
		$infoCuenta = array("$_SESSION[idCuenta]", "$_SESSION[datosProdu]","$_SESSION[tipoCuenta]");
	}
	else{
		$infoCuenta = array("$_SESSION[datosProdu]");
	}

	echo json_encode($infoCuenta);
 ?>