<?php

    try{
        $host = "localhost";
        $dbname = "g4l";
        $user = "root";
        $pwd = "";

        $conn = new PDO("mysql:host=$host;dbname=$dbname",$user,$pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo $e->getMessage();
    }

?>