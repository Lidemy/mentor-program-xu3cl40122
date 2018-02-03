/*
export const add = (a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
}
*/
/*
const add = (a,b) => {
  console.log("123");
  var ans = "";
  for(var i = 0; i < a.length; i++ ){
    var n = parseInt(a[i]) + parseInt(b[i]);
    console.log("a",a[i]);
    console.log("b",b[i]);
    console.log("n",n);
    ans += n.toString();
  }
  console.log(ans);
  return ans;
}
add(123,456)
*/
export const add = (a,b) => {
  var ans = "";
  var plusOne = false;
  a = a.split('');
  b = b.split('');
  var tmp
  if(a.length < b.length){//確保a較長
    tmp = a; 
    a = b; 
    b = tmp;
  }
  while(a.length>b.length){
    b.unshift(0);
  }
  console.log("a,b",a,b,a.length,b.length)
  for(var i = a.length-1; i >= 0; i--){
    console.log("a",parseInt(a[i]))
    console.log('b',parseInt(b[i]))
    var n = parseInt(a[i]) + parseInt(b[i]);
    //console.log(n)
    if(plusOne){//加上前一個的進位
      n += 1;
      plusOne = false;
    }
    if (n >=10){//進位的話取尾數
      plusOne = true;
      n = n%10;
    }
    ans = ""+n+ans;
    //console.log('n',n)
    //console.log(ans);
  }
if(plusOne){//最後的進位
  ans = "1"+ans;
}
console.log(ans);
return ans
}
add("1121241294239120391031","35906838359835");