<?php

  require 'database.php';

  $message = '';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $sql = "INSERT INTO users (email, password) VALUES (:email, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
      $message = 'Se creo exitosamente su usuario';
    } else {
      $message = 'Lo sentimos debe haber un error con tu cuenta';
    }
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrese</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="img/diecam-logotipo-175w.webp">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    </style>
</head>
<body>  

<?php require 'header.php' ?>

<?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>

<br><br><br><br><br><br><br><br><br>

<h1>Registrarse</h1>
<a href="index.php">Volver</a>
    <span>o <a href="login.php">Inicie Sesion</a></span>
<form action="signup.php" method="POST">
      <input name="email" type="text" placeholder="Enter your email">
      <input name="password" type="password" placeholder="Enter your Password">
      <input name="confirm_password" type="password" placeholder="Confirm Password">
      <input type="submit" value="Submit">
    </form>


<br><br><br><br><br><br><br><br><br>

<?php require 'footer.php' ?> 

</body>
</html>