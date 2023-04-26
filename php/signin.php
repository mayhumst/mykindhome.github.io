<?php 

//include('signup_config.php')

//require_once('singup_config.php'); //establishes connection to mysql server
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../css/style.css?v=<?php echo time(); ?>" media="screen" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <!--Linked: DM Sans, weight 400 500 700-->
  <script type="text/javascript" src="../../resources/scroll.js"></script>
</head>
 
<body> <!-- This is the sign IN form. This page is nested within signin.html-->
    <div class="sign-in-container">
        <?php
        if(isset($_POST['login_user'])){
            $email = mysqli_real_escape_string($db, $_POST['email']);
            $password = mysqli_real_escape_string($db, $_POST['psw']);

            //require_once('singup_config.php'); //establishes connection to mysql server
            
            $sql = "SELECT * FROM users WHERE emeail = '$email'";
            $result = mysqli_query($db, $sql);
            $user = mysqli_fetch_array($result, MYSQLI_ASSOC);

            if ($user){
                if (password_verify($psw, $user["psw"])){
                    header("Location: game.html");
                    die();
                }else{
                    echo "<div class='alert alert-danger'>Password does not match</div>";

                }
            }else{
                echo "<div class='alert alert-danger'>Email does not match</div>";
            }


}


        ?>

        <form action="signin.php" method="post">
            <h1>Log In</h1>
            <label for="email">Email</label>
            <input type="email" placeholder="johndoe@gmail.com" id="email" name="email" required>

            <label for="password">Password</label>
            <input type="password" placeholder="12345" id="password" name="password" required>

            <input type="submit" name="signinbtn" value="Log In">

            <br><br><p>Not a user? <a href="signup.php"><b>Register here</b></a></p>
        </form>
</div>

<!--CAPTURING DATA-->



</body>
</html>