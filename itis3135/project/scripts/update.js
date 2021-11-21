$(document).ready(function(){
	var comp = document.getElementById('update_comparison');
	var pic = document.getElementById('update_picture');
	var journ = document.getElementById('update_journal');
	var pro_count = 1;
	var con_count = 1;
	$('#comparison_button').click(function(){
		if(pic.style.display !== 'none'){
			pic.style.display = 'none';
		}
		if(journ.style.display !== 'none'){
			journ.style.display = 'none';
		}
		comp.style.display = 'block';
	});
	$('#image_button').click(function(){
		if(comp.style.display !== 'none'){
			comp.style.display = 'none';
		}
		if(journ.style.display !== 'none'){
			journ.style.display = 'none';
		}
		pic.style.display = 'block';
	});
	$('#journal_button').click(function(){
		if(pic.style.display !== 'none'){
			pic.style.display = 'none';
		}
		if(comp.style.display !== 'none'){
			comp.style.display = 'none';
		}
		journ.style.display = 'block';
	});
	$('#add_pro').click(function(){
		var id_check = 'pro' + (pro_count-1);
		var lastElement = document.getElementById(id_check);
		if(lastElement.value==null){
			alert('Enter a pro in the available spot before trying to add another one!');
			return;
		}
		if(lastElement.value.trim()=='' || lastElement.value.trim()=='None' || lastElement.value.trim()=='Pro'){
			alert('Enter a pro in the available spot before trying to add another one!');
			return;
		}
		var ul = document.getElementById('comparison_pro');
		var li = document.createElement('li');
		var textbox = document.createElement('input');
		textbox.setAttribute('type', 'text');
		textbox.setAttribute('value', 'Pro');
		var id = "pro" + pro_count;
		pro_count++;
		textbox.setAttribute("id", id);
		li.append(textbox);
		ul.appendChild(li);
	});
	$('#add_con').click(function(){
		var id_check = 'con' + (con_count-1);
		var lastElement = document.getElementById(id_check);
		if(lastElement.value==null){
			alert('Enter a con in the available spot before trying to add another one!');
			return;
		}
		if(lastElement.value.trim()=='' || lastElement.value.trim()=='None' || lastElement.value.trim()=='Conk'){
			alert('Enter a con in the available spot before trying to add another one!');
			return;
		}
		var ul = document.getElementById('comparison_con');
		var li = document.createElement('li');
		var textbox = document.createElement('input');
		textbox.setAttribute('type', 'text');
		textbox.setAttribute('value', 'Con');
		var id = "con" + con_count;
		con_count++;
		textbox.setAttribute("id", id);
		li.append(textbox);
		ul.appendChild(li);
	});
});