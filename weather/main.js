var weather = require('openweather-apis');
weather.setLang('en');
weather.setZipCode(32608);

weather.setAPPID(7eaa7caf5e2e619bfeb2e2d14839650d);

// get the Temperature  
weather.getTemperature(function(err, temp){
    alert(temp);
});

