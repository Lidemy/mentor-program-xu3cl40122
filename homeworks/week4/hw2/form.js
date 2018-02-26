const dq = (n) =>{
	return document.querySelector(n)
}
const dqa = (n) =>{
	return document.querySelectorAll(n)
}


document.addEventListener('DOMContentLoaded',()=>{
	//---表單驗證---
	dq('form').addEventListener('submit',(e) =>{
		e.preventDefault()
		var questions = dqa('input')
		var isPass = true
		for(var i = 0; i < questions.length; i++){
			questions[i].parentNode.parentNode.classList.remove("noAnswer")
			if(questions[i].value == '' & questions[i].id !='other' ){
				questions[i].parentNode.parentNode.classList.add("noAnswer")
				isPass = false
			}
		} 
		//if pass console valus
		if(isPass){
			for(var i = 0; i < questions.length; i++){
				if(i == 2 | i == 3){
					console.log(document.querySelector('input[name="classType"]:checked').value)
				}
				else{
					console.log(i,questions[i].value)
				}
			}
			alert('表單已送出')
		}
	})


	//---onfocus ui effect---
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