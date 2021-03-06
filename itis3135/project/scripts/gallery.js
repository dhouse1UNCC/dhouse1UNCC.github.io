//[id, image_name, title, description]
var scroll = 0;
var entryCount =0;
var currentImageId = 0;
var imageInfo = [];
var	$images = new Array();
var currentImage = document.getElementById("currentphoto");
var currentImageInfo = document.getElementById("currentphotoinfo");


/* Takes care of processes that need to take place on page start up,
* such as setting up the initial preview images and display image & info.
 */
function pageStartup(){
	startPreview();
	updateCurrent(0);
	return;
}
 
 //Scrolls the preview bar on the side up
function scrollUp(){
	//alert(scroll + " " + entryCount);
	setPreview(0,document.getElementById("preview1").innerHTML);
	setPreview(1,document.getElementById("preview2").innerHTML);
	setPreview(2,document.getElementById("preview3").innerHTML);
	if(scroll==entryCount-4){
		scroll++
		setPreview(3, $images[0]);
	}
	else if(scroll==entryCount-3){
		scroll++;
		setPreview(3, $images[1]); 
	}
	else if(scroll==entryCount-2){
		scroll++
		setPreview(3, $images[2]);
	}
	else if(scroll==entryCount-1){
		scroll=0;
		setPreview(3, $images[3]);
	}
	else{
		setPreview(3, $images[scroll+4]);
		scroll++;
		}
		return;
	}

//Scrolls the preview bar on the side down
function scrollDown(){
	//alert(scroll + " " + entryCount);
	if(scroll==0){
		scroll=entryCount-1;
	}
	else{
		scroll--;
	}
	
	//Changes previews based on the ones already in view
	setPreview(3, document.getElementById("preview2").innerHTML);
	setPreview(2, document.getElementById("preview1").innerHTML);
	setPreview(1, document.getElementById("preview0").innerHTML); 	
	setPreview(0, $images[scroll]);
	return;
}

/*Updates the current imageInfo
* 
*params
* id- index of the image that the user wants the display
*/
function updateCurrent(id){
	var currentImageInfo = document.getElementById("currentphotoinfo");
	$('#holder').html('');
	$('#holder').append($images[id]);
	
	$("#currentphoto").html('');
	$("#currentphoto").append($('#holder').html());
	currentImageInfo.innerHTML = imageInfo[id];
	currentImageId = id;
	return;
}

//Setup Preview on page Load
function startPreview(){
	for(var i = 0; i < $images.length && i < 4; i++){
		setPreview(i, $images[i]);
	}
	return;
}

/*Adds content to the appropiate preview slot
*
*params
* id- preview index to be changed
* content- a and nested img element to go into the preview slot
*/
function setPreview(id, content){
	var name = "#preview" + id;
	$('#holder').html('');
	$('#holder').append(content);
	
	$(name).html('');
	$(name).append($('#holder').html());
	return;
}
			
//Goes back 1 image, if at the first image goes to the last image
function lastPicture(){
	var newId = 0;
	if(parseInt(currentImageId) === parseInt(0)){
		//alert("going to back");
		newId = imageInfo.length-1;
		updateCurrent(newId);
		return;
	}
	//alert("going back 1");
	newId= parseInt(currentImageId-1);
	//alert(newId);
	updateCurrent(newId);
}

//Goes forward 1 image, if at the last image goes to the first image
function nextPicture(){
	var newId = 0;
	if(parseInt(currentImageId) === parseInt(imageInfo.length-1)){
		//alert("going to front");
		newId = 0;
		updateCurrent(newId);
		return;
	}
	//alert("going forward 1");
	newId= parseInt(currentImageId+1);
	//alert(newId);
	updateCurrent(newId);
}

//Main Jquery module
$(document).ready(function() {
	//Ajax function to retrieve images from JSON file
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
					$images.push($('<img>').attr({'src':value.url,'value':entryCount, 'class':'imgs'}));
					entryCount++;
				});
			});
		},
		//On complete, setup inital images
		complete: function(data){
			pageStartup();
		}
	});
	
	//Listener for top preview button 
	$('#topbutton').click(function(){
		scrollUp();
	});
	//Listener for bottom preview button 
	$('#bottombutton').click(function(){
		scrollDown();
	});
	//Listener for right gallery button
	$('#rightbutton').click(function(){
		nextPicture();
	});
	//Listener for left gallery button
	$('#leftbutton').click(function(){
		lastPicture();
	});
	//Listener for preview images, displays them upon user click
	$(document).on("click", '.imgs', function(){
		updateCurrent(parseInt($(this).attr('value')));
	});
});