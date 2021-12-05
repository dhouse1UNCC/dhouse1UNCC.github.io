var entryCount = 0;

$(document).ready(function() {
	//load journal entries
	$.ajax({
		type: "get",
		url: "json/journal.json",
		beforeSend: function() {
			$("#journal").html("Loading...");
		},
		timeout: 10000,
		error: function(xhr, status, error) {
			alert("Error: " + xhr.status + " - " + error);
		},
		dataType: "json",
		success: function(data) {
			$("#journal").html("");
			$.each(data, function() {
				//Code to to ensure proper entry correlation with the slider.
				//Oldest entries are at the top of JSON file and the newer entries are added on top of the older
				//entries in order
				$.each(this, function(key, value) {
					var id="entry" + entryCount;
					var htmlCode = '<div class="entry" id="entry' + entryCount +'" tabindex="' + entryCount + '">'+ 
						'<h3>' + value.date + '</h3>' + '<h3>' + value.title + 
						'</h3>' + '<div class ="jline"><div></div></div>' + 
						'<p>' + value.content+ '</p>' + '</div>';
					//If this is no the 1st entry, add the other entries below the current one.
					if(entryCount != 0){
						htmlCode += $("#journal").html();
						}
					//Update journal Html
					$("#journal").html(htmlCode);
					//Count that another entry has been added
					entryCount++;
				});
			});
		},
		//On complete create the journal slider
		complete:function(data){
			$( "#slider").slider({
				orientation: "vertical",
				range: "min",
				min: 0,
				max: entryCount-1,
				value:  entryCount-1,
				setp: 1,
				//When the slider is changed the according entry is focused and highlighted
				slide: function( event, ui ) {
					var idName= "entry" + ui.value;
					document.getElementById(idName).focus();
				}
			});
		}
	});
});
	
