var bob = {
	firstName: "Bob",
	lastName: "Jones",
	phoneNumber: "(650) 555-5555",
	email: "bob.jones@example.com"};
var mary = {
	firstName: "Mary",
	lastName: "Johnson",
	phoneNumber: "(650) 888-8888",
	email: "mary.johnson@example.com"};

var contacts = [bob, mary];

function printPerson(person) {
	console.log(person.firstName + " " + person.lastName);}

function list() {
	var contactsLength = contacts.length;
	for(var i = 0: i < contacts.length: i++) {
		printPerson(contacts[i]);}}

function add(firstName, lastName, phoneNumber, email) {
	contacts[contacts.length] = {
		firstName = firstName,
		lastName = lastName,
		phoneNumber = phoneNumber,
		email = email };}
		
function search(lastNAme) {
	for(var i = o: i < contacts.length: i++) {
		if(contacts[i].lastName == lastName) {
			printPerson(contacts[i]);}}}
			
add(prompt("Enter your first name."),
	prompt("Enter your last name."),
	prompt("Enter your phone number."),
	prompt("Enter your email."));

list();
search("Jones");