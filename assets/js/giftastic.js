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


var foods = ["Pizza", "BBQ", "Pasta", "Turkey Sub", "Tacos"];
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
		$('#image-container').html(" ");
	  console.log(result);

	  var gifs = result.data;    
	   gifs.forEach(function(gif, i) {

	  	
	  	var gifStillUrl = gif.images.original_still.url;
	  	var gifAnimateUrl = gif.images.original.url;
	  	var rating = gif.rating;
	  	rating = rating.toUpperCase();
	  	console.log(rating);
	  	var figure = $("<figure>");
	  	figure.attr("class", "figure")
	  	var gifImage = $("<img>");
	  	gifImage.attr("src", gifStillUrl);
	  	gifImage.attr("data-still", gif.images.original_still.url);
	  	gifImage.attr("data-animate", gif.images.original.url);
	  	gifImage.attr("data-state", "still");
	  	gifImage.attr("class", 'figure-img img-fluid');
	  	
	  	console.log(gifStillUrl);
	  	figure.append(gifImage);
	  	figure.append(`<figcation class='figure-cation fig-cap text-center'> Rated: ${rating}</figcaption>`)
	  //	image.attr("id", food + "img#" + i);
	  	console.log("<figure class='figure'>" + gifImage + "</figure>")
  	$('#image-container').append(figure ) ; //+ "<p> Rating: "+ rating + "</p>" );
//	  $('#image-container').append("<figcaption>A caption for the above image.</figcaption>" );

	   }); 


	}).fail(function(err) {
	  throw err;
	});
});  // end of on click --> food button

// write click event for toggling between annimated and static gif

$(document).on("click","img", function (e) {
	console.log(e);
	console.log(this);
	var state = $(this).attr("data-state");

	//console.log("This is the image state:" + state);
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
      	 console.log('The image is :' + state);
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        console.log("This is the new state: " + state);
        console.log(this);
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
  //    	console.log("This is the image state:" + state);
  })


});