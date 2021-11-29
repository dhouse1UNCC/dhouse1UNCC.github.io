$(document).ready(function() {
	/*$.ajax({
		type: "get",
		url: "json/comparison.json",
		beforeSend: function() {
			$("#comparisonnav").html("Loading...");
		},
		timeout: 10000,
		error: function(xhr, status, error) {
			alert("Error: " + xhr.status + " - " + error);
		},
		dataType: "json",
		success: function(data) {
			$("#comparisonnav").html("");
			$.each(data, function() {
				$.each(this, function(key, value) {
					$("#comparisonnav").append(
						"<button>" + value.name+ "</button>"
					);
				});
			});
		}
	});
	*/
	alert();
	$("#comparisonnav button").click(function(){
		var buttonName = $(this).text();
		alert(buttonName);
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
				var matchingData = JSON['data'].filter(function(x){ return x.name == buttonName});
				$.each(matchingData, function() {
					$.each(this, function(key, value) {
						$("#comparisontext").append(
							"<h2>" + value.name+ "</h2>" +
							"<p>" + value.description + "</p>"
						);
						
						$("#copmarisonpicture").append(
							"<img src='" + value.image +"'>"
						);
					});
				});
			}
		});
	
	});
});
	
