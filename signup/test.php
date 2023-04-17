<div class="sign-in-container page-top">
    <form action="signup.php" medthod="post">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        
        <input type="submit" name="signupbtn" value="Sign Up">
    </form>

    <form method="post">
          Enter value1 :<input type="text" name="str1"><br/>
          Enter value2 :<input type="text" name="str2"><br/>
          <input type="submit" value="Sum" name="Submit1"><br/><br/>

          <?php
            if(isset($_POST["Submit1"]))
            {
            $sum=$_POST['str1'] + $_POST['str2'];
            echo "The sum = ". $sum;

            }
          ?>
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
