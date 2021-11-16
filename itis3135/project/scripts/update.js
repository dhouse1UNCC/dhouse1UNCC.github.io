$(document).ready(function(){
	var comp = document.getElementById('update_comparison');
	var pic = document.getElementById('update_picture');
	var journ = document.getElementById('update_journal');
	alert();
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
});