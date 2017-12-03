$(document).ready(function () {


console.log("This is a test");


function putButtonsOnScreen () {
	$("#button-container").html("");
	foods.forEach(function(food, index) {
		var button = $("<button>");
		button.attr("class", "btn btn-primary food-buttons");
		button.attr("id", food);
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

$(document).on("click",".food-buttons", function(e) {
	console.log(e.target.id);
	var food = e.target.id;
	 var apikey = '4ZsNr03jo4iJ0MnrP3ROnvU1geb3Orfd';
	var queryURL = "https://api.giphy.com/v1/gifs/search"
	
	// Use $.param to nicely format the url sting
	queryURL += "?" + $.param({           
		'q': food,
		'api_key': apikey,
		'limit': 10
	});

	console.log(`This is the formated URL string:${queryURL}`);
	$.ajax({
	  url: queryURL,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);

	  var gifs = result.data;    
	  gifs.forEach(function(gif, i) {

	  	
	  	var gifUrl = gif.images.downsized_medium.url;
	  	var gifImage = $("<img>");
	  	gifImage.attr("src", gifUrl);

	  	console.log(gifUrl);
	  //	image.attr("id", food + "img#" + i);
	  	$('#image-container').prepend(gifImage);
	  	
	   }); 


	}).fail(function(err) {
	  throw err;
	});
});  // end of on click --> food button

// write click event for toggling between annimated and static gif




});