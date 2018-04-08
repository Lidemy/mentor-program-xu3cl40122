
function stack(){
	var list = []
	this.push = function(n){
		list.push(n)
	}
	this.pop = function(){
		list.pop()
	}
	this.log = function(){
		console.log(list)
	}
}

function queue(){
	var list = []
	this.push = function(n){
		list.push(n)
	}
	this.pop = function(){
		list.shift()
	}
	this.log = function(){
		console.log(list)
	}
}

