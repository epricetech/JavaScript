var troll = prompt("You're walking through a forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN!").toUpperCase();

swith(troll) {
	case 'FIGHT':
		var strong = prompt("How courageous! Are you strong?(Yes or No?)?").toUpperCase();
		var smart = prompt("Are you smart?").toUpperCase();
			if(strong === 'YES' || smart === 'YES') {
			console.log("You only need one of the two! You beat the troll.  Nice Work!"); }
			else {
			console.log("You're not strong or smart.  Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");}
	break;
	case 'PAY':
		var money = prompt("All right, we'll pay the troll. Do you have any money(Yes or No)?").toUpperCase();
		var dollars = propmt("Is your money in Troll dollars?").toUpperCase();
			if(money === 'YES && dollars === 'YES') {
			console.log("Great! You pay the troll and continue on your merry way.");}
			else {
			console.log("Dang! This troll only takes Troll dollars.  You get whomped!");}
	break;
	case 'RUN':
		var fast = prompt("Let's book it! Are you fast(Yes or No)?").toUpperCase();
		var headStart = prompt("Did you get a head start?").toUpperCase();
			if(fast === 'YES' || headStart === 'YES') {
			console.log("You got away, barley. You live to stroll through the forest another day.");}
			else {
			console.log("You're not fast and you didn't get a head start.  You never had a chance! The troll ate you.");}
	break;
	default:
		console.log("I didn't understand your choice.  Hit run and try again.  this time pick either Fight, pay or run."):}
		