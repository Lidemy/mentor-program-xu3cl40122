/*
export const add = (a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
}
*/

export const bigAdd = (a,b) => {
  var ans = "";
  for(var i = 0; i < a.length; i++ ){
    var n = parseInt(a[i]) + parseInt(b[i]);
    ans += n.toString();
  }
  return ans;
}