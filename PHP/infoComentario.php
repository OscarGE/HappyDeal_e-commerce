<?php 
	session_start();
	$infoCuenta = array("$_SESSION[idCuenta]", "$_SESSION[datosProdu]");
	echo json_encode($infoCuenta);
 ?>