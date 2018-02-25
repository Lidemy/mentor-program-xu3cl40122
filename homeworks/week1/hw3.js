export const isPrime = (n) => {
	if (n === 1 ){
		return false;
	}
	for(var i = 2; i<n-1; i++){
		if (n%i == 0){
			return false;
		}
	}
	return true;
}



//isodds
function isOdds(n){
	for(var i = 2; i<n-1; i++){
		if (n%i == 0){
			console.log("false");
			return;
		}
	}
	console.log("true");
}