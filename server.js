var http = require('http');
var shoe = require('shoe');
var ecstatic = require('ecstatic')(__dirname + '/static');
var dnode = require('dnode');

var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var sensor = new five.Sensor('A0')
  var temp = null

  sensor.on('data', function () {
    // Convert to celsius
    temp = this.value * 0.0048828125 * 100
  })

  var server = http.createServer(ecstatic);
	server.listen(9999);

	var sock = shoe(function (stream) {
	    var d = dnode({
	        getTemperature: function (cb) {
			      cb(temp)
			    }
	    });
	    d.pipe(stream).pipe(d);
	});
	sock.install(server, '/dnode');

})




