<?php

include('connect.php');

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
/*
$obj = new stdClass();
$obj->user = 'admin';
$obj->content = '777';
$obj->parent_id = 1;
*/
$sql = "SELECT * FROM xu3cl40122_users WHERE nickname = '$obj->user'";
$result = $conn->query($sql);
    if ($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $sid = $row['sid'];
        $add_sql = "INSERT INTO xu3cl40122_comment (parent_id, content, user_id)
		VALUES ('$obj->parent_id', '$obj->content', '$sid')";
		if ($conn->query($add_sql) === TRUE) {
		    echo "pass";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
    }
$conn->close();

?>