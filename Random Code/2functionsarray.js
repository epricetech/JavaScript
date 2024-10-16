var scores = [60, 50, 60, 58, 54, 58, 50, 53, 54, 49, 69, 34, 54, 44, 51, 66, 64, 67, 52, 24, 18, 31, 44, 68];

function printAndGetHighScore(scores) {
var highScore = 0
var output;
for (var i = 0; i < scores.length; i++) {
	output = "Bubble solution # " + i + "score: " + scores[i];
	console.log(output);
if (scores[i] > highScore) {
	highScore = scores[i]; }}
	
return highScore; }

function getBestResults(scores, highScore) {
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
	if (scores[i] == highScore) {
	bestSolutions.push(i);}}

return bestSolutions; }

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " = bestSolutions);
