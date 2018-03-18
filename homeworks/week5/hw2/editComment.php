<?php

function edit($newContent ,$comment_id ,$random_id){
	//確認是否是修改自己的留言
	include('connect.php');
	$id_sql = "SELECT c.comment_id, c.content, u.nickname, uc.id FROM xu3cl40122_comment AS c INNER JOIN xu3cl40122_users AS u ON user_id = sid INNER JOIN xu3cl40122_users_certificate AS uc ON uc.nickname = u.nickname WHERE c.comment_id = '$comment_id'";
	$id_result = $conn->query($id_sql);
	if($id_result->num_rows > 0){
		$id_row = $id_result->fetch_assoc();
		//如果是 進行修改
		if ($id_row['id'] == $random_id){
			$sql = "UPDATE xu3cl40122_comment SET content ='$newContent' WHERE comment_id = $comment_id";
			if ($conn->query($sql) === TRUE) {
		    	echo "pass";
			} else {
			    echo "Error updating record: " . $conn->error;
			}
		}
		else{
			echo "無權限修改該留言";
		}
		
	}
	

$conn->close();
}

function delete($comment_id ,$random_id){
	//確認是否是刪除自己的留言
	include('connect.php');
	$id_sql = "SELECT c.comment_id, c.content, u.nickname, uc.id FROM xu3cl40122_comment AS c INNER JOIN xu3cl40122_users AS u ON user_id = sid INNER JOIN xu3cl40122_users_certificate AS uc ON uc.nickname = u.nickname WHERE c.comment_id = '$comment_id'";
	$id_result = $conn->query($id_sql);
	if($id_result->num_rows > 0){
		$id_row = $id_result->fetch_assoc();
		//如果是 進行刪除
		if ($id_row['id'] == $random_id){
			$sql = "DELETE FROM xu3cl40122_comment WHERE comment_id= $comment_id";
			if ($conn->query($sql) === TRUE) {
		    	echo "pass";
			} else {
			    echo "Error updating record: " . $conn->error;
			}
		}
		else{
		echo "無權限刪除該留言";
		}
	}
$conn->close();
}

//  --- start ---
header("Content-Type: application/json; charset=UTF-8");
$random_id = $_COOKIE['board_random_id'];
$obj = json_decode($_POST["x"], false);
if ($obj->type == 'edit'){
	edit($obj->newContent, $obj->comment_id, $random_id);
}
else if($obj->type == 'delete'){
	delete($obj->comment_id, $random_id);
}

?>