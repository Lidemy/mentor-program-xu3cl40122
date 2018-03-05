

<?php
include('connect.php');
$sql = "SELECT * FROM xu3cl40122_comment";
$result=mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array ($result)){
	echo $row['comment_id'],$row['content'];
}






?>