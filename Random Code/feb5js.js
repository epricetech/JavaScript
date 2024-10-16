	<script>
	
	//
	// Demonstrate grabbing text from a tag
	//   and writing it back out upperCase
	//
	function stuff() {
	  // Grabbing what is in my <p> tag
	  var str = document.getElementById("out").innerHTML;
	  document.getElementById("out").innerHTML = str.toUpperCase();
	}
	
	//
	// Demonstrate grabbing text from an input box, test for
	//   an empty string and writing back out to an HTML tag.
	//
	function doThis() {
	  // Get users input from the input box
	  var input = document.getElementById("userInput").value;
	
	  // Output users input to my paragraph
	  if (input.length == 0) {
	     document.getElementById("out").innerHTML = "Oops no input";
	  }
	  else {
	      document.getElementById("out").innerHTML = input;
	  }
	  
	  // Convert the "out" element to upperCase
	  stuff();  // convert to uppercase
	}
	
	var states = ["Oregon", "California", "Washington", "Idaho"];
	var capitals = ["Salem", "Sacramento", "Olympia", "Boise"];
	
	//
	//	Return a random value from 0 to length of 'states' array - 1
	//
	function getRandomStateNum() {
	   var stateCount = states.length;
	   return Math.floor(Math.random() * stateCount);
	}
	
	var question;	// The state and capital object randomly selected
	
	function pickAState() {
	   var rndStateNum = getRandomStateNum();  //generate a random number
	   var stateName = states[ rndStateNum ];
	   document.getElementById("out").innerHTML = stateName;
	   var capitalName = capitals[ rndStateNum ];
	   // Create quiz object with function to return state
	   //   and a function to return capital.
	   question = {
	       theState: function() {
	            return stateName;
	       },
	       theCapital: function() {
	            return capitalName;
	       }
	   };
	   return question;
	}
	
	//
	//	Grab the user's input, convert to lowerCase. Retrieve the 
	//    correct answer, convert to lowerCase, report result to user.
	//
	function checkInput() {
	    var userGuess = document.getElementById("userInput").value;
	    userGuess = userGuess.toLowerCase();
	    var correctAnswer = question.theCapital();
	    correctAnswer = correctAnswer.toLowerCase();
	
	    if (userGuess == correctAnswer) {
	       document.getElementById("out").innerHTML = "Correct!";   
	    }
	    else {
	       document.getElementById("out").innerHTML = "Try Again";
	    }
	}
    </script>