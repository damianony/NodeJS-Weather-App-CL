var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.options({
		location: {
			demand: false,
			alias: 'l',
			description: 'location (eg: New York, Rome, etc.)',
			type: 'string'
		}
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided');
	weather(argv.location).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function(error) {
		console.log(error);
	});
} else {
	console.log('Location was not provided');
	location().then(function(location) {
		return weather(location.postal);
	}).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function(error) {
		console.log(error);
	});

}