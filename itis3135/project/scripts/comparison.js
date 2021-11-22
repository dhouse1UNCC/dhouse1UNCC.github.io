$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/journal.json",
		beforeSend: function() {
			$("main").html("Loading...");
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
	
	//set  up journal slider
	
	$("#comparisonnav button").click(function(){
		$.ajax({
			type: "get",
			url: "json/journal.json",
			beforeSend: function() {
				$("comparison").html("Loading...");
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
						var pro_json = value.pros;
						alert(pro_json);
						var con_json = value.cons;
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
	
