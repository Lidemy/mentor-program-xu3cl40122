export const isPalindromes = (str) => {
	for(var i = 0; i < (str.length/2); i++){
		if(str[i] != str[str.length-(i+1)]){
			return false
		}
	}
	return true
}

//reverse
function IsReverse(str){
  for(var i = 0; i < (str.length/2); i++){
    if(str[i] != str[str.length-(i+1)]){
      //console.log(str[i]);
      //console.log(str[str.length-(i+1)]);
      console.log("false");
      return;
    }
  }
  console.log("true");
}