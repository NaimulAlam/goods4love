<?php
 include 'conn.php';

 if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['pwd'];

}
$check = $conn->prepare('SELECT * FROM users WHERE email = :emailLogin AND password = :pwdLogin');
$check->execute([
    ':emailLogin' => $email,
    ':pwdLogin' => $password
]);

if($check->fetch()){
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION["email"] = $email;

    header("location: main.php");
}
else{
    header("location: index.html");
}
?>