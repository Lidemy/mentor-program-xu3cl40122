const dq = (n) =>{
	return document.querySelector(n)
}
const dqa = (n) =>{
	return document.querySelectorAll(n)
}


document.addEventListener('DOMContentLoaded',()=>{
	var replyButton = dqa('.replyButton')
	for(var i =0; i < replyButton.length; i++){
		replyButton[i].addEventListener('click', (e)=>{
			e.target.previousElementSibling.style.display = 'block'
			
		})
	}



})