export const stars = (n) => {
	var a = [];
	var s = "";
	for (var i = 0; i<n; i++){
		s += "*";
		console.log(s);
		a.push(s);
	}
  console.log(a);
  return a;
};