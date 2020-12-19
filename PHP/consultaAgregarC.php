<?php  	
	
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(!(@$_GET['usrId']=="") AND !(@$_GET['prodId']=="") AND !(@$_GET['comentarioP']=="")){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();
	    //Consulta de la comentario  
	    $consulta_comentario="INSERT INTO comentario(comentario, fecha_comentario, id_produc, id_usr)" . "VALUES ('$_GET[comentarioP]', CURRENT_TIMESTAMP(), '$_GET[prodId]', '$_GET[usrId]')";
	    if($conexion->query($consulta_comentario) == TRUE){
	    	echo "1";
		}
		else{
			echo "Error: consulta_comentario";
		}
	}
	else{
		echo "Error: Datos incompletos";
	}
?>
