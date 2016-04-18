// begin with a blank/new order
var order = '';
var foodtype;
var drinktype;

// build a function to ask questions

function choosefood(firstQuestion,foodtype){
	 var answerInput = prompt(firstQuestion);
  	order = answerInput + " with: ";
  	foodtype = answerInput.toUpperCase();
}
function question(questionText) {
  // your code goes here
  var answerInput = prompt(questionText);
  order = order + answerInput + ", ";
  //foodtype = answerInput.toUpperCase();
}
function yesorno(food){
	var answerInput = prompt("Do you want " + food + "? Please answer yes or no");
	if (answerInput.toUpperCase()=="YES"){
		order = order + food + ", "
	}
	else{
		order = order + answerInput + " " + food + ", ";
	}
}
function drink(){
	var answerInput = prompt("Any drinks? (coke, Dr. pepper, iced tea, lemonade)");
	drinktype = answerInput;
}


// call the QUESTION function with the order options
choosefood("What do you want to eat? Please choose burito or tacos(3)");
question("What is your tortilla? Please choose white tortilla or brown tortilla.");
question("What is your protein? Please choose from pork, chicken.");
yesorno("salsa");
yesorno("queso");
yesorno("pepers");
yesorno("guacamole");
drink();






// output their order
document.write("<p>You ordered: " + order + "<p>");
document.write("<p>Your drink would be: " + drinktype + "<p>");
