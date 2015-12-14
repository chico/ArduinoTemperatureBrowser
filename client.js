var domready = require('domready');
var shoe = require('shoe');
var dnode = require('dnode');

var showTemperature = function(remote) {
	remote.getTemperature(function(temp) {
		console.log('got temperature reading: ' + temp + ' celsius');
		var result = document.getElementById('result');
		result.textContent = temp.toFixed(2) + '\u2103';
	});
	setTimeout(function() {showTemperature(remote)}, 3000);
}

domready(function () {
    var stream = shoe('/dnode');

    var d = dnode();
    d.on('remote', function (remote) {
        showTemperature(remote);
    });
    d.pipe(stream).pipe(d);
});

