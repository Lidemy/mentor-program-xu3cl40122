<?php
$servername = "localhost";
$username = "mentor_admin";
$password = "mentor_admin123";
$dbname = "mentor_program_db";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// Change character set to utf8
mysqli_set_charset($conn,"utf8");
?>