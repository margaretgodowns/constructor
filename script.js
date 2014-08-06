//the constructor written as a function

function Destination (city, distance, overseas){

  //parameters of the constructor

  this.city = city;
  this.distance = distance;
  this.overseas = overseas;

  //how to choose the city to travel to: the cityChoice is a function of transportation, so you have to figure out travel time. Travel time is the distance of the destination divided by the transportation's speed.

  this.cityChoice = function(transInstance){
    var travelTime = this.distance/transInstance.speed;

    //the travel time is less than eight hours, you go to the city!

    if (travelTime < 8){
      console.log ("pack your bag!");
    } else{
      console.log ("sorry, travel somewhere closer!");
    }
  };
}

var destPrague = new Destination ("Prague", 4698, "overseas");
var destSanFran = new Destination ("San Francisco", 2770, "continental");
var destAntarc = new Destination ("Antarctica", 8183, "overseas");


//START TRANSPORTATION FUNCTION

function Transportation (type, speed){
  this.type = type;
  this.speed = speed;

  //the transportation choice is a funtion of the weather type's wind speed, so you have to figure out transportation speed by using a slow-down function. When weatherType.windSpeed is less than or equal to 10mph, the transportation speed is not affected. When the weatherType.windSpeed is greater than 10mph, the transportation speed slows down by 2% per every 2mph.

  this.transChoice = function(weather){
    var transSpeed = this.speed;
    console.log(weather.windSpeed);
    if (weather.windSpeed > 10){
      this.speed = (this.speed * (weather.windSpeed - 10))/50;
      console.log(this.speed);
    } else {
      console.log(this.speed);

    }
  };
}

var transPlane = new Transportation ("plane", 600);
var transCar = new Transportation ("car", 65);
var transBoat = new Transportation ("boat", 27);

//START WEATHER FUNCTION

function Weather (forecast, rainChance, windSpeed){
  this.forecast = forecast;
  this.rainChance = rainChance;
  this.windSpeed = windSpeed;
}

var weatherClear = new Weather("clear", 0, 5);
var weatherStorm = new Weather("storm", 85, 25);
var weatherSnow = new Weather("snow", 75, 8);
