<?php  
	//Sentencia para verificar que todos los campos hayan sido ingresados
	if(!(@$_GET['idU']=="") AND!(@$_GET['cuenta']=="") AND !(@$_GET['nombre']=="") AND !(@$_GET['apellidos']=="") AND !(@$_GET['nacimiento']=="") AND !(@$_GET['correo']=="") AND !(@$_GET['tel']=="") AND !(@$_GET['pais']=="") AND !(@$_GET['estado']=="") AND !(@$_GET['ciudad']=="") AND !(@$_GET['calle']=="") AND !(@$_GET['postal']=="")){
		//Conexón a la base de datos
		include("conexionBaseDatos.php");
	    $conexion = conectar();	
		//Determinar si contra esta vacía
		if(@$_GET['contra']==""){
			$consulta="SELECT usr_passw FROM `cuenta_usr` WHERE id_usr=$_GET[idU]";
			$resultado=$conexion->query($consulta);
			if($resultado==true){
				$contraBD=mysqli_fetch_array($resultado);
				$passEncrip=$contraBD['usr_passw'];
			}
			else{
				echo "Error: falló consulta -> $conexion->error";
			}
		}
		else{
			//Se encripta la contraseña con md5
	    	$passEncrip=md5(@$_GET[contra]);
		}
	    //Cambiar formato de la fecha a dd-mm-yyyy
	    $fechaN= date('d-m-Y', strtotime($_GET['nacimiento']));
	    //obtener valor de adminCB
	    $admin=@$_GET["adminCB"];
		if(empty($admin)) {
			$admin='0';
		}
		//Consulta de la tabla cuenta_usr para modificación
		$consulta_cuenta_usr="UPDATE cuenta_usr SET usr_name='$_GET[cuenta]', usr_passw='$passEncrip', is_admin=$admin WHERE id_usr=$_GET[idU]";
		 
		if($conexion->query($consulta_cuenta_usr) == TRUE){
	    	//Consulta de la tabla info_usr
	    	$consulta_info_usr="UPDATE info_usr SET nombre='$_GET[nombre]', apellido='$_GET[apellidos]', fecha_nacimiento='$fechaN', email='$_GET[correo]', telefono='$_GET[tel]', pais='$_GET[pais]', direccion_calle='$_GET[calle]', estado='$_GET[estado]', ciudad='$_GET[ciudad]', codigo_postal='$_GET[postal]' WHERE id_usr=$_GET[idU]"; 
	    	if($conexion->query($consulta_info_usr) == TRUE){
	    		//Se elimina los registros de la tabla gustos_depa_usr para volverla a insertarlos con la nueva información 
				$consulta_eliminar="DELETE FROM gustos_depa_usr WHERE id_usr=$_GET[idU]";
				if($conexion->query($consulta_eliminar) == false){
					echo "Error: falló consulta_eliminar -> $conexion->error";
				}
				else{
					//Recolectar las checkbox y almacenarlas en la base de datos tabla gustos_depa_usr
			    	$gustos=@$_GET["gustos"];
			    	if(!empty($gustos)) {
			    		$count = count($gustos);
						$contador=0;
						for ($i = 0; $i < $count; $i++) {
						    $consulta_gustos_depa_usr="INSERT INTO gustos_depa_usr(id_usr, depa)" . "VALUES ($_GET[idU], '$gustos[$i]')";
						    if($conexion->query($consulta_gustos_depa_usr)== TRUE){
						    	$contador=$contador+1;
						    }
						}
						if($contador!=$count){
							echo "Error: falló consulta_gustos_depa_usr -> $conexion->error";
						}
					}
					echo "1";
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