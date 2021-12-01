<?php
include 'conn.php';

$errors = array();

if(isset($_POST['createAccount'])){
    $email = $_POST['emailRegister'];
    $password = $_POST['pwdRegister'];
}

if(empty($email)) {array_push($errors, "Email address is required"); }
if(empty($password)) {array_push($errors, "Password is required"); }


if(count($errors) == 0){
    $insert = $conn->prepare('INSERT INTO users ( email, password) VALUES (:email,:password)');
    $insert->execute([
        ':email' => $email,
        ':password' => $password
    ]);
}
?>