<?php

  session_start();

  if (isset($_SESSION['user_id'])) {
    
;
  }
  require 'database.php';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $records = $conn->prepare('SELECT id, email, password FROM users WHERE email = :email');
    $records->bindParam(':email', $_POST['email']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      $_SESSION['user_id'] = $results['id'];
      

    } else {
      $message = 'Lo sentimos, las credenciales que ingresaste son incorrectas';
    }
  }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesion</title>
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

    <h1>Iniciar Sesion</h1>
    <a href="index.php">Volver</a>
    <span>o <a href="siginup.php">Registrese</a></span>

    <form action="login.php" method="POST">
      <input name="email" type="text" placeholder="Enter your email">
      <input name="password" type="password" placeholder="Enter your Password">
      <input type="submit" value="Submit">
    </form>
    
<br><br><br><br><br><br><br><br><br><br>

    <?php require 'footer.php' ?> 
</body>
</html>