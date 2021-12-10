var currentEntry = 0;

/*Function that changes the current comparison entry
*
*params
* entry- index of the entry that the user wants to see
*
*/	
function showEntry(entry){
	//Compiles the id names of the old and new entries
	var textName = "text" + entry;
	var picName = "picture" + entry;
	var currentText = 'text' + currentEntry;
	var currentPic = "picture" + currentEntry;	
		
	//alert(textName + picName + currentText +currentPic);
	
	//Gets ids of all needed elements
	var oldTextElement = document.getElementById(currentText);
	var oldPicElement = document.getElementById(currentPic);
	var newTextElement = document.getElementById(textName);
	var newPicElement = document.getElementById(picName);
	
	//Hide previous entry
	oldTextElement.style.display = "none";
	oldPicElement.style.display = "none";
	
	//Show new entry
	newTextElement.style.display = "block";
	newPicElement.style.display = "block";
		
	//Changes current entry tracker value
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
					//Creates navigation button for each entry
					$("#comparisonnav").append(
						"<button class='productButton' value='"+entryCount+"'>"+ value.name +"</button>"
					);
					
					var pros = value.pros;
					var cons = value.cons;
					
					var prosHTML = "<h4>Pros</h4><ul>";
					var consHTML = "<h4>Cons</h4><ul>";
					
					//Pulls all cons and pros for each entry
					for(var i = 0; i < pros.length || i < cons.length; i++){
						if(pros[i]!=undefined){prosHTML += "<li>"+ pros[i] +"</li>";}
						if(cons[i]!=undefined){consHTML += "<li>"+ cons[i] +"</li>";}
					}
					prosHTML += "</ul>";
					consHTML += "</ul>";
					
					var embeded = "";
					if( value.video != ""){
						embeded = '<iframe width="560" height="315" src="' + value.video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
					}
					//Append text for the entry
					$("#comparisontext").append(
						"<div id='text" + entryCount +"' hidden>" +
							embeded +
							"<a href ='" + value.link +"' target='_blank'><h3>" + value.name+ "</h3></a>" +
							"<p>" + value.description + "</p>" +
							prosHTML + consHTML +
						"</div>"
					);
					//Append picture for the entry
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
		//On completeion, show the entry with index 0
		complete: function(){
			showEntry('0');
		}
	});
	
	//Listen for a product button the be pressed and update entry accordingly
	$(document).on('click', '.productButton', function(){
		var entryNumber = $(this).attr('value');
		//alert(entryNumber);
		showEntry(entryNumber);
	});
});
	
