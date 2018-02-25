const dq = (n) =>{
	return document.querySelector(n)
}
const dqa = (n) =>{
	return document.querySelectorAll(n)
}


document.addEventListener('DOMContentLoaded',()=>{
	//表單驗證
	dq('form').addEventListener('submit',(e) =>{
		e.preventDefault()
		var questions = dqa('input')
		for(var i = 0; i < questions.length; i++){
			if(questions[i].value == '' & questions[i].id !='other' ){
				questions[i].parentNode.parentNode.classList.add("noAnswer")
				//questions[i].parentNode.parentNode.innerHTML += '<h2>這是必填問題</h2>'
			}
		} 
	})
	//onfocus ui effect
	var bef = dqa('.textInput')
	for(var i = 0; i < bef.length; i++){
		bef[i].addEventListener('focus',(e)=>{
			e.target.nextElementSibling.style.transform = 'scale3d(1,1,1)'
		})
		bef[i].addEventListener('focusout',(e)=>{
			e.target.nextElementSibling.style.transform = 'scale3d(0,1,1)'
		})
	}

})