// Define any variables in the global scope

var counter = 0;
var whatCard = "";
var compareCards = [];
var firstClicked = "";
var secondClicked = "";



$(document).ready(function() {


	// On click
	$(".front").click(function(){ 

		// Turn over card NB need googleapis version of jQuery UI for 'clip' to work
		$(this).hide('clip', {direction : 'horizontal'}, 400);

		// What card is it?
		whatCard = ($(this).attr("class")).split(" ").pop();

		//Add this card to an array which will later test the two values against each other
		compareCards[compareCards.length] = whatCard;
		
		// Click counter += 1
		counter +=1;
		
		// If card counter == 2  
		if(counter ==2) {
			// Split the array, then split each value to retrieve number only 
			firstClicked = compareCards[0];
			secondClicked = compareCards[1];
			
			var a = compareCards[0].slice(-1);
			var b = compareCards[1].slice(-1);

			// If not a match
			if(a != b) {

				//Turn both cards with "clipped" class back over (elapse time)
				$("." + firstClicked).delay(1000).show('clip', {direction: 'horizontal'}, 0);
				$("." + secondClicked).delay(600).show('clip', {direction: 'horizontal'}, 0);

				// Reset click counter
				counter = 0;

				// Empty the array so it can be reused
				compareCards = [];
			}
		
			// Else
			else {
				// Give both cards same colour outline (elapse short time)
				var c = compareCards[0].slice(0,1);
				var d = compareCards[1].slice(0,1);

				$("." + c).delay(500).queue(function() {$(this).addClass('outlined')});
				$("." + d).delay(500).queue(function(){$(this).addClass('outlined')});

				// Reset click counter
				counter = 0;

			// Empty the array so it can be reused
			compareCards = [];

			}
		}
	});



	// ======================== MAKE IT HARDER?! ========================

	$("button").click(function(){

		$(this).toggleClass("makeHard");

		if($(this).hasClass('makeHard')) {

			document.getElementById('difficulty').innerHTML = "Noooo! Make it easier again!";

			$(this).css({"background-color" : "#F7E1E1"});

			document.getElementById('croatia').innerHTML='<p>Zagreb</p>';
			document.getElementById('peru').innerHTML='<p>Lima</p>';
			document.getElementById('spain').innerHTML='<p>Madrid</p>';
			document.getElementById('mali').innerHTML='<p>Bamako</p>';
			document.getElementById('iran').innerHTML='<p>Tehran</p>';
			document.getElementById('norway').innerHTML='<p>Oslo</p>';
			document.getElementById('panama').innerHTML='<p>Panama City</p>';
			document.getElementById('japan').innerHTML='<p>Tokyo</p>';
			document.getElementById('egypt').innerHTML='<p>Cairo</p>';
			document.getElementById('india').innerHTML='<p>New Delhi</p>';
		}

		else {
			document.getElementById('difficulty').innerHTML = "Make it harder!";

			$(this).css({"background-color" : "#ED4C7C"});

			document.getElementById('croatia').innerHTML='<p>Croatia</p>';
			document.getElementById('peru').innerHTML='<p>Peru</p>';
			document.getElementById('spain').innerHTML='<p>Spain</p>';
			document.getElementById('mali').innerHTML='<p>Mali</p>';
			document.getElementById('iran').innerHTML='<p>Iran</p>';
			document.getElementById('norway').innerHTML='<p>Norway</p>';
			document.getElementById('panama').innerHTML='<p>Panama</p>';
			document.getElementById('japan').innerHTML='<p>Japan</p>';
			document.getElementById('egypt').innerHTML='<p>Egypt</p>';
			document.getElementById('india').innerHTML='<p>India</p>';
		}

	});



});