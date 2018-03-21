## 請說明 SQL Injection 的攻擊原理以及防範方法
在 input 輸入 SQL 語法擾亂使在後端運行時產生出乎意料的結果，達成無條件登入、撈出資料甚至刪除資料等行為，
```PHP
// SQL INJECTION 範例
$sql = “select * from u where user=’’ or 1=1 --’’ and pwd=’’”
```
防範方法 => prepare statement
```PHP
$stmt = $conn->prepare("INSERT INTO xu3cl40122_comment (parent_id, content, user_id) VALUES (?, ?, ?)");
$stmt->bind_param('isi',$obj->parent_id, $obj->content, $sid);
$stmt->execute() or trigger_error($stmt->error, E_USER_ERROR);
echo "pass";
$stmt->close();
```

## 請說明 XSS 的攻擊原理以及防範方法
原理類似 SQL injection ， 在 input 輸入 html 或 js 語法 ， 當瀏覽器在執行該網頁時就會執行該程式碼，理論上能執行 js 就可以做到任何事情，所以後果慘不忍睹，像是竄改網站內容、導到別的網站、偷取 cookie 資料等。
解決方法 => 對特定字元進行跳脫   
PHP 有 htmlspecialchars($str, ENT_QUOTES, ‘utf-8’) 這個 function 可以用

## 請說明 CSRF 的攻擊原理以及防範方法


## 請舉出三種不同的雜湊函數
hash 簡單來說就是把無限長度的輸入轉成有限長度的輸出，是一個單向函式，好的 hash 即使輸入只差一點點輸出卻會差很多，且少有碰撞(collision)。    
PHP 有提供 `password_hash()` `password_verify()` 做密碼儲存及驗證，預設會隨機選一種salt增加被破解的難度，其他還有MD5, SHA-1, SHA-256,
bcrypt等，其中 MD5 已經不安全，不過可以用來產生亂數。
* salt : 就是加鹽的概念，如果本來的密碼為 123 加鹽之後變成 123asd 再去做 hash 即使被駭客破解也猜不到哪部分是鹽哪部分是真的密碼


## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別
session機制 :
由於 cookie 是可以被使用者修改的，為了防止使用者修改 cookie 取得不該取得的權限，採用類似辦公大樓的換證制度，當使用者成功登入時就給他一張識別證(隨機亂碼)，並儲存該亂碼與使用者的關係，往後就用識別證做為認證身分的依據。除非有人真的很厲害能夠猜到別人的識別證亂碼才有辦法取得他人的權限。
   
session vs cookie
cookie 指瀏覽器為了解決HTTP的無狀態性，而設計來儲存一些用戶資訊以優化使用者體驗的空間，儲存在使用者端的硬碟或記憶體，由瀏覽器管理，在發送request時會自動將對應的 cookie 一起傳上去 sever     
session 應該是指前面提到的換證機制，要實作出這種機制有需多方法，可以把 session 存在記憶體、cookie、資料庫等地方，其中 PHP 已經有內建的 session 可以用

## `include`、`require`、`include_once`、`require_once` 的差別

