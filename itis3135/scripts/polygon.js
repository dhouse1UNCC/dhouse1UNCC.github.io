function polygon(){
	var sides = prompt("He pulls a rock out of his pocket and gives you a sneaky look. He tells you to pick a number between 0 and 10.");
	sides = validateEntry(sides);
	var shapeName = findShape(parseInt(sides));
	alert('He crushes the rock in his hand, and all that is left is ' + shapeName + '. "Lucky you kid," the goblin smiles and drops it to your feet.');
	return;
}

function validateEntry(entry){
	var check =  Math.abs(Math.round(parseInt(entry)));
	if(entry === ""){
	check = prompt("You can't pull a fast one on me kid, pick a real number between 0 and 10!", "For real this time!")
		validateEntry(check);
	}
	if( !(check <= 10)){
		check = prompt("You can't pull a fast one on me kid, pick a real number between 0 and 10!", "For real this time!")
		validateEntry(check);
	}
	return check;
}

function findShape(sides){
	var shapeName = "";
	switch(sides){
		case 0: shapeName = "dust"; break;
		case 1: shapeName = "a henagon"; break;
		case 2: shapeName= "a digon"; break;
		case 3: shapeName = "a triagnle"; break;
		case 4: shapeName = "a rectangle"; break;
		case 5: shapeName = "a pentagon"; break;
		case 6: shapeName = "a hexagon"; break;
		case 7: shapeName = "a heptagon"; break;
		case 8: shapeName = "a octogon"; break;
		case 9: shapeName = "a nonagon"; break;
		case 10: shapeName = "a decogon"; break;
		default: shapeName = "a break in the space time continuoum. If spotted contact support";break; //to display in case of error
	} 
	return shapeName;
}