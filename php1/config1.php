<?php

$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

   

/*
$dbhost = 'localhost';
$dbuser = 'root';
$dbpsw = 'milkshake';
$dbname = 'MyKindHome';

echo "hi";

$con  = mysqli_connect($dbhost, $dbuser, $dbpsw, $dbname);
*/
/*if($link === false){
	die("ERROR" . mysqli_connect_error())
}; */

?>

