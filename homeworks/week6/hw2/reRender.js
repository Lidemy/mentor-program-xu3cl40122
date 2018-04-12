var list = []
const addTask = (value,index)=>{
	var thing_container_class = ( list[index][1] == 'd') ? 'thing_container-done' : 'thing_container'
	let t = `<div class='${thing_container_class}' data-index='${index}' draggable="true">
				<div class="circle"></div>
				<p class="task">${value}</p>
				<i class="fa fa-trash-o delete"></i>
			</div>` 
	$('.thing_row').append(t)
}
function render(){
	$('.thing_row').empty()
	for(let i = 0; i< list.length; i++){
		addTask(list[i][0],i)
	}
}
$(document).ready(()=>{
	//---- add todo ---
	$('#add_task').click((e)=>{
		e.preventDefault()
		if ($('#add_value').val() != ''){
			list.push([$('#add_value').val(),'n'])
			$('#add_value').val(() => {
                return ''
            })
			render()
		}
	})
	// --- toggle form ---
    $('.add_button').click((e)=>{
    	$('.add_task_form').toggleClass('display-block')
    })

	$('.thing_row').click((e)=>{
		// --- 刪除 todo ---
		if($(e.target).attr('class') == 'fa fa-trash-o delete'){
			list.splice(parseInt($(e.target).parent().attr('data-index')),1)
			render()
		}
		// --- 完成 todo ---
		if($(e.target).attr('class') == 'circle' | 'circle-done'){
			var ind = parseInt($(e.target).parent().attr('data-index'))
			if(list[ind][1] != 'd'){
				list[ind][1] = 'd'
			}else{
				list[ind][1] = 'n'
			}
			render()
		}
	})

	document.ondragstart = (e)=>{
		e.dataTransfer.setData("Text",e.target.querySelector('p').innerText)
	}
	document.addEventListener('drop',(e)=>{
		console.log(e)
	})

})