### 什麼是 DOM？
DOM (Document Object Model)，為瀏覽器提供的API，把每一個 HTML 的 tag 看成一個節點 (node)，以利於使用程式語言修改各種node之屬性、結構等。
### 什麼是 Ajax？
Asynchronous JavaScript and XML，可以透過非同步的方式送出請求，執行完成後再由callback function 傳回結果，提升網頁執行的流暢度。透過Ajax可以再不更換頁面的情況下更新網頁的內容，減少不必要的存取次數。
### HTTP method 有哪幾個？有什麼不一樣？
* OPTIONS
* GET
* HEAD
* POST
* PUT
* DELETE
* TRACE
* CONNECT

### GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？
GET 如同是明信片，你可以把要傳遞的資訊寫在信封(http-header)上，寫滿為止。然而 POST 就是信封內有裝信件的寄送方式（信封有內容物），不但信封可以寫東西，信封內 (message-body) 還可以置入你想要寄送的資料或檔案。

### 什麼是 RESTful API？
Representational State Transfer，簡稱REST，充分地使用了 HTTP protocol (GET/POST/PUT/DELETE)，如下

獲取使用者資料 /GET /users

獲取使用者資料 /GET /user/1

新增使用者資料 /POST /user

更新使用者資料 /PUT /user/1

刪除使用者資料 /DELETE /user/1

使其更簡潔好懂，而框架中強制使用 REST 風格的最有名的應該就是 Ruby on Rails 了


### JSON 是什麼？
用js物件來存資料的的一種資料格式

### JSONP 是什麼？
透過 `<script>` 可以跨網域的特性，間接用 callback function 呼叫出 JSONP 的資料，然而當引入 `script` 之網站被竄改，也可能隨之受影響，在安全上有一定的風險。
### 要如何存取跨網域的 API？
在 Response Header 中 Access-Control-Allow-Origin 可以看到 API 資料是否有開放跨網域存取，基本上API不想給你跨網域你就是拿不到。

