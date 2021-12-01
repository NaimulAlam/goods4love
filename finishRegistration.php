<?php
include 'conn.php';

$errors = array();

if(isset($_POST['createAccount'])){
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone = $_POST['phone'];
}

if (empty($name)) { array_push($errors, "Name is required"); }
if(empty($surname)) { array_push($errors, "Surname is required"); }
if(empty($phoneNumber)) { array_push($errors, "Phone number is required"); }

if(count($errors) == 0){
    $insert = $conn->prepare('INSERT INTO users (name, surname, phone) VALUES (:name,:surname, :phone)');
    $insert->execute([
        ':name' => $name,
        ':surname' => $surname,
        ':phone' => $phone
    ]);
}
?>