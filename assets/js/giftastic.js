$(document).ready(function () {


console.log("This is a test");


function putButtonsOnScreen () {
	$("#button-container").html("");
	foods.forEach(function(food, index) {
		var button = $("<button>");
		button.attr("class", "food-buttons");
		button.attr("id", "item#: "+ index);
		button.text(food);
		$("#button-container").append(button); 
    
});
};

// Create a list of strings in an array.
// Itereate through the list and create buttons on the screen for each item


var foods = ["Pizza", "Refried Beans", "Curry", "Turkey Sub", "Potato Salad"];
putButtonsOnScreen();

// wait for submit.  When submit is clicked create a new button for 

$('#foodFormSubmit').on("click", function(e) {

	e.preventDefault();
	var newFood = $('#foodInput').val();
	foods.push(newFood);
     console.log("Here is the new food list");

	putButtonsOnScreen();
	$('#foodInput').val("");
});

	




// write click event to get 10 gifs when a food button is clicked

//$(".food-buttons").on("click", function )

// write click event for toggling between annimated and static gif




});