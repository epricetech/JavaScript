var friends = {};
	friends.bill = {
		firstName: "Bill",
		lastName: "Gates",
		number: "(541) 555-5555",
		address: ['36 Main st', 'Bend', 'OR', '97701']};
	friends.steve = {
		firstName: "Steve",
		lastName: "Jobs",
		number: "(509) 555-5555",
		address: ['56 West st', 'Redmond', 'OR', '97756']};
	friends.eric = {
		firstName: "Eric",
		lastName: "Price",
		number: "(503) 555-5555",
		address: ['36 North st', 'Sisters', 'OR', '97760']};
		
var list = function(one) {
	for(var x in friends) {
		console.log(x);}};
var search = function(name) {
	for(var x in friends) {
		if(friends[x].firstName === name) {
		console.log(friends[x]);
		return friends[x];}}}