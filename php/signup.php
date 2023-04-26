
<?php 

//include('signup_config.php')

require_once('config.php'); //establishes connection to mysql server
?>

<!DOCTYPE html>
<html>
<!--STYLING-->
<head>
  <meta charset="UTF-8">
  <title>Sign In</title>
  <link rel="stylesheet" href="../css/style.css?v=<?php echo time(); ?>" media="screen" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <!--Linked: DM Sans, weight 400 500 700-->
</head>

<body>

<!-- This is the sign UP form. This page is nested within signup.html-->
<div class="sign-in-container"> 
    <form action="signup.php" method="post">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="janedoe@gmail.com" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="12345" name="psw" required>
        
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

<html>