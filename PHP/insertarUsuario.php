<?php  
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(!(@$_GET['cuenta']=="") AND !(@$_GET['contra']=="") AND !(@$_GET['nombre']=="") AND !(@$_GET['apellidos']=="") AND !(@$_GET['nacimiento']=="") AND !(@$_GET['correo']=="") AND !(@$_GET['tel']=="") AND !(@$_GET['pais']=="") AND !(@$_GET['estado']=="") AND !(@$_GET['ciudad']=="") AND !(@$_GET['calle']=="") AND !(@$_GET['postal']=="")){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();	
	    //Se encripta la contraseña con md5
	    $passEncrip=md5(@$_GET[contra]);
	   	//Cambiar formato de la fecha a dd-mm-yyyy
	    $fechaN= date('d-m-Y', strtotime($_GET['nacimiento']));
	    //obtener valor de adminCB
	    $admin=@$_GET["adminCB"];
		if(empty($admin)) {
			$admin='0';
		}
	    //Consulta de la tabla cuenta_usr
	    $consulta_cuenta_usr="INSERT INTO cuenta_usr(usr_name, usr_passw, is_admin)" . "VALUES ('$_GET[cuenta]', '$passEncrip', '$admin')";
	    if($conexion->query($consulta_cuenta_usr) == TRUE){
	    	//Consulta de la tabla info_usr
	    	$consulta_info_usr="INSERT INTO info_usr(id_usr, nombre, apellido, fecha_nacimiento, email, telefono, pais, direccion_calle, estado, ciudad, codigo_postal)" . "VALUES (LAST_INSERT_ID(),'$_GET[nombre]', '$_GET[apellidos]', '$fechaN', '$_GET[correo]', '$_GET[tel]', '$_GET[pais]', '$_GET[calle]', '$_GET[estado]', '$_GET[ciudad]', '$_GET[postal]')";  
	    	if($conexion->query($consulta_info_usr) == TRUE){
	    		//Recolectar las checkbox y almacenarlas en la base de datos tabla gustos_depa_usr
			    $gustos=@$_GET["gustos"];
				if(!empty($gustos)) {
					$count = count($gustos);
					$contador=0;
					for ($i = 0; $i < $count; $i++) {
					    $consulta_gustos_depa_usr="INSERT INTO gustos_depa_usr(id_usr, depa)" . "VALUES (LAST_INSERT_ID(), '$gustos[$i]')";
					    if($conexion->query($consulta_gustos_depa_usr)== TRUE){
					    	$contador=$contador+1;
					    }
					}
					if($contador!=$count){
						echo "Error: falló consulta_gustos_depa_usr -> $conexion->error";
					}
				} 
				if($_SERVER["HTTP_REFERER"]=="http://localhost/Tienda/registroUsuario.html?"){
					header("location: ../registroUsuarioExitoso.html");
				}
				elseif($_SERVER["HTTP_REFERER"]=="http://localhost/Tienda/darDeAltaU.html"){
					header("location: ../altaUsuarioExitoso.html");
				}
				
	    	}
	    	else{
	    		echo "Error: falló consulta_info_usr -> $conexion->error";
	    	}
		}
		else{
			echo "Error: falló consulta_cuenta_usr -> $conexion->error";
		}
	}
	else{
		echo "Error: Datos incompletos";
	}
?>
