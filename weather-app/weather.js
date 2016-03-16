var request = require('request');

module.exports = function(location) {
	return new Promise(function(resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.apixu.com/v1/current.json?key=b89110e8953c4043a92183241161503&q=' + encodedLocation;

		if (!location) {
			return reject('Could not get weather');
		}

		request({
			url: url,
			json: true
		}, function(error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else if (typeof body.error != 'undefined' && body.error.code === 1006) {
				reject(body.error.message);
			} else {
				resolve('It\'s ' + body.current.temp_f + ' in ' + body.location.name + ', ' + body.location.region + '!');
			}
		});
	});
};