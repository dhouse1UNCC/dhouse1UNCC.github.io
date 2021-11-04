var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

//var $ = function(id) { return document.getElementById(id); };

/*window.onload = function() {
    //event handlers
	return;
};
*/

function updateCalorie(){
	var cal = parseInt(document.getElementById('calories').value);
	if(cal = "" || isNaN(cal)){
		alert('Please enter a valid number!');
		return;
	}
	cal = parseInt(document.getElementById('calories').value);
	var days = document.getElementsByName('day-of-week');
	for(var i = 0; i < days.length; i++){
		if(days[i].checked){
			calories[i]=cal;
		}
	}
	alert("Your updated calorie details are: " + calories)
	document.getElementById('calories').value = '';
}

function showAverageCalories(){
	var average = 0;
	for(var i = 0; i < calories.length; i++){
		average += calories[i];
	}
	average /= 7;
	alert(average);
	document.getElementById('calorie_display').innerHTML = '<p style="color:green; background-color:white; height:300%;">' + average + '</p>';
}

function showMax(){
	var max = 0;
	var maxDay = "";
	for(var i = 0; i < calories.length;i++){
		if(calories[i]>max){
			max = calories[i];
			maxDay = days[i];
		}
	}
	document.getElementById('showMax').innerHTML = "<p><br>Your maximum consumed calorie is " + max + ' on '+ maxDay + '</p>';
}