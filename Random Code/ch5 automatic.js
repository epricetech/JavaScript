function makeCare() {
	var makes = ["Chevy", "Ford", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = ["1955", "1957", "1948", "1954", "1961"];
	var colors = ["red", "blue", "tan", "yellow", "while"];
	var convertible = [true, false];
	
	var rand1 = Math.floor(Math.random() * makes.length);
	var rand2 = Math.floor(Math.random() * models.length);
	var rand3 = Math.floor(Math.random() * years.length);
	var rand4 = Math.floor(Math.random() * colors.length);
	var rand5 = Math.floor(Math.random() * 5);
	var rand6 = Math.floor(Math.random() * 2);
	var rand7 = Math.floor(MAth.random() * 3421);
	var car = {
		make: makes[rand1],
		model: models[rand2],
		year: years[rand3],
		color: colors[rand4],
		passengers: rand5,
		convertible: convertible[rand6],
		mileage: rand7};
	return car;}
	
	function displayCar(car) {
		console.log("your new car is a " + car.year + " " + car.make + " " + car.model);}
	
	var carToSell = makeCar();
	display car(carToSell);