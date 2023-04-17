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
        <form action="signin.php" method="post">
            <h1>Sign In</h1>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <input type="submit" name="signinbtn" value="Sign In">
        </form>
</div>

<!--CAPTURING DATA-->

</body>
</html>