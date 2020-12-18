<?php
    session_start();
    if(@$_REQUEST["cerrar"]=="true"){
        session_unset();
        session_destroy();
        header("Location: ../index.html");
    }
?>