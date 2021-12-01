<?php
 include 'conn.php';

 if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['pwd'];

}
$check = $conn->prepare('SELECT * FROM users WHERE email = ? AND password = ?');
$result = $check->execute([$email,$password]);

if($result){
    session_start();
    $_SESSION["email"] = $email;
    header("location: main.html");
}
else{
    header("location: index.html");
}
?>