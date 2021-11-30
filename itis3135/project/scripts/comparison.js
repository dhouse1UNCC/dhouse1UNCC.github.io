$(document).ready(function() {
	var currentEntry = 0;
	
	function showEntry(entry){
		var textName = "text" + entry;
		var picName = "picture" + entry;
		var currentText = 'text' + currentEntry;
		var currentPic = "picture" + currentEntry;
		
		alert(textName + picName + currentText +currentPic);
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
						"<button onclick='showEntry(" + entryCount + ")'>"+ value.name +"</button>"
					);
					
					$("#comparisontext").append(
						"<div id='text" + entryCount +"' hidden>" +
							"<h2>" + value.name+ "</h2>" +
							"<p>" + value.description + "</p>" +
						"</div>"
					);
						
					$("#copmarisonpicture").append(
						"<div id='picture" + entryCount + "' hidden>" +
							"<img src='" + value.image +"'>" +
						"</div>"
					);
					entryCount++;
				});
			});
		}
	});
	
	
});
	
