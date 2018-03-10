## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar 可以自訂長度，較節省空間，text 的長度則固定為2的16次方


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
Cookie 是用來儲存用戶相關資訊的的東西，存放在client端，cookie資訊會被帶在 HTTP requset 中，因此會增加流量，且資料內容為明文，有一定程度的安全風險(可透過 HTTPS 避免)



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1.雖然機率不大，但如果有人無聊自己 SET 一個同名 的Cookie 就可以直接登入。
1.SQL injection 透過提交表單的時候填入一些 SQL 語法來擾亂後端程式的執行。


