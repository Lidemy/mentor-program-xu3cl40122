<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="normalize.css">
		<link rel="stylesheet" type="text/css" href="board.css">
		<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
		<script type="text/javascript" src="board.js"></script>
		<title>留言板</title>
	</head>
	<body>
		<!-- navBar -->
		<div class="navbar">
			<div class="logo"><h1>iDearcard</h1></div>
			<div class="navList">
				<div class="navButton logout">登出</div>
				<div class="navButton navBar_username">登入</div>
			</div>
		</div>
		<div class="container">
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
					$page_sql = "SELECT COUNT(`comment_id`) FROM xu3cl40122_comment JOIN xu3cl40122_users ON xu3cl40122_comment.user_id = xu3cl40122_users.sid  WHERE parent_id = 0 ORDER BY create_at DESC" ;
					$page_result = mysqli_query($conn, $page_sql);
					$page_row = mysqli_fetch_array ($page_result);
					$page_num = ceil($page_row[0]/10);
					$a = intval(($page-1)*10);
					$sql = "SELECT *FROM xu3cl40122_comment JOIN xu3cl40122_users ON xu3cl40122_comment.user_id = xu3cl40122_users.sid  WHERE parent_id = 0 ORDER BY create_at DESC LIMIT $a,10";
					$result=mysqli_query($conn, $sql);
					while ($row = mysqli_fetch_array ($result)){
				?>
	<div class="col">
		<div class="inf">
			<p class="whoComment"><?php echo $row['nickname']; ?></p>
			<p class="time"><?php echo $row['create_at']; ?></p>
		</div>
		<p class="commentContent"><?php echo $row['content']; ?></p>
		<div class="modify_button"  tabindex="100">...</div>
		<div class="modify_navList">
				<ul>
					<li><i class="fa fa-pencil icon"></i>編輯</li>
					<li><i class="fa fa-times icon"></i>刪除</li>
				</ul>
			</div>
		<div class="replyContainer">
	
				<!--串子留言-->
				<?php
					$comment_id = $row['comment_id']; 
					$re_sql = "SELECT *FROM xu3cl40122_comment JOIN xu3cl40122_users ON xu3cl40122_comment.user_id = xu3cl40122_users.sid  WHERE parent_id = '$comment_id' ORDER BY create_at DESC";
					$re_result=mysqli_query($conn, $re_sql);
					while ($re_row = mysqli_fetch_array ($re_result)){
				?>
		<div class="replyCol">
			<div class="inf">
				<p class="whoComment"><?php echo $re_row['nickname']; ?></p>
				<p class="time"><?php echo $re_row['create_at']; ?></p>
			</div>
			<p class="replyContent"><?php echo $re_row['content']; ?></p>
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
		</div>
	</body>
</html>
