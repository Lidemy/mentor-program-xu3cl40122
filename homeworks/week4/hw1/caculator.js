const dq = (t) =>{
	return document.querySelector(t)
} 
var disNum = 0
var temp = 0
var op =''
const numBut = (n) => {
	if(document.querySelector('#n').value == 0){
		document.querySelector('#n').value = n.toString()
		disNum = document.querySelector('#n').value
		console.log(disNum)
	}
	else{
		document.querySelector('#n').value += n.toString()
		disNum = document.querySelector('#n').value
		console.log(disNum)
	}
}
//--- loaded ---
document.addEventListener('DOMContentLoaded',() =>{
	alert('本計算目前僅支援基本加減功能，ex: 3 + 5 = 8 ')
	//數字鍵onclick
	var btnNum = document.querySelectorAll('.btnNum')
	for(var i = 0; i < btnNum.length; i++){
		btnNum[i].addEventListener('click',(e) =>{
			numBut(e.target.innerText)
		})
	}

	//reset
	dq('.c').addEventListener('click',() =>{
		dq('#n').value = '0'
		disNum = 0
	})

	//---運算---
	
	dq('.plus').addEventListener('click',() =>{
		temp = parseFloat(dq('#n').value)
		dq('#n').value = 0
		op = '+'
	})
	dq('.minus').addEventListener('click',() =>{
		temp = parseFloat(dq('#n').value)
		dq('#n').value = 0
		op = '-'
	})
	dq('.equal').addEventListener('click', () =>{
		switch(op){
			case '+':
				dq('#n').value = temp + parseFloat(dq('#n').value)
				disNum = dq('#n').value
				break;
			case '-':
				dq('#n').value = temp - parseFloat(dq('#n').value)
				disNum = dq('#n').value
				break;
		}
	})
})