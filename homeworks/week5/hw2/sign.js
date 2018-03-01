const dq = (n) =>{
	return document.querySelector(n)
}
const dqa = (n) =>{
	return document.querySelectorAll(n)
}


$(document).ready(function(){
	//display cookie
	console.log(123)
	var user = getCookie("board_member_id")
	if (user != "") {
        alert("Welcome again " + user);
    }
    else{
    	alert('noin')
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
    dq('.signup_nick_name').addEventListener('focusout', (e) => {
        if (e.target.value == '') return
        else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var res = this.responseText;
                    if (res == 'nopass'){
                    	alert('此暱稱已被使用')
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
                }
            }
        	};
        xmlhttp.open("GET", "signup.php?value=" + e.target.value + "&type=email", true);
        xmlhttp.send();
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