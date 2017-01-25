var weather ={};
weather.clear1 = "01";
weather.clouds1 ="02";
weather.clouds2 ="03";
weather.clouds3 ="04";
weather.rain1 = "10";
weather.rain2 = "10";
weather.thunder1 = "11";
weather.snow1 = "13";
weather.mist1 = "50";
//console.log(weather);
var keys = Object.keys(weather); 

$(document).ready(function() {
  
var coordinates = [];
var temperature = 0;

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  
var lat = position.coords.latitude;
var lon = position.coords.longitude;
  
coordinates[0] = lat.toString();
coordinates[1] = lon.toString();
    
//$(".latitude").html(coordinates[0]);
//$(".longitude").html(coordinates[1]);

getWeatherAndDisplay();
  
});
}




function getWeatherAndDisplay() { 
 
    //$.getJSON("http://api.openweathermap.org/data/2.5/weather?units=metric&lat=42&lon=73&APPID=eaf607284a508b29627f7369b57bc03d&callback=?",function(json){
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&APPID=eaf607284a508b29627f7369b57bc03d&callback=?",function(json){
    console.log("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&APPID=eaf607284a508b29627f7369b57bc03d&callback=?");
    //"http://api.openweathermap.org/data/2.5/weather?lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&APPID=eaf607284a508b29627f7369b57bc03d&callback=?"
    
  $(".city").html(json.name +","); 
  $(".country").html(json.sys.country); 
  $(".temperature").html("temperature: " + (Math.round(json.main.temp)) + "°C"); 
  temperature = json.main.temp;
  $(".conditions").html("conditions: " + json.weather[0].description);
              
      var icon = json.weather[0].icon;
      icon = icon.slice(0, -1);        
      Object.keys(weather).forEach(function (key) {
        if(weather[key]== icon)
           {
            var temp = key;
            //delete end of temp
            temp = temp.slice(0, -1); 
            $(".image").css('background-image', 'url(https://raw.githubusercontent.com/bmbaron/FilesForFreeCodeCamp/master/' + temp + '_350.jpg)');       
           }
      });
    

    
  });
}
  
  
   
var clicked = 0;

$("#button").on("click", function() {
     
  //if the button has been clicked an even amount of times, convert to Fahrenheit and display
  if (clicked%2 == 0) {     
    temperature = Math.round((9/5*temperature)+32);
    $(".temperature").html("temperature: " + temperature + "°F");      
    $(".button").html("Convert to Celsius");             
  }
  //if the button has been clicked an odd amount of times, convert to Celsius and display
  else{       
    temperature = Math.round(5/9*(temperature-32));
    $(".temperature").html("temperature: " + temperature + "°C");      
    $(".button").html("Convert to Fahrenheit");             
  }
     
  //increment the global counter
  clicked++;     
 
});
  
});
