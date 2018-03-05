const dq = (n) =>{
	return document.querySelector(n)
}
const dqa = (n) =>{
	return document.querySelectorAll(n)
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




document.addEventListener('DOMContentLoaded',()=>{
	// --- 登入判斷 ---
	var user = getCookie("board_member_id")
	if (user != "") {
        dq('.navBar_username').innerText = user
    }
    else{
    	alert('請先登入帳號')
    	document.location.href='signup.html'
    }
    // --- 回覆表單 ---
	var replyButton = dqa('.replyButton')
	for(var i =0; i < replyButton.length; i++){
		replyButton[i].addEventListener('click', (e)=>{
			e.target.previousElementSibling.style.display = 'block'
		})
	}
	// --- ajax 新增留言 ---
	const addComment = (e, isReply) => {
    var request = new XMLHttpRequest()
    request.open("POST", "addComment.php")
    if (isReply) {
        var commentData = {
            'user': user,
            'content': e.target.previousSibling.nextSibling.childNodes[1].value,
            'parent_id': e.target.previousSibling.nextSibling.childNodes[5].value
        }
    }else{
    	var commentData = {
            'user': user,
            'content': e.target.previousSibling.nextSibling.childNodes[3].value,
            'parent_id': 0
        }
    }
    var j_data = JSON.stringify(commentData)
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	if(this.responseText == 'pass'){
        		document.location.href='board.php'
        	}
        	else{
        		alert(this.responseText)
        	}
        }
    }
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send('x='+j_data);
}


	// --- 主留言表單 ---
	dq('.mainComment_form').addEventListener('submit', (e) =>{
		e.preventDefault()
		addComment(e,false)
	})
	// --- 子留言表單 ---
	var replyForm = dqa('.replyForm')
	for(var i = 0; i < replyForm.length; i++){
		replyForm[i].addEventListener('submit', (e) =>{
			e.preventDefault()
			addComment(e,true)
		})
	}

})