var person = [["Daniel H.", 0], ["Mel B.", 0], ["Darien J.", 0], ["Justin D.", 0]];

//Adds a salary to the table
function addSalary(){
	var money = parseFloat(document.getElementById("salary").value);
	var name = document.getElementById("names").value;
	if(isNaN(money) || parseFloat(money).toFixed(2) <=	0.00){
		alert("Looks like you typed something in wrong! Please validate your enties and try again.");
		return;
	}
	money = parseFloat(money).toFixed(2);
	for(var i = 0; i < person.length; i++){
		if(name === person[i][0]){
			person[i][1] = money;
		} 
	}
	document.getElementById("salary").value= 0;
	document.getElementById("names").focus();
}

//Displays average and highest salary
function displayResults(){
	if(person.length==0){
		alert("Please enter some values before trying to find an average!");
		return;
	}
	var average = parseFloat(0);
	var highest = 0;
	for(var i = 0; i < person.length; i++){
		if(person[i][i] > parseFloat(highest)){
			highest = person[i][1];
		}
		average= parseFloat(average) + parseFloat(person[i][1]);
	}
	average= parseFloat(average)/parseFloat(person.length);
	average = average.toFixed(2);
	highest = highest.toFixed(2);
	var results = "<h2>Highest Salary || Average Salary</h2><p>$" + String(highest) + " || $" + String(average) + "</p>";
	document.getElementById("results").innerHTML = results;
}

//Displays salaries in a table
function displaySalaries(){
	if(person.length==0){
		alert("Please enter some values before generating a table!");
		return;
	}
	var results = "<table><thead><tr><th>Name</th><th>Salary</th></tr></thead><tbody>";
		for(var i = 0; i < person.length; i++){
			results+="<tr><td>" + String(person[i][0]) + "</td><td>$" + String(person[i][1]) + "</td></tr>";
		}
	results += "</table>";
	document.getElementById("results_table").innerHTML = results;
}

//A function to fill the dropbox with the information of the persons table's 1st column.
function fillDropbox(){
	//alert(person[0][0]);
	var choices = "";
	var full_name = "";
  var seperated_name = [];
	var current_id = "";
	for(var i = 0; i < person.length; i++){
		full_name=person[i][0];
		seperated_name= full_name.split(" ");
		current_id = seperated_name[0].toLowerCase();
		choices += "<option>" + person[i][0] +"</option>";
	}
	document.getElementById("names").innerHTML = choices;
}