
    $(document).ready(function() {
       $.ajax({
            url: 'PHP/consultaSesion.php',
            success: function(resp) {
                if(resp=="1"){
                    $('#opcionesDeCompra').append('<tr><td class="msj-samall">Para realizar una compra antes deberas de</td></tr>'+
                                                    '<tr><td class="renDetalles2">'+
                                                        '<p class="button-posi"><a class="enlace1" href="iniciarSesion.html"><i class="far fa-id-badge"></i> Iniciar sesión</a></p>'+
                                                    '</td></tr>');
                }
                else{
                    var js= JSON.parse(resp);
                    if(js[2]=="0"){
                         $('#inputCantidad').append('<form method="get">'+
                                                        'Cantidad: <input class="inputs-registro-usuario2" type="number" id="cantidad" name="cantidad" size="20" min="1" value="1"> unidades'+
                                                    '</form>');
                         $('#opcionesDeCompra').append('<tr><td class="renDetalles2">'+
                                                            '<p class="button-posi"><button class="button-registro-usuario" id="compraAhora">Comprar ahora</button></p>'+
                                                        '</td></tr>'+
                                                        '<tr><td class="renDetalles">'+
                                                            '<p class="button-posi"><button class="button-registro-usuario" id="carrito">Agregar al carrito</button></p>'+
                                                        '</td></tr>');
                         $('#hacerComentario').append('<br><p class="button-posi"><button class="button-registro-usuario" id="hacerComentario"><i class="fas fa-comment-dots"></i> Comentar</button></p>');
                    }
                    else if(js[2]=="1"){
                        $('#opcionesDeCompra').append('<tr><td class="msj-samall">Los administradores no pueden realizar compras</td></tr>'+
                                                    '<tr><td class="renDetalles2">'+
                                                        '<p class="button-posi"><a class="enlace1" href="PHP/cerrarSesion.php?cerrar=true"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a></p>'+
                                                    '</td></tr>');
                    }
                }
                //Hacer comentario
                $('#hacerComentario').click(function(e){
                    $.ajax({
                        url: 'PHP/infoComentario.php',
                        success: function(resp2) {
                            var datosComen= JSON.parse(resp2);
                            $('#ecribirComentario').html('<form method="GET" id="enviarComentario">'+
                                                    '<ul class="inputs-contenedor-registro-usuario">'+
                                                        '<li class="input-group-registro-usuario">'+
                                                            '<label class="titulo-label-registro-usuario">Ingrese su comentario:</label><br>&nbsp;'+
                                                            '<input id="usrId" name="usrId" type="hidden" value="'+datosComen[0]+'">'+
                                                            '<input id="prodId" name="prodId" type="hidden" value="'+datosComen[1]+'">'+
                                                            '<textarea class="textarea-registro" id="comentarioP" name="comentarioP" rows="7" cols="50" placeholder="¿Qué te parecio este producto?" required></textarea>&nbsp;&nbsp;'+
                                                            '<button class="button-registro-usuario2" id="enviarComen">Enviar</button>&nbsp;&nbsp;'+
                                                            '<button class="button-registro-usuario2" id="cancelarComen">Cancelar</button>'+
                                                         '</li>'+
                                                    '</ul><br>'+
                                                    '</form>');
                            //const formulario=document.getElementById("enviarComentario");
                            //window.scrollTo(0,document.querySelector("#enviarComentario").scrollHeight);
                            $('#cancelarComen').click(function(e){
                                e.preventDefault();
                                $('#ecribirComentario').html('');
                            }); 
                            $('#enviarComen').click(function(e){
                                e.preventDefault();
                                var datos=$('#enviarComentario').serialize();
                                $.ajax({
                                    type: 'GET',
                                    url: 'PHP/consultaAgregarC.php',
                                    data: datos,
                                    success: function(resp3) {
                                        if(resp3=='1'){
                                            $('#ecribirComentario').html('<b class="titulo-label-registro-usuario2">Gracias por comentar :)</b>');
                                        } 
                                        else{
                                           $('#ecribirComentario').html('<label class="titulo-label-registro-usuario2">'+resp3+'</label>'); 
                                        }
                                    }
                                });
                            });                               
                        }
                            
                    }); 
                });
            }
        });
    });
