<?php

    try{
        $host = "localhost";
        $dbname = "id17967575_g4l";
        $user = "id17967575_admin";
        $pwd = "f##/e[Od{n44YPax";

        $conn = new PDO("mysql:host=$host;dbname=$dbname",$user,$pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo $e->getMessage();
    }

?>