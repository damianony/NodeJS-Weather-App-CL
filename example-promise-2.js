function getLocation() {
	return new Promise(function(resolve, reject) {
		resolve("New York");
	});
}

function getWeather(location) {
	return new Promise(function(resolve, reject) {
		resolve("It's 78 in " + location);
	});
}

getLocation().then(function(location) {
	return getWeather(location);
}).then(function(currentWeather) {
	console.log(currentWeather);
});