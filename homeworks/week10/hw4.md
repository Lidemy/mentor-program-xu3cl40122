## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
gulp 是 Task Runner ，可以自動化執行設定好的任務，而 webpack 是 module bundler，可以將資源打包在一起，使架構簡潔明確，更重要的是可以像 node.js 那樣模組化開發，儘管兩者在一些功能上有些重複(轉換 CSS、JS)，但其核心目的是不同的，可以把 webpack 看成 gulp 的其中一個 task 。而 gulp 和 webpack 並不是一定要用，可以只用其中一個甚至都不用，就只是開發上沒那麼方便而已。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？
每次都要重新 render 效能可能比較差。
