$(document).ready(function () {


console.log("This is a test");



// Create a list of strings in an array.
// Itereate through the list and create buttons on the screen for each item


var foods = ["Pizza", "Refried Beans", "Curry", "Turkey Sub", "Potato Salad"];

foods.forEach(function(food, index) {
	var button = $("<button>");
	button.attr("id", "item#: "+ index);
	button.text(food);
	$("#button-container").append(button);
    
});





// wait for submit.  When submit is clicked create a new button for 

$('button').on("click", function(e) {

	e.preventDefault();

	console.log('you just clicked a button');


})


// write click event for toggling between annimated and static gif




});