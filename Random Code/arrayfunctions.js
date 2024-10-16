var scores = [60,50,60,58,54,54,58,50,52,54.69,34,55,51,52,44,51,69,64,66,55,52,61,31,57,18,41,55,61,44];
var output;
var i = 0
while (i < scores.length) {
	output = "Bubble solution # " + i + " score: " + scores[i];
	console.log(output);
	i = i + 1; }
	
function makePhases() {
var words1 = ["24/7", "Multi-tier", "30,000 foot", "B-to-b", "win-win"];
var words2 = ["empowered", "value added", "oriented", "focused", "aligned"];
var words3 = ["process", "solution", "tipping point", "strategy", "vision"];

var rand1 = Math.floor(Math.random() * words1.length);
var rand2 = Math.floor(Math.random() * words2.length);
var rand3 = Math.floor(Math.random() * words3.length);

var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
alert(phrase); }

makePhases();