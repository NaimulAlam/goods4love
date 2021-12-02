<?php
include 'conn.php';

$errors = array();

if(isset($_POST['createAccount'])){
    $email = $_POST['emailRegister'];
    $password = $_POST['pwdRegister'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone = $_POST['phone'];
}

if(empty($email)) {array_push($errors, "Email address is required"); }
if(empty($password)) {array_push($errors, "Password is required"); }


if(count($errors) == 0){
    $insert = $conn->prepare('INSERT INTO users ( email, password, name, surname, phone) VALUES (:email,:password, :name, :surname, :phone)');
    $insert->execute([
        ':email' => $email,
        ':password' => $password,
        ':name' => $name,
        ':surname' => $surname,
        ':phone' => $phone
    ]);
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION["email"] = $email;

    header('Location: main.php');
}else{
    header("location: index.html");
}
?>