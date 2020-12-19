
    $(document).ready(function() {
       var js=[];//Almacena el tipo de usario conectado
       var datosComen=[];//Almacena el id de la cuenta conectada y el id del producto 
       var idUsr;
       var idProduc;
       var tipoCuenta;
       //Consulta para obtener la info del comentario
       $.ajax({
            url: 'PHP/infoComentario.php',
            success: function(resp2) {
                datosComen= JSON.parse(resp2);      
                if(datosComen.length==3){
                    idUsr=datosComen[0];
                    idProduc=datosComen[1];
                    tipoCuenta=datosComen[2];
                }
                else{
                    idUsr=datosComen[0];
                }
                                        
            }        
        });
       $.ajax({
            url: 'PHP/consultaSesion.php',
            success: function(resp) {
                if(resp=="1"){
                    $('#opcionesDeCompra').append('<tr><td class="msj-samall">Para realizar una compra antes deberas de</td></tr>'+
                                                    '<tr><td class="renDetalles2">'+
                                                        '<p class="button-posi"><a class="enlace1" href="iniciarSesion.html"><i class="far fa-id-badge"></i> Iniciar sesión</a></p>'+
                                                    '</td></tr>');
                     $('#hacerComentario').append('<br><p class="button-posi"><label class="msj-samall">Para escribir un comentario antes deberas de</label><br><br><a class="enlace1" href="iniciarSesion.html"><i class="far fa-id-badge"></i> Iniciar sesión</a></p>');
                }
                else{
                    js= JSON.parse(resp);
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
                         $('#hacerComentario').append('<br><p class="button-posi"><button class="button-registro-usuario" id="hacerComentario"><i class="fas fa-comment-dots"></i> Comentar</button></p>');
                    }
                }
                //Hacer comentario
                $('#hacerComentario').click(function(e){
                    $('#ecribirComentario').html('<form method="GET" id="enviarComentario">'+
                                                    '<ul class="inputs-contenedor-registro-usuario">'+
                                                        '<li class="input-group-registro-usuario">'+
                                                            '<label class="titulo-label-registro-usuario">Ingrese su comentario:</label><br>&nbsp;'+
                                                            '<input id="usrId" name="usrId" type="hidden" value="'+idUsr+'">'+
                                                            '<input id="prodId" name="prodId" type="hidden" value="'+idProduc+'">'+
                                                            '<textarea class="textarea-registro" id="comentarioP" name="comentarioP" rows="7" cols="50" placeholder="¿Qué te parecio este producto?" required></textarea>&nbsp;&nbsp;'+
                                                            '<button class="button-registro-usuario2" id="enviarComen">Enviar</button>&nbsp;&nbsp;'+
                                                            '<button class="button-registro-usuario2" id="cancelarComen">Cancelar</button>'+
                                                         '</li>'+
                                                    '</ul><br>'+
                                                    '</form>');
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
                });
                
                //Lista de comentarios
                $.ajax({
                    type: 'GET',
                    url: 'PHP/consultaListaComentarios.php',
                    success: function(resp4) {
                        if(resp4=='1'){
                            $('#listaComentarios').html('<label class="titulo-label-registro-usuario2">Este producto aún no tiene comentarios</label>'); 
                        }
                        else{
                            listaCom= JSON.parse(resp4);
                            for(var i=0; i< listaCom.length;i++){
                                var nomCuenta=[];
                                var idU=listaCom[i].id_usr;
                                var numC="";
                                $.ajax({
                                    type: 'GET',
                                    url: 'PHP/consultaBusquedaU.php',
                                    async:false,
                                    data: { buscarID : idU},
                                    success: function(resp5) {
                                        nomCuenta= JSON.parse(resp5);
                                        numC=nomCuenta[1];
                                    }
                                });
                                if(nomCuenta[0]==idUsr || tipoCuenta=="1"){
                                $('#listaComentarios').append('<table border="0" width="75%">'+
                                                                '<tr>'+
                                                                    '<td class="nomC"><b>'+numC+'</b></td>'+
                                                                    '<td class="fecha">'+listaCom[i].fecha_comentario+'</td>'+
                                                                    '<td class="eliminar"><form method="GET" id="formIDCom"><input name="idComen" type="hidden" value="'+listaCom[i].id_comentario+'"><bottom id="eliminarCom"class="eliminar"><i class="fas fa-trash-alt"></i></bottom><form></td>'+
                                                                '</tr>'+ 
                                                                '<tr>'+
                                                                    '<td colspan="2"><hr>'+listaCom[i].comentario+'</td>'+
                                                                '</tr>'+
                                                            '</table><br>');
                                    $('#eliminarCom').click(function(e){
                                        e.preventDefault();
                                        var r=confirm("Esta seguro de que quiere eliminar el comentario");
                                        if (r==true) {
                                            var formIDCom=$('#formIDCom').serialize();
                                            $.ajax({
                                                type: 'GET',
                                                url: 'PHP/eliminarComentario.php',
                                                data: formIDCom,
                                                success: function(resp6) {
                                                    if(resp6=="1"){
                                                        alert("El comentario ha sido eliminado");
                                                        location.reload();
                                                    }
                                                    else{
                                                        alert("Error: el comentario no ha sido eliminado");
                                                    }
                                                }
                                            });
                                        } 
                                    }); 
                                }
                                else{
                                 $('#listaComentarios').append('<table border="0" width="70%">'+
                                                                '<tr>'+
                                                                    '<td class="nomC"><b>'+numC+'</b></td>'+
                                                                    '<td class="fecha">'+listaCom[i].fecha_comentario+'</td>'+
                                                                '</tr>'+
                                                                '<tr>'+
                                                                    '<td colspan="2"><hr>'+listaCom[i].comentario+'</td>'+
                                                                '</tr>'+
                                                            '</table><br>');    
                                }
                               
                            }
                        }
                    }
                });
            }
        });
    });
