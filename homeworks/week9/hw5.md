## CSS 預處理器是什麼？我們可以不用它嗎？
css preprocessor，可以讓開發人員用更程式化、有可讀性、結構明確的產生及維護 CSS， CSS 預處理器產生的檔案仍須經過編譯成 CSS 才能使用。當然可以不用 css preprocessor，但除非只有短短幾行，不然目前想不到不用 css preprocessor 的理由。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
Expires => 設定到期日期
```
Expires: Wed, 21 Oct 2017 07:28:00 GMT
```
Cache-Control: max-age=30 => 設定到期日期(相對時間，優先於Expires)
Last-Modified => response 檔案的最後更新時間
If-Modified-Since => 確認有沒有新的更新
Etag => response 類似檔案內容 hash 的東西
If-None-Match => 發 request 時帶上 Etag 如果跟 sever 的不一樣代表有更新內容
Cache-Control: no-store => 停用 cache
Cache-Control: no-cache => 每次都檢查內容是否有更新

## Stack 跟 Queue 的差別是什麼？
Stack 就像堆盤子， First in last out 。Queue 則像排隊 First in first out。
