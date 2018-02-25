const dq = (t) =>{
	return document.querySelector(t)
} 
var disNum = 0
const numBut = (n) => {
	if(document.querySelector('#n').value == 0){
		document.querySelector('#n').value = n.toString()
		//disNum = document.querySelector('#n').value
	}
	else{
		document.querySelector('#n').value += n.toString()
		//disNum = document.querySelector('#n').value 
	}
}
document.addEventListener('DOMContentLoaded',() =>{
	//數字鍵

	var btnNum = document.querySelectorAll('.btnNum')
	for(var i = 0; i < btnNum.length; i++){
		btnNum[i].addEventListener('click',(e) =>{
			numBut(e.target.innerText)
		})
	}

	//reset
	dq('.c').addEventListener('click',() =>{
		dq('#n').value = '0'
	})

	//運算
	var temp = 0
	var calculating = false
	dq('.plus').addEventListener('click',() =>{
		temp = parseFloat(dq('#n').value)
		console.log(temp)
		dq('#n').value = 0
	})
	dq('.equal').addEventListener('click', () =>{
		dq('#n').value = temp
		temp = 0
	})

})