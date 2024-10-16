function StaffMember(name, discount) {
	this.name = name;
	this.discount = discount;}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);
var eric = new StaffMember("Eric", 20);

var cashRegister = {
	total: 0,
	lastTransactionAmount: 0,
	add: function(itemCost) {
		this.total += (itemCost || 0);
		this.lastTransactionAmount = itemCost; }
	scan: function(item, quantity) {
switch(item) {
	case "eggs": this.add(0.98 * quantity); break;
	case "milk": this.add(1.23 * quantity); break;
	case "magazine": this.add(4.99 * quantity); break;
	case "chocolate": this.add(0.45 * quantity); break;}
return true;}

voidLastTransaction: function() {
	this.total == this.lastTransactionAmount;
	this.lastTransactionAmount = 0;}

applyStaffDiscount: function() {
	this.total = (this.total * (employee.discount / 100));}};
	
cashRegister("eggs", 2);
cashRegister("milk", 1);
cashRegister("magazine" 4);

cashRegister.applyStaffDiscount(eric);
console.log("Your bill is " + cashRegister.total.toFixed(2));