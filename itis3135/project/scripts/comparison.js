var currentEntry = 0;
	
function showEntry(entry){
	var textName = "text" + entry;
	var picName = "picture" + entry;
	var currentText = 'text' + currentEntry;
	var currentPic = "picture" + currentEntry;	
		
	//alert(textName + picName + currentText +currentPic);
	
	var oldTextElement = document.getElementById(currentText);
	var oldPicElement = document.getElementById(currentPic);
	var newTextElement = document.getElementById(textName);
	var newPicElement = document.getElementById(picName);
		
	oldTextElement.style.display = "none";
	oldPicElement.style.display = "none";
	newTextElement.style.display = "block";
	newPicElement.style.display = "block";
		
	currentEntry = entry;
	}
	

$(document).ready(function() {
	var entryCount = 0;
	$.ajax({
		type: "get",
		url: "json/comparison.json",
		beforeSend: function() {
			$("#comparisontext").html("Loading...");
		},
		timeout: 10000,
			error: function(xhr, status, error) {
			alert("Error: " + xhr.status + " - " + error);
		},
		dataType: "json",
		success: function(data) {
			$("#comparisontext").html("");
			$("#comparisonpicture").html("");
			$.each(data, function() {
				$.each(this, function(key, value) {
					$("#comparisonnav").append(
						"<button class='productButton' value='"+entryCount+"'>"+ value.name +"</button>"
					);
					
					var pros = value.pros;
					var cons = value.cons;
					
					var prosHTML = "<ul>Pros";
					var consHTML = "<ul>Cons";
					for(var i = 0; i < pros.length || i < cons.length; i++){
						if(pros[i]!=undefined){prosHTML += "<li>"+ pros[i] +"</li>";}
						if(cons[i]!=undefined){consHTML += "<li>"+ cons[i] +"</li>";}
					}
					prosHTML += "</ul>";
					consHTML += "</ul>";
					
					$("#comparisontext").append(
						"<div id='text" + entryCount +"' hidden>" +
							"<a href ='" + value.link +"' target='_blank'><h3>" + value.name+ "</h3></a>" +
							"<p>" + value.description + "</p>" +
							prosHTML + consHTML +
						"</div>"
					);
						
					$("#comparisonpicture").append(
						"<div id='picture" + entryCount + "' hidden>" +
							"<figure>" +
							"<img src='" + value.image +"'>" +
							"<figurecaption><a href='" + value.imageurl + "' target='_blank'>Image Source</a></figurecaption>"+
							"</figure>"+
						"</div>"
					);
					entryCount++;
				});
			});
		},
		complete: function(){
			showEntry('0');
		}
	});
	
	$(".productButton").click(function(){
		var entryNumber = $(this).attr('value');
		alert(entryNumber);
		showEntry(entryNumber);
	});
});
	
