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
				$.each(this, function(key, value) {
					var id="entry" + entryCount;
					var htmlCode = '<div class="entry" id="entry' + entryCount +'" tabindex="' + entryCount + '">'+
						'<h3>' + value.date + '</h3>' +
						'<h3>' + value.title + '</h3>' +
						'<div class ="jline"><div></div></div>' +
						'<p>' + value.content+ '</p>' +
						'</div>';
					if(entryCount != 0){
						htmlCode += document.getElementById('#journal').innerHTML;
						}
					$("#journal").html(htmlCode);
					entryCount++;
				});
			});
		},
		complete:function(data){
			$( "#slider").slider({
				orientation: "vertical",
				range: "min",
				min: 0,
				max: entryCount-1,
				value:  entryCount-1,
				setp: 1,
				slide: function( event, ui ) {
					var idName= "entry" + ui.value;
					document.getElementById(idName).focus();
				}
			});
		}
	});
});
	
