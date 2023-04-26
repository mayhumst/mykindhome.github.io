<?php 

$db_user = 'root';
$db_pass = 'MidnightV0lc@n0s';
$db_name = "MyKindHome";

$db = mysqli_connect('localhost', 'root', 'MidnightV0lc@n0s', 'MyKindHome') or die('Could not connect to database');

/*
$db = new PDO('mysql:host = localhost; dbname='. $db_name .'; charset=utf8', $db_user, $db_pass);

$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


session_start()

// initializing variables
$email = "";

$errors = array();


// connecting to db
$db = mysqli_connect('localhost', 'root', '', 'mykindhome') or die('Could not connect to database');

// register users
$email = mysqli_real_escape_string($db, $_POST['email']);
$psw = mysqli_real_escape_string($db, $_POST['psw']);

// form validation
if(empty($email)) {array_push($errors, "Email is required")};
if(empty($psw)) {array_push($errors, "Password is required")};

// check db for existing user with same email
$user_check_query = "SELECT * FROM users WHERE email = '$email' LIMIT 1";

$results = mysqli_query($db, $user_check_query);
$user = mysqli_fetch_assoc($results);

if($user){
    if($user['email'] === $email){array_push($errors, "An account with that email already exists");}
}

// register the user if no error
if(count($errors) == 0){
    $password = password_hash($psw, PASSWORD_DEFAULT); //psw encryption
    $id = md5(uniqid());

    // -------------------------- NEED TO GENERATE A UNIQUE ID AND STORE IT IN MYSQL -----------------------
    $query = "INSERT into users (id, email, psw) VALUES ('$id', '$email', '$psw')";

    mysqli_query($db, $query);
    $_SESSION['email'] = $email;
    $_SESSION['success'] = "You are now logged in";

    header('location: index.php')

//-----------------------------------------LOGIN USER------------------------------------------------

if(isset($_POST['login_user'])){
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['psw']);

    if(empty($email)){
        array_push($errors, Email is required);
    }
}

*/

?>




