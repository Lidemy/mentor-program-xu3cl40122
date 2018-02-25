## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
* `<form>` 產生表單
* `<button>` 產生按鈕
* `<canvas>` 產生html畫布

## 請問什麼是盒模型（box modal）
透過 `margin` `border` `padding` 等屬性與元素大小來操控網頁排版效果的機制。早期工程師必須考慮到 `border` `padding` 對元素大小的影響，現在則可設定 `  box-sizing: border-box;` 使  `border` `padding` 不會改變元素呈現出的寬高。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
###  inline element
* 會自適應內容大小
* 不能設定width、height、margin、background-img等
* 如：a、span、img…
* img特性補充：img雖然常被歸類在inline element，但其實是可以直接設定width、height、margin的
* 置中: `text-align: center;`

### block-level element
* 預設會佔滿父元素的寬度
* 如：div、p、ul、li、h1、h2…
* 置中:  ` margin : 0 auto`

### display: inline-block
它的外在是 inline 內在是 block，
外在像inline不會換行且會自適應大小，
內在像block可以設定width、height、margin、background-img…等參數。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static: 預設排列
* relative: 可以設定 `top` `right` `bottom` `left` 的static
* fixd:  `top` `right` `bottom` `left` 進行定位，不管怎麼捲都在那裡
* absolute 相對於其父容器做fixd(`position: static` 除外)
