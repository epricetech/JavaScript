var lunch = prompt("What do you want for lunch?", "Type your lunch choice here").toUpperCase();

switch(lunch) {
	case 'sandwich':
		console.log("Sure thing! One sandwich coming up.");
	break;
	case 'soup': 
		console.log("Got it. Tomato's is my favorite.");
	break;
	case 'salad':
		console.log("Sounds good. How about a Caesar salad?");
	break;
	case 'pie':
		console.log("Pie is not a meal!");
	break;
	default:
		console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");}
		
	