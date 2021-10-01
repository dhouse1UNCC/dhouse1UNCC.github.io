function setOperator(symbol){
	document.getElementById("operator").innerHTML = symbol;
	var number = document.getElementById('display').innerHTML;
	moveNumber(number);
}

function currentDisplay(next){
	var current = document.getElementById("display").innerHTML;
	if(parseFloat(current) != 0 && current!="0."){
		current = current + next;
	}else{
		current = next;
	}	
		var holder = document.getElementById("calculatorholder").innerHTML;
		//alert(current + " " + holder + " " + operator);
		document.getElementById("display").innerHTML = String(current);

}

function pushNum(num){
	var next = String(num);
	//alert("pushing " + next);
	currentDisplay(next);
}

function makeFloat(){
	var current = document.getElementById("display").innerHTML;
	for(var i = 0; i < current.length; i++){
		if(current[i] === "."){
			return;
		}
	}
	if(current === "0"){
		pushNum("0.");
	} else{
		pushNum(".");
	}
}

function clearValues(){
	document.getElementById("display").innerHTML = "0";
	document.getElementById("calculatorholder").innerHTML = "0";
	document.getElementById("operator").innerHTML = "";
}

function moveNumber(number){
	document.getElementById("calculatorholder").innerHTML = number;
	document.getElementById("display").innerHTML = "0";
}

function calculate(){
	var operation = document.getElementById("operator").innerHTML;
	var num1 = document.getElementById("display").innerHTML;
	var num2 = document.getElementById("calculatorholder").innerHTML;
	var result = 0;
	
	if(needFloat){
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		result = parseFloat(result);
	} else{
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		result = parseInt(result);
	}
	
	switch(operation){
		case "+": result = num1 + num2; break;
		case "-": result = num1 - num2; break;
		case "*": result = num1 * num2; break;
		case "/": result = num1 / num2; break;
		default: result = num1;
	}
	document.getElementById("display").innerHTML = String(result);
	document.getElementById("operator").innerHTML = "";
}

function needFloat(){
	var num1 = document.getElementById("display").innerHTML;
	var num2 = document.getElementById("calculatorholder").innerHTML;
	for(var i = 0; i < num1.length; i++){
		if(num1[i] === "."){
			return true;
		}
	}
	for(var i = 0; i < num2.length; i++){
		if(num2[i] === "."){
			return true;
		}
	}
	return false;
}