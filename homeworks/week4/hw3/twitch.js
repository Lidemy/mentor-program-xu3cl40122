// 基本參數
var now_index = 0;
var is_loading= false;

function getData (cb){
	const clientId = 'urt5sb6ji1byhsn6sd481ddkoprb8l';
  	const limit = 21;
  	is_loading = true;
  	var request = new XMLHttpRequest()
  	request.open('GET','https://api.twitch.tv/kraken/streams/?client_id=' + clientId + '&game=League%20of%20Legends&limit=' + limit)
  	request.onload = () =>{
  		if(request.status >= 200 & request.status < 400){
  			var resp = request.responseText
  			cb(null, JSON.parse(resp))
  		}
  	}
  	request.send()
}

// return 每一個 col 的 html
function getColumn(data) {
  return `
    <div class="col">
      <div class="preview">
        <div class="pd"></div>
        <img src="${data.preview.medium}"/>
      </div>
      <div class="bottom">
          <div class="avatar">
              <img src="${data.channel.logo}" />
          </div>
          <div class="intro">
            <div class="channel_name">
              ${data.channel.status}
            </div>
            <div class="owner_name">
              ${data.channel.display_name}
            </div>
          </div>
      </div>
    </div>`;
}

function append_data(){
  getData((err, data) =>{
   const {streams} = data;
  /*if (err) {
    console.log(err);
  } else {
    const streams = data.streams;
  */
    //const $row = $('.row')
    const $row = document.querySelector('.row')
    for(let stream of streams) {
      const div = document.createElement('div')
      $row.appendChild(div)
      div.outerHTML = getColumn(stream)
    }  
  
  now_index += 21;
  is_loading = false;
  })
}


$(document).ready(function(){
  append_data();
  /*
  $(window).scroll(function(){
    if ($(window).scrollTop()+$(window).height() >= $(document).height()-400){
      if(!is_loading){
        append_data();
      }
    }
  })
  */
})