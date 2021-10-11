//[id, image_name, title, description]
var imageinfo=[["0","image.png","Urinal Ultimatium","I can't believe this"], ["1", "yikes.png", "Toilet Trouble", "A lifetime of fear"],
["3", "asd.png", "No toiltet paper here", "wiping is overrated"],["6", "asdfasd.png", "Monkeys are cool", "But chimps are cooler"]];
var scroll = 0;

/* Takes care of processes that need to take place on page start up, such as filling the array above.

 */
function pageStartup(){
	updateCurrent(0);
}
 
 //returns id for position
 function getId(pos){
	 return imageinfo[pos][0];
 }
 
//Returns row id is in
function getIdPosition(id){
	var myId = parseInt(id);
	var checkId = 0;
	for(var i = 0; i < imageinfo.length; i++){
		checkid = parseInt(imageinfo[i][0]);
		if(myId == checkid){
			//alert(myId);
			return i;
		}
	}
	alert("bad");
}

//Gets id for the currently selected picture
function getIdCurrent(){
	return document.getElementById("photo_id").innerHTML;
}

//returns image name for given id
function getImageName(id){
	var pos = getIdPosition(id);
	return imageinfo[pos][1];
}

//returns image title for given id
function getTitle(id){
	var pos = getIdPosition(id);
	return imageinfo[pos][2];
}

//returns image description for given idgiven 
function getDesciption(id){
	var pos = getIdPosition(id);
	return imageinfo[pos][3];
}

//
function updateCurrent(id){
	var pos = getIdPosition(id);
	setId(imageinfo[pos][0]);
	//setImage(imageinfo[pos][1]);
	setTitle(imageinfo[pos][2]);
	setDescription(imageinfo[pos][3]);
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
	var currId = parseInt(getIdCurrent());
	var newId = 0;
	if(parseInt(currId) === parseInt(getId(0))){
		//alert("going to back");
		newId = getId(imageinfo.length-1);
		updateCurrent(newId);
		return;
	}
	//alert("going back 1");
	newId= getId(getIdPosition(currId)-1);
	updateCurrent(newId);
}

function nextPicture(){
	var currId = parseInt(getIdCurrent());
	var newId = 0;
	if(parseInt(currId) === parseInt(getId(imageinfo.length-1))){
		//alert("going to front");
		newId = getId(0);
		updateCurrent(newId);
		return;
	}
	//alert("going forward 1");
	newId= getId(getIdPosition(currId)+1);
	updateCurrent(newId);
}

function setId(id){
	document.getElementById("photo_id").innerHTML = id;
}
function setDescription(desc){
	desc = String(desc);
	document.getElementById("photodescription").innerHTML = '<p>' + desc + '</p>';
}

function setImage(img){
	img = String(img);
	img = '<figure><a href="images/' + img + '"><img src="images/' + img + '"></a>';
	document.getElementById("imagename").innerHTML = img;
}

function setTitle(title){
	title = String(title);
	title = '<h3>' + title + '</h3>';
	document.getElementById("phototitle").innerHTML = String(title);
	return;
}
