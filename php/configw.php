<?php 
/*

$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

*/

//establishes connection to mysql server
/*
$mysqli = new mysqli("localhost","root","milkshake","MyKindHome");

$Output = ''; // Initiate variable which will hold the data you want
 $S="select * from image";
        
 $res=mysqli_query($link,$S);
 
 if(mysqli_num_rows($res) > 0){
        
    while($row=mysqli_fetch_assoc($res)){
            
        $item_id = $row['id'];
        $category = $row['category'];
        $image = $row['image'];
            
        $Output .= '<div class="card col-md-2">
                        <p class="text-capitalize text-center text-info mt-2">' . $category . '</p>
                        <img class="card-img-top" src="' . $image . '" /><br />
                        <a href="delete.php?id=' . $item_id . '" class="btn btn-danger">delete</a><br />
                    </div>';
                  
    }
            
 }
            
if(isset($Output)){
        
    echo $Output;
        
}

*/


/*
session_start();

// initializing variables

$username = "";
$email = "",

$errors = array();

// connect to db

$db mysqli_connect('localhost', 'root', 'milkshake', 'MyKindHome') or die("could not connect to database");

// registering users
$email = mysqli_real_escape_string($db, $_POST['email']);
$psw = mysqli_real_escape_string($db, $_POST['psw']);

//form validation

*/
/*
/*
$link = mysqli_connect('localhost', 'root', 'password', 'MyKindHome');

if($link === false){
    //die("ERROR: Could not connect. " . mysqli_connect_error());
    echo "ERROR"}

*/

$db_user = 'root';
$db_pass = '';
$db_name = "MyKindHome1";

$db = new PDO('mysql:host = localhost; dbname='. $db_name .'; charset=utf8', $db_user, $db_pass);

$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$username = "";
$email = "";

$errors 



?>