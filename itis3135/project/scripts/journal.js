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
					$("#journal").append(
						'<div class="entry">'+
							'<h3>' + value.date + '</h3>' +
							'<h3>' + value.title + '</h3>' +
							'<div class ="jline"><div></div></div>' +
							'<p>' + value.content+ '</p>' +
						'</div>'
					);
				});
			});
		}
	});
	
	//set  up journal slider
});
	
