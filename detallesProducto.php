<!--Programación de sistemas web ISC 5°A-->
<!--Proyecto final-->

<html>
	<head>
		<!--Formato de codificación UNICODE-->
		<meta charset="UTF-8"> 
		<title>Dar de alta a un usuario</title>
		<!--Estilos SCC-->
		<link rel="stylesheet" type="text/css" href="estilosCSS.css">
		<!--Font Awesome, para los iconos-->
		<script src="https://kit.fontawesome.com/429868deb5.js"></script>
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
		<!--CDN para trabajar con jQuery-->
		<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<!--JS para establacer dinamicamente el index dependiendo de la sesión -->
		<script type="text/javascript" src="JavaScript/indexDinamico.js"></script>
		<!--JS para establacer dinamicamente el contenido de los detalles de compra dependiendo de la sesión -->
		<script type="text/javascript" src="JavaScript/detallesPDinamico.js"></script>
	</head>
	<body>
		<!--Barra de navegación--------------------------------------------------------------------------------------------------------->
		<div class="contenido">
			<nav class="barra-menu-1">
				<a href="index.html"><img class="barra-logo" src="imágenes/happy_deal.png" alt="happy deal logo"></a>
				<div id="nav-opciones"></div>	
			</nav>
		</div><br><br><br>
		<!--Contenido de la página--------------------------------------------------------------------------------------------------------->
		<div class="registro-usuario-2">
			<?php 
				session_start();
				if(isset($_GET['datosProdu'])){
					$_SESSION["datosProdu"]=$_GET['datosProdu'];
				}
				//Conexón a la base de datos
				include("PHP/conexionBaseDatos.php");
				$conexion = conectar();	
			  	//Consulta 
			  	$consulta="SELECT * FROM producto WHERE id_produc='$_SESSION[datosProdu]'";
			  	$resultado=$conexion->query($consulta);
			  	if($resultado == TRUE){
					$datos=mysqli_fetch_array($resultado);
					$vecData = array("$datos[id_produc]", "$datos[nom_produc]", "$datos[descripcion_produc]","$datos[imagen_produc]", "$datos[precio_produc]", "$datos[existencia_produc]", "$datos[depa]");
					
					echo '<p class="titilo-registro-usuario"><i class="fas fa-tag"></i> Detalles del producto</p>';
					echo '<table border="0" class="tablaDetalles">
							<tr>
								<td class="renDetalles3">
									<img class="img_detalle" src="uploads/'.$vecData[3].'" alt="'.$vecData[3].'" width="350px"> 
								<td>
								<td class="colDetalles">
									<table  border="0">
										<tr><td class="renDetalles2">'.$vecData[1].'<hr class="linea1"></td></tr>
										<tr><td class="renDetalles"><b>$'.$vecData[4].'.00</b><hr class="linea1"></td></tr>
										<tr><td class="renDetalles4"><label>Detalles: '. str_replace("•", "<br><br>•",$vecData[2]).'</label></td></tr>
									</table>
								</td>
							</tr>
						<table>
						<p class="titilo-registro-usuario"><i class="fas fa-shopping-bag"></i> Realizar pedido</p>
						<table border="0" class="tablaDetalles" cellspacing="10" cellpadding="10">
							<tr>
								<td class="colDetalles2">
									<table  border="0" cellspacing="20" cellpadding="20" class="tablaDetalles">
										<tr><td class="renDetalles2">Unidades disponibles: '.$vecData[5].'</td></tr>
										<tr><td class="renDetalles2" id="inputCantidad">
								
										</td></tr>
									</table>
								</td>
								<td class="colDetalles2" >
									<table  border="0" cellspacing="20" cellpadding="20" class="tablaDetalles" id="opcionesDeCompra">
									
									</table>
								</td>
							</tr>
						<table>
						<p class="titilo-registro-usuario"><i class="fas fa-comments"></i> Comentarios</p>


						<div id="hacerComentario"></div>
						<div id="ecribirComentario"></div>
						<br><hr class="linea1"><br>
						<div id="listaComentarios"></div>
						
					';

					
				}else{
					echo "<p>Error: falló consulta -> $conexion->error</p>";
				}
				mysqli_close($conexion);
			?>
		</div>	
	</body>
</html>