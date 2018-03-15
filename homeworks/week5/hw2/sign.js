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

$(document).ready(function(){
	//display cookie
	var user = getCookie("board_member_id")
	var r_id = getCookie('board_random_id')
	if (user != "") {
        alert("Welcome" + r_id);
        document.location.href='board.php'
    }
	//--- switch animation ---
	$("#log").click(function() {
		$(".switch").animate({left: '600px'},300);
		$(".switch").animate({left: '540px'},200);
		$('.signUp').css('display','none')
		$('.logIn').css('display','block')
	});
	$("#sign").click(function() {
		$(".switch").animate({left: '0px'},300);
		$(".switch").animate({left: '60px'},200);
		$('.logIn').css('display','none')
		$('.signUp').css('display','')
	});
	//---signup form check ---
	var canSignUp = true
    dq('.signup_nickname').addEventListener('focusout', (e) => {
        if (e.target.value == '') return
        else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var res = this.responseText;
                    if (res == 'nopass'){
                    	alert('此暱稱已被使用')
                    	canSignUp = false
                    }
                    else{
                    	canSignUp = true
                    }
                }
            };
            xmlhttp.open("GET", "signup.php?value=" + e.target.value + "&type=nickname", true);
            xmlhttp.send();
        }
    })

	dq('.signup_email').addEventListener('focusout',(e)=>{
		if(e.target.value == '') return
		else{
			var xmlhttp = new XMLHttpRequest();
        	xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                if (res == 'nopass'){
                    alert('此email已被使用')
                    canSignUp = false
                }
                else{
                	canSignUp = true
                }

            }
        	};
        xmlhttp.open("GET", "signup.php?value=" + e.target.value + "&type=email", true);
        xmlhttp.send();
    	}	
	})

	dq('.signUp').addEventListener('submit',(e) =>{
		e.preventDefault()
		if (canSignUp){
			var request = new XMLHttpRequest()
    		request.open("POST", "signup.php")
    		var accountData = {
    			'email':dq('.signup_email').value, 
    			'pwd':dq('.signup_password').value,
    			'nickname':dq('.signup_nickname').value
    			}
			var j_data = JSON.stringify(accountData)
			request.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200){
					if(this.responseText == 'pass'){
						alert('成功創立帳號~~')
					}else{
						alert(this.responseText)
					}
				}
			}
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    		request.send('x='+j_data);
		}
		else{
			alert('請檢查表單')
		}{

		}
	})
	
	//--- login form check ---
	dq('.logIn').addEventListener('submit',(e) =>{
		e.preventDefault()
		var accountData = {'email':dq('.login_email').value,'pwd':dq('.login_password').value}
		var j_data = JSON.stringify(accountData)
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				if(this.responseText =='pass'){
					window.location.reload()
				}
				else{
					alert('帳號密碼錯誤')
				}
			}
		}
		xmlhttp.open("POST", "login.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send('x='+j_data)
	})
});