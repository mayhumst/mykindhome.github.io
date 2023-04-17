<?php
  require_once('config.php');
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sign In</title>
<html>


<!--STYLING-->

<head>
  <link rel="stylesheet" href="../css/style.css" media="screen" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <!--Linked: DM Sans, weight 400 500 700-->
</head>

<body>

<!--BEGIN HEADER, NAVBAR-->
<div class = "header">

  <nav>
    <div class="left">
    <img class="logo" src = "../resources/logo.png">
    <ul>
      <li><a href="../html/mainPages/game.html">Play</a>
      <li><a href="../html/mainPages/lessons.html">Learn More</a></li>
      <li><a href="../html/mainPages/about.html">About</a>
      <li><a href="../html/mainPages/analytics.html">Analytics</a></li>
    </ul>
  </div>
    <a class="current-page" class = "signin" href="../html/mainPages/signin.html">Sign In</a>
  </nav>
  
  </div>

<!--BEGIN OTHER INFO-->


<div class="sign-in-container page-top">
    <form action="signup.php" method="post">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        
        <input type="submit" name="signupbtn" value="Sign Up">
    </form>


</div>

<!--CAPTURING DATA-->
<div>
  <?php
  
  if(isset($_POST["signupbtn"])){
    echo 'User submitted';
    $email = $_POST['email'];
    $psw = $_POST['psw'];

    $sql = "INSERT INTO users (email, psw) VALUES(?,?)"; 
    $stmtinsert = $db->prepare($sql);
    $result = $stmtinsert->execute([$email, $psw]);

    if($result){
      echo 'Successfully saved.';
    }else{
      echo 'There were errors while saving the data';
    }
   }
   ?> 
</div>


</body>


  
    



