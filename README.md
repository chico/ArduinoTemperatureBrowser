
# Setup arduino

* Get temperature sensor and place its three pins in breadboard
* Connect middle pin to A0
* Connect left pin to 3.3V
* Connect right pin to Ground

# Get code

* ```git clone git@github.com:chico/ArduinoTemperatureBrowser.git```
* ```cd ArduinoTemperatureBrowser```

# Install and run

* ```npm install```
* ```npm install -g browserify```
* ```browserify client.js -o static/bundle.js```
* ```node server```

# See if it works :)

* Open [http://localhost:9999](http://localhost:9999)
