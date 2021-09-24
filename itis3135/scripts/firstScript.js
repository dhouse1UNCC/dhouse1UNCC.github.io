function quickTest(){
	alert("Hey alert here");
	return;
}

//Framework for our script page
function startupScript(){
	const company = "Dire Leprotic Hobgoblins";
	var today = new Date();
	var name = prompt("Hello, what is your name?", "Your name here");
	var mood = prompt("How are you doing today?" , "swell");
	document.write("Today is " + today.getMonth() + "/" + today.getDay() + "/" + (today.getYear()+1900) +
	"<br>The time is: " + today.getHours() + ":" + today.getMinutes() +"<br>");
	document.write("The " + company + " welcomes you, " + name + "!<br>We're glad you're doing " +mood+ " today!<br>");
document.write('<figure><img src="../images/hobgoblin.png" alt="A leprotic goblin" width="279" height="300" style="float:right";><!-- image source https://www.pngwing.com/en/free-png-huejk --></figure>');
	document.write('<button onclick="rollADie()">Roll a d20</button>');
	document.write('<button onclick="goblinName()">Generate Goblin Name</button>');
	document.write('<button onclick="magicType()">Find Your Magic Type</button>');
	document.write('<button onclick="goblinBag()">Reach Into Your Goblin Sack</button>');
	document.write('<button onclick="dndDistance()">DND Distance Measuring Tool</button>');
	return;
}

//Rolls a 20 sided die
function rollADie(){
	var dieRoll = (Math.floor(Math.random() *20)+1);
	alert("You have rolled a " + dieRoll + "!");
	return;
}

//Randomly gives the user a goblin name
function goblinName(){
	var firstNameSelector = (Math.floor(Math.random()*7));
	var lastNameSelector = (Math.floor(Math.random()*7));
	var firstName = "";
	var lastName = "";
	var greeting = "";
	switch(firstNameSelector){
		case 0: firstName = "Arlo"; break;
		case 1: firstName = "Stitches"; break;
		case 2: firstName = "Grunk"; break;
		case 3: firstName = "Bane"; break;
		case 4: firstName = "Cren"; break;
		case 5: firstName = "Klem"; break;
		case 6: firstName = "Grent"; break;
	}
	switch(lastNameSelector){
		case 0: lastName = "the Unhinged"; break;
		case 1: lastName = "the Lame"; break;
		case 2: lastName = "the Bright"; break;
		case 3: lastName = "the Short"; break;
		case 4: lastName = "the Liar"; break;
		case 5: lastName = "the Hoarder"; break;
		case 6: lastName = "the Smelly"; greeting=""; break;
	}
	alert("Well met, " +firstName + " "+ lastName + "!");
	return;
}

//Randomly gives users a magic type and displays it
function magicType(){
	var magicSelector = (Math.floor(Math.random()*6));
	var magicType;
	switch(magicSelector){
		case 0: magicType = "red"; break;
		case 1: magicType = "blue"; break;
		case 2: magicType = "green"; break;
		case 3: magicType = "white"; break;  
		case 4: magicType = "black"; break;
		case 5: magicType = "red"; break;
	}
	alert("You are a master of " + magicType + " magic.");
	return;
}

//Displays conents of our "goblin bag"
function goblinBag(){
	var itemSelector=(Math.floor(Math.random()*5));
	var itemType = "";
	var reaction ="";
	alert("You reach into your goblin pack...");
	switch(itemSelector){
		case 0: itemType="nothing"; reaction="How sad";break;
		case 1: itemType="rat tails"; reaction="Yummy";break;
		case 2: itemType="a strange paste"; reaction="You're not sure how to feel";break;
		case 3: itemType="a family photo"; reaction="You still remember the day you stole it";break;
		case 4: itemType="a family photo"; reaction="You still remember the day you stole it";break;
	}
	 alert("...You found " + itemType + ". " + reaction + "!");
}

//User functionallity to calculate distance on a dnd board, where a 1 in. x 1 in. block represents 5 ft x 5 ft spaces.
function dndDistance(){
	var xMovement = prompt("How many x spaces did you go? (Left and Down)", 0);
	var yMovement = prompt("How many y spaces did you go? (Up and Down)", 0);
	xMovement = Number(xMovement);
	yMovement = Number(yMovement);
	var distance = Math.sqrt(Math.pow(xMovement,2)+Math.pow(yMovement,2));
	alert("You traveled about " + distance +  " feet.");
	return;
}