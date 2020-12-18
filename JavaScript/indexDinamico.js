
    $(document).ready(function() {
       $.ajax({
            url: 'PHP/consultaSesion.php',
            success: function(resp) {
                
                if(resp=="1"){
                    $('#nav-opciones').html('<ul class="ul-hori"><li><a class="enlace1" href="iniciarSesion.html"><i class="far fa-id-badge"></i> Iniciar sesión</a></li></ul>');
                }
                else{
                    var js= JSON.parse(resp);
                    if(js[2]=="0"){
                        $('#nav-opciones').append('<ul class="ul-hori"><li class="li-1"><lavel class="titulo-Usr">Hola '+js[1]+'</lavel></li>'+
                        '<li class="li-1"><a class="enlace1" href="#"><i class="fas fa-shopping-cart"></i> Carrito</a></li>'+
                        '<li class="li-1"><a class="enlace1" href="PHP/cerrarSesion.php?cerrar=true"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a></li></ul>');

                    }
                    else if(js[2]=="1"){
                        $('#nav-opciones').append('<ul class="ul-hori"><li class="li-1"><lavel class="titulo-Usr">Hola '+js[1]+'</lavel></li>'+
                        '<li class="li-1"><a class="enlace2" href="#"><i class="fas fa-users"></i>  Usuarios</a>'+
                            '<ul class="submenu-op">'+
                                '<li><a href="verListaU.html"><i class="fas fa-eye"></i> Ver lista</a></il>'+
                                '<li><a href="darDeAltaU.html"><i class="fas fa-plus"></i> Dar de alta</a></il>'+
                                '<li><a href="darDeBajaU.html"><i class="fas fa-minus"></i> Dar de baja</a></il>'+
                                '<li><a href="modificarU.html"><i class="fas fa-edit"></i> Modificar</a></il>'+
                                '<li><a href="#"><i class="fas fa-envelope"></i> Mensaje</a></il>'+
                            '</ul>'+
                        '</li>'+
                         '<li class="li-1"><a class="enlace2" href="#"><i class="fas fa-boxes"></i> Productos</a>'+
                            '<ul class="submenu-op">'+
                                '<li><a href="verListaP.html"><i class="fas fa-eye"></i> Ver lista</a></il>'+
                                '<li><a href="agregarP.html"><i class="fas fa-plus"></i> Agregar</a></il>'+
                                '<li><a href="eliminarP.html"><i class="fas fa-minus"></i> Eliminar</a></il>'+
                                '<li><a href="modificarP.html"><i class="fas fa-edit"></i> Modificar</a></il>'+
                            '</ul>'+
                        '</li>'+
                        '<li class="li-1"><a class="enlace1" href="PHP/cerrarSesion.php?cerrar=true"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a></li></ul>');
                    }
                }
            }
        });
    });

