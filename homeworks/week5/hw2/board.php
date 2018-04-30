<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="normalize.css">
		<link rel="stylesheet" type="text/css" href="board.css">
		<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script type="text/javascript" src="bd_jquery.js"></script>
		<title>留言板</title>
	</head>
	<!--- check cookie -->
	<?php
	$random_id = $_COOKIE['board_random_id'];
	include('connect.php');
	$us_stmt = $conn->prepare("SELECT * FROM xu3cl40122_users_certificate where id =?");
	$us_stmt->bind_param('s',$random_id);
	$us_stmt->execute();
	$us_result = $us_stmt->get_result();
	if ($us_result->num_rows > 0){
		$us_row = $us_result->fetch_assoc();
	}else{
		setcookie("board_random_id","", time()+3600*24);
		header('Location:signup.html');
	}
	?>
	<body>
		<!-- navBar -->
		
		<div class="d_navbar">
			<div class="logo"><h1>iDearcard</h1></div>
			<div class="navList">
				<div class="navButton logout ">登出</div>
				<div class="navButton navBar_username"><?php echo htmlspecialchars($us_row['nickname'],ENT_QUOTES, 'utf-8');  ?></div>
			</div>
		</div>

		<div class="dcontainer">
			<!-- 留言表單 -->
			<div class="mainComment_container">
				<form class="mainComment_form">
					<h1>留言區</h1>
					<textarea  class="mainComment" placeholder="想說什麼嗎?"></textarea>
					<input type="submit" name="" class="submit_button">
					<input type="hidden" name="comment_id" value="0">
				</form>
			</div>
			<div class="row">
			<!--串留言-->
				<?php
					include('connect.php');
					// --- 分頁 ---
					if (!isset($_GET['page'])){
						$page = 1;
					}else{
						$page = intval($_GET['page']);
					}
					$page_stmt = $conn->prepare("SELECT COUNT(`comment_id`) FROM xu3cl40122_comment JOIN xu3cl40122_users ON xu3cl40122_comment.user_id = xu3cl40122_users.sid  WHERE parent_id = 0 ORDER BY create_at DESC");
					$page_stmt->execute();
					$page_result = $page_stmt->get_result();
					$page_row = mysqli_fetch_array ($page_result);
					$page_num = ceil($page_row[0]/10);
					$a = intval(($page-1)*10);
					$stmt = $conn->prepare("SELECT *FROM xu3cl40122_comment JOIN xu3cl40122_users ON xu3cl40122_comment.user_id = xu3cl40122_users.sid  WHERE parent_id = 0 ORDER BY create_at DESC LIMIT $a,10");
					$stmt->execute();
					$result = $stmt->get_result();
					while ($row = mysqli_fetch_array ($result)){
				?>
	<div class="col">
		<div class="inf">
			<p class="whoComment"><?php echo htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8'); ?></p>
			<p class="time"><?php echo $row['create_at']; ?></p>
		</div>
		<input type="hidden" value=<?php echo $row['comment_id'] ?>>
		<p class="commentContent"><?php echo htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8'); ?></p>
		<div class="modify_button"  tabindex="100">...</div>
		<div class="modify_navList">
				<ul>
					<li class="edit_button"><i class="fa fa-pencil icon"></i>編輯</li>
					<li class="delete_button"><i class="fa fa-times icon"></i>刪除</li>
				</ul>
			</div>
		<div class="replyContainer">
	
				<!--串子留言-->
				<?php
					$comment_id = $row['comment_id']; 
					$re_stmt = $conn->prepare("SELECT *FROM xu3cl40122_comment JOIN xu3cl40122_users ON xu3cl40122_comment.user_id = xu3cl40122_users.sid  WHERE parent_id = ? ORDER BY create_at DESC");
					$re_stmt->bind_param('i',$comment_id);
					$re_stmt->execute();
					$re_result = $re_stmt->get_result();
					while ($re_row = mysqli_fetch_array ($re_result)){
						if ($re_row['user_id'] == $row['user_id']){
							$replyclass = '"replyCol selfReply"';
						}else{
							$replyclass = 'replyCol';
						}
				?>
		<div class=<?php echo $replyclass; ?>>
			<div class="inf">
				<p class="whoComment"><?php echo htmlspecialchars($re_row['nickname'],ENT_QUOTES, 'utf-8'); ?></p>
				<p class="time"><?php echo $re_row['create_at']; ?></p>
			</div>
			<input type="hidden" value=<?php echo $re_row['comment_id']; ?> name="comment_id">
			<p class="replyContent commentContent"><?php echo htmlspecialchars($re_row['content'],ENT_QUOTES, 'utf-8'); ?></p>
			<div class="modify_button"  tabindex="100">...</div>
			<div class="modify_navList">
				<ul>
					<li class="edit_button"><i class="fa fa-pencil icon"></i>編輯</li>
					<li class="delete_button"><i class="fa fa-times icon"></i>刪除</li>
				</ul>
			</div>
		</div>
			<?php
				}
				?>
		<div class="replyFormContainer">
			<form class="replyForm">
				<textarea  class="replyComment" placeholder="想說什麼嗎?"></textarea>
				<input type="submit" name="" class="submit_button">
				<input type="hidden" name="comment_id" value=<?php echo $row['comment_id'];?>>
			</form>
		</div>
		<div class="replyButton">reply</div>
	</div>
</div>
			<?php
					}  
					?>
				<!-- 頁碼 -->
				<div class="pageContainer"><p>頁數:</p>
					<?php
					for($i=1; $i <= $page_num; $i++ ){
						if($i == $page){
							echo "<div class='pageNow'>".$i."</div>";
						}else{
							/*echo "<div class='page'><a href='board.php?page=".$i."''>".$i."</a></div>";*/
							echo "<a href='board.php?page=".$i."'><div class='page'>".$i."</div></a>";
						}
					}
						?>
					
				</div>
			</div>
	</body>
</html>
