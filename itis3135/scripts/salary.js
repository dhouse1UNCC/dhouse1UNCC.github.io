var person = [];
var salary = [];

function addSalary(){
	money = document.getElementById("salary").value;
	name = document.getElementById("name").value;
	if(name =="" || isNaN(money)){
		alert("Looks like you typed something in wrong! Please validate your enties and try again.");
		return;
	}
	money = parseFloat(money).toFixed(2);
	salary.push(money);
	person.push(name);
	document.getElementById("name").value = "";
	document.getElementById("salary").value= 0;
	document.getElementById("name").focus();
}

function displayResults(){
	if(salary.length==0){
		alert("Please enter some values before trying to find an average!");
		return;
	}
	var average = parseFloat(0);
	var highest = 0;
	for(var i = 0; i < salary.length; i++){
		if(salary[i] > parseFloat(highest)){
			highest = salary[i];
		}
		average= parseFloat(average) + parseFloat(salary[i]);
	}
	average= parseFloat(average)/parseFloat(salary.length);
	average = average.toFixed(2);
	var results = "<h2>Highest Salary || Average Salary</h2><p>$" + String(highest) + " || $" + String(average) + "</p>";
	document.getElementById("results").innerHTML = results;
}

function displaySalaries(){
	if(salary.length==0){
		alert("Please enter some values before generating a table!");
		return;
	}
	var results = "<table><thead><tr><th>Name</th><th>Salary</th></tr></thead><tbody>";
		for(var i = 0; i < salary.length; i++){
			results+="<tr><td>" + String(person[i]) + "</td><td>$" + String(salary[i]) + "</td></tr>";
		}
	results += "</table>";
	document.getElementById("results_table").innerHTML = results;
}