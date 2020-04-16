var weather = require('openweather-apis');
weather.setLang('english');
weather.setCity('Gainesville');

weather.setAPPID('7eaa7caf5e2e619bfeb2e2d14839650d');


    // get the Temperature  
    weather.getTemperature(function(err, temp){
        console.log(temp);
    });
 
 
 
    // get the Humidity
    weather.getHumidity(function(err, hum){
        console.log(hum);
    });
 
    // get the Description of the weather condition
    weather.getDescription(function(err, desc){
        console.log(desc);
    });
 
 