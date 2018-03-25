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
cross sit scripting(跨站腳本攻擊),原理類似 SQL injection ， 在 input 輸入 html 或 js 語法 ， 當瀏覽器在執行該網頁時就會執行該程式碼，理論上能執行 js 就可以做到任何事情，所以後果慘不忍睹，像是竄改網站內容、導到別的網站、偷取 cookie 資料等。
解決方法 => 對特定字元進行跳脫   
PHP 有 htmlspecialchars($str, ENT_QUOTES, ‘utf-8’) 這個 function 可以用

## 請說明 CSRF 的攻擊原理以及防範方法
Cross-site request forgery(跨站請求偽造),透過一些小技巧像是圖片、看不見的表單等等，讓使用者在不知情或是非自願的情況下對網頁發送請求，由於瀏覽器會自動帶 cookie 的特性，如果沒有登出，對網頁來說就是使用者自願做出該請求。
解決辦法 :    
* 加入圖形驗證、簡訊驗證，常用在匯款等比較正式的操作。
* CSRF token :     
原理是產生一些只有真正的使用者才能取得的資訊，將資訊存在 session 中做為驗證之依據(前提是 sever 必須不接受 cross origin 的 request 否則駭客仍有辦法在其他頁面發 request 取得token)，
``` PHP
<form action="https://small-min.blog.com/delete" method="POST">
  <input type="hidden" name="id" value="3"/>
  <input type="hidden" name="csrftoken" value="Set-Cookie: session_id=ewfewjf23o1; SameSite```隨機亂碼 token"/>
  <input type="submit" value="刪除文章"/>
</form>
```
* Double Submit Cookie :     
原理和 CSRF token 類似，只是改將驗證資訊存在 cookie ， 利用甲網域的 cookie 不能從乙網域設置的特性，如果是從其他網域轉址來的就會少了這個驗證的 cookie
* 瀏覽器端 
```Set-Cookie: session_id=ewfewjf23o1; SameSite```


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
`include` 執行時如目標檔案發生錯誤的話，會顯示警告，不會立刻停止， `require` 則是會顯示錯誤，立刻終止程式，不再往下執行。     
      
而有加 once 會檢查之前否有在其他地方引入該檔案，防止重複引入的情形
                        
 `include` 好像比較適合放動態的程式碼，可以放在迴圈或是條件判斷後執行，有點 function 的感覺，`require` 則較適合靜態之內容
