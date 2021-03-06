<?php

function edit($newContent ,$comment_id ,$random_id){
	//確認是否是修改自己的留言
	include('connect.php');
	$id_stmt = $conn->prepare("SELECT c.comment_id, c.content, u.nickname, uc.id FROM xu3cl40122_comment AS c INNER JOIN xu3cl40122_users AS u ON user_id = sid INNER JOIN xu3cl40122_users_certificate AS uc ON uc.nickname = u.nickname WHERE c.comment_id = ?");
	$id_stmt->bind_param('i',$comment_id);
	$id_stmt->execute();
	$id_result = $id_stmt->get_result();
	if($id_result->num_rows > 0){
		$id_row = $id_result->fetch_assoc();
		//如果是 進行修改
		if ($id_row['id'] == $random_id){
			$stmt = $conn->prepare("UPDATE xu3cl40122_comment SET content = ? WHERE comment_id = ?");
			$stmt->bind_param('si',$newContent, $comment_id);
			$status = $stmt->execute();
			if ($status === false) {
			  trigger_error($stmt->error, E_USER_ERROR);
			}else{
				$arr = array('result'=>'success');
				echo json_encode($arr);
			}
		}
		else{
			$arr = array('result'=>'notYour');
			echo json_encode($arr);
		}
		
	}
	

$conn->close();
}

function delete($comment_id ,$random_id){
	//確認是否是刪除自己的留言
	include('connect.php');
	$id_stmt = $conn->prepare("SELECT c.comment_id, c.content, u.nickname, uc.id FROM xu3cl40122_comment AS c INNER JOIN xu3cl40122_users AS u ON user_id = sid INNER JOIN xu3cl40122_users_certificate AS uc ON uc.nickname = u.nickname WHERE c.comment_id = ?");
	$id_stmt->bind_param('i',$comment_id);
	$id_stmt->execute();
	$id_result = $id_stmt->get_result();
	if($id_result->num_rows > 0){
		$id_row = $id_result->fetch_assoc();
		//如果是 進行刪除
		if ($id_row['id'] == $random_id){
			$sql = "DELETE FROM xu3cl40122_comment WHERE comment_id= $comment_id";
			if ($conn->query($sql) === TRUE) {
		    	$arr = array('result'=>'success');
				echo json_encode($arr);
			} else {
			    echo "Error updating record: " . $conn->error;
			}
		}
		else{
			$arr = array('result'=>'notYour');
			echo json_encode($arr);
		}
	}
$conn->close();
}

//  --- start ---
header("Content-Type: application/json; charset=UTF-8");
$random_id = $_COOKIE['board_random_id'];
if ($_POST['type'] == 'edit'){
	edit($_POST['content'], $_POST['comment_id'], $random_id);
}
else if($_POST['type'] == 'delete'){
	delete($_POST['comment_id'], $random_id);
}

?>