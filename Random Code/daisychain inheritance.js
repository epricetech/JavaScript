function Animals(name, numLegs) {
	this.name = name;
	this.numLegs = numLegs;
	this.isAlive = true;}

function Penguin(name) {
	this.name = name;
	this.numLegs = 2; }
	
function Emperor(name) {
	this.name = name;
	this.saying = "Waddle Waddle";}
	
Penguin.prototype = new Animal();
Emperor.prototype = new Penquin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying);
console.log(myEmperor.numLegs);
console.log(myEmperor.isAlive);