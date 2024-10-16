var avatar ="generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
var level = points / pointsPerLevel;
if (level == 0) {
	return "Teddy Bear"; }
else if (level == 1) {
	return "Cat"; }
else if (level >= 2) {
	return "Gorilla"; }}
	
function updatePoints(bonus, newPoints) {
var i = 0;
while (i < bonus) {
	newPoints += skill * bonus;
	i++ }
	return newPoints + userPoints; }
userPoints = updatePoints(2100);
avatar = getAvatar(2112);
