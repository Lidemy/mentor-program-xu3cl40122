## 為什麼我們需要 React？可以不用嗎？
react 為 facebook 為解決其前端開發 UI 遇到的問題而產生的框架，react 有三大特點 
1. 用 component 的角度來看UI 
1. UI 就是 state 的呈現 => 以往都是用操作 dom 的方式修改 UI，然而這樣做可能的風險就是如果程式有 bug 
可能會導致畫面呈現跟實際資料庫內的結果不同步，而 react 的概念是每次更新 state 就依據 state render 畫
面，相較之下更直覺。
1. client side rendering => 就是 html 裡面只放一個 js 靠那個 js 完成所有畫面。


## state 跟 props 的差別在哪裡？
props 是放在 attribute 裡面傳進來的， state 是 component 自己本身有的

## 請列出 React 的 life cycle 以及其代表的意義（componentWillMount...）
``` Javascript
//initialization (constructor)

//Mounting
componentWillMount() //將要 mount
componentDidMount() //已經 mount
//Updating
componentWillReceiveProps(object nextProps)//：已載入元件收到新的參數時呼叫
shouldComponentUpdate(object nextProps, object nextState)//：元件判斷是否重新渲染時呼叫，起始不會呼叫除非呼叫 forceUpdate()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
//Unmounting
componentWillUnmount()
```
