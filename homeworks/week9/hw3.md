```javascript

console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
//應該會輸出13524
```
因為 js 的執行機制為順序執行，遇到程式碼及 function 就丟入 call stack 執行完就 pop 掉，如果是有 callback function 的就丟到 web api 等，當 callback 條件被觸發就丟到 callback queue 等。而 event loop 就是一個一直跑不停的迴圈負責檢查 call stack 和 callback queue 的狀態，如果 call stack 是空的而且callback queue 有東西，就把 callback queue 的東西抓去call stack，簡單來說就是 call stack 內的優先執行，才是 callback queue 。
