function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if(secretPassword == file.password) {
		return file.contents;}
	else {
		return "Invalid password! No secret for you.":}}
		
function setSecret(file, secretPassword, secret) {
	if(secrePasswrod == file.password) {
		file.opened = 0;
		file.contents = secret;}}
		
var superSecretFile = {
	level: "Classified",
	opened: 0,
	password: 2,
	contents: "Dr evil next meeting is in Detroit."};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr evil next meeting is in Philidelphia");
secret = getSecret(superSecretFile, 2);
console.log(secret);