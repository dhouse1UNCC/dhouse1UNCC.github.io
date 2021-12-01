//[id, image_name, title, description]
var scroll = 0;
var entryCount =0;
var currentImageId = 0;
var imageInfo = [];
var imageArr = [];
var currentImage = document.getElementById("currentphoto");
var currentImageInfo = document.getElementById("currentphotoinfo");


/* Takes care of processes that need to take place on page start up, such as filling the array above.

 */
function pageStartup(){
	updateCurrent(0);
	return;
}
 

//
function updateCurrent(id){
	var currentImage = document.getElementById("currentphoto");
	var currentImageInfo = document.getElementById("currentphotoinfo");
	currentImage.innerHTML = imageArr[id];
	currentImageInfo.innerHTML = imageInfo[id];
	currentImageId = id;
	return;
}

function updatePreview(){
	var htmlId;
	for(var i = 0; i < 4; i++){
		htmlId="preview"+String(i);
		document.getElementById(htmlID).innerHTML = "<img src='/images/"+ String(getImageName((scroll+i)%imageinfo.length)) +"' height=100% width=100%>";
	}return;
	
}
			
function generatePreview(id){
	return;
}

function lastPicture(){
	var newId = 0;
	if(parseInt(currentImageId) === parseInt(0)){
		//alert("going to back");
		newId = imageInfo.length-1;
		updateCurrent(newId);
		return;
	}
	//alert("going back 1");
	newId= currentImageId-1;
	updateCurrent(newId);
}

function nextPicture(){
	var newId = 0;
	if(parseInt(currentImageId) === parseInt(imageinfo.length-1)){
		//alert("going to front");
		newId = 0;
		updateCurrent(newId);
		return;
	}
	//alert("going forward 1");
	newId= currentImageId+1;
	updateCurrent(newId);
}

$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/gallery.json",
		timeout: 10000,
			error: function(xhr, status, error) {
			alert("Error: " + xhr.status + " - " + error);
		},
		dataType: "json",
		success: function(data) {
			$.each(data, function() {
				$.each(this, function(key, value) {
					imageInfo.push(
							"<h3>" + value.title+ "</h3>" +
							"<p>" + value.description + "</p>"
					);
					imageArr.push(
							"<img src='" + value.image +"'>"
					);
					entryCount++;
				});
			});
		},
		complete: function(data){
			pageStartup();
		}
	});
	
});