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
    	$consulta="SELECT * FROM cuenta_usr WHERE id_usr='$buscarID'";
    	$resultado=$conexion->query($consulta);
		if($resultado->num_rows==1){
			$datos_cuenta=mysqli_fetch_array($resultado);
			//Obteniendo datos de la tabla info_usr
			$consulta="SELECT * FROM info_usr WHERE id_usr='$buscarID'";
    		$resultado=$conexion->query($consulta);
    		$datos_info=mysqli_fetch_array($resultado);
			$infoCuenta = array("$datos_cuenta[id_usr]", "$datos_cuenta[usr_name]", "$datos_cuenta[usr_passw]","$datos_cuenta[is_admin]", "$datos_info[nombre]", "$datos_info[apellido]", "$datos_info[fecha_nacimiento]", "$datos_info[email]", "$datos_info[telefono]", "$datos_info[pais]", "$datos_info[direccion_calle]", "$datos_info[estado]", "$datos_info[ciudad]", "$datos_info[codigo_postal]");
			//Obteniendo datos de la tabla gustos_depa_usr
    		$consulta="SELECT * FROM gustos_depa_usr WHERE id_usr='$buscarID'";
    		$resultado=$conexion->query($consulta);
    		if($resultado->num_rows>0){
				while($row = $resultado->fetch_assoc()){
					array_push($infoCuenta, "$row[depa]");
				}
				echo json_encode($infoCuenta);
    		}
    		else{
				echo json_encode($infoCuenta);
    		}
		}
		else{
			echo "1";
		}
		mysqli_close($conexion);
	}
 ?>