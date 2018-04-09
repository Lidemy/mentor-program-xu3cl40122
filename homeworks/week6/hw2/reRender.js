var list = []
const addTask = (value)=>{
	let t = `<div class="thing_container">
				<div class="circle"></div>
				<p class="task">${value}</p>
				<i class="fa fa-trash-o delete"></i>
			</div>` 
	$('.thing_row').append(t)
}
function render(){
	$('.thing_row').empty()
	for(let i = 0; i< list.length; i++){
		addTask(list[i])
	}
}
$(document).ready(()=>{
	//---- add todo ---
	$('#add_task').click((e)=>{
		e.preventDefault()
		if ($('#add_value').val() != ''){
			list.push($('#add_value').val())
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
			$(e.target).parent().remove()
		}
		// --- 完成 todo ---
		if($(e.target).attr('class') == 'circle' | 'circle-done'){
			$(e.target).parent().toggleClass('thing_container-done')
		}
	})



})