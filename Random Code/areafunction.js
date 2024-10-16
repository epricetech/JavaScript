var radius = 5.2;
var theArea = calculateArea(radius);
function calculateArea(r) {
var area;
if (r < 0) {
	return 0; }
else {
	area = 2 * Math.Pi * r;
	return area; }}
console.log("The area is: " + theArea);
