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

function delete_cookie(cookie_name)
{
  var cookie_date = new Date ( );  // current date & time
  cookie_date.setTime (cookie_date.getTime() - 1);
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
} 

const identify = () =>{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            if(this.responseText == 'not_found_users_certificate'){
                alert('權限問題!!')
                document.location.href = 'signup.html'
            }
            else{
                var user = this.responseText
            }
        }
    }
    xmlhttp.open("GET", "identify.php", true);
    xmlhttp.send();
}


document.addEventListener('DOMContentLoaded',()=>{
	// --- 登入判斷 ---

    // --- 回覆表單toggle ---
	var replyButton = dqa('.replyButton')
	for(var i =0; i < replyButton.length; i++){
		replyButton[i].addEventListener('click', (e)=>{
                if(e.target.previousElementSibling.style.display == 'block'){
                    e.target.previousElementSibling.style.display = 'none'
                }else{
                    e.target.previousElementSibling.style.display = 'block'
                }			
		})
	}
	// --- AJAX 新增留言 ---
	const addComment = (e, isReply) => {
    var request = new XMLHttpRequest()
    request.open("POST", "addComment.php")
    if (isReply) {
        var commentData = {
            'content': e.target.previousSibling.nextSibling.childNodes[1].value,
            'parent_id': e.target.previousSibling.nextSibling.childNodes[5].value
        }
    }else{
    	var commentData = {
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
    // --- AJAX 編輯、刪除留言 ---
    const editComment = (event, isdelete) => {
        var request = new XMLHttpRequest()
        request.open("POST", "editComment.php")
        if (isdelete) {
            var editCommentData = {
                'comment_id': event.target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.value,
                'type': 'delete',
                'newContent' : 'none'
            }
        } else {
            var editCommentData = {
                'comment_id': event.target.previousElementSibling.value,
                'type': 'edit',
                'newContent': event.target.childNodes[1].value
            }
        }

        var j_data = JSON.stringify(editCommentData)
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText == 'pass') {
                    document.location.href = 'board.php'
                } else {
                    alert(this.responseText)
                }
            }
        }
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        request.send('x=' + j_data)
    }

    // --- 修改留言button UI ---
    var modify_button = dqa('.modify_button')
    for(var i = 0; i < modify_button.length; i++){
        modify_button[i].addEventListener('click',(e) =>{
            e.target.nextElementSibling.style.display = 'block'
        })
        modify_button[i].addEventListener('focusout', (e) =>{
            setTimeout(()=>{
                 e.target.nextElementSibling.style.display = 'none'
             },400)
           
        })
    }
    // --- 修改留言 ---
    var edit_button = dqa('.edit_button')
    for (var i = 0; i < edit_button.length; i++) {
        edit_button[i].addEventListener('click', (e) => {
            var beForm = e.target.parentNode.parentNode.previousElementSibling.previousElementSibling
            var comment_id = beForm
            beForm.outerHTML = `
                <form class="editForm">
                    <textarea  class="replyComment">${beForm.innerText}</textarea>
                    <input type="submit" name="" class="submit_button">
                </form> `
            var editForm = dqa('.editForm')
            for (var i = 0; i < editForm.length; i++) {
                editForm[i].addEventListener('submit', (event) => {
                    event.preventDefault()
                    editComment(event,false)
                    
                })
            }
        })
    }
    // --- 刪除留言 ---
    var delete_button = dqa('.delete_button')
    for(var i = 0; i < delete_button.length; i++){
        delete_button[i].addEventListener('click',(e)=>{
            if(confirm('確定要刪除留言?')){
                editComment(e,true)
            }
        })
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
	// --- log out ---
	dq('.logout').addEventListener('click',()=>{
		delete_cookie("board_random_id")
		document.location.href='signup.html'
	})

})