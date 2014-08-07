var destination;
var transport;
var weather;




$(document).ready(function(){


  $("#prague").click(function(event){
    event.preventDefault();
    destination = new Destination ("Prague", 4698);
    });

  $("#sanfran").click(function(event){
    event.preventDefault();
    destination = new Destination ("San Francisco", 2770);
    });

  $("#antarctica").click(function(event){
    event.preventDefault();
    destination = new Destination ("Antarctica", 8183);
    });

  $(".plane").click(function(event){
    event.preventDefault();
    transport = new Transportation ("plane", 600);
    });

  $(".car").click(function(event){
    event.preventDefault();
    transport = new Transportation ("car", 65);
    });

  $(".boat").click(function(event){
    event.preventDefault();
    transport = new Transportation ("boat", 27);
    });

  $("form").on("submit", function(event) {
    event.preventDefault();
    destination.cityChoice(transport);
  });

  $("#weatherFair").on("submit", function(event){
    event.preventDefault();
    weather= new Weather ("clear", 0, 5)
  });

  $("#weatherStorm").on("submit", function(event){
    event.preventDefault();
    weather= new Weather ("storm", 85, 25)
  });

  $("#weatherSnow").on("submit", function(event){
    event.preventDefault();
    weather= new Weather ("snow", 75, 8)
  });

  $("form").on("submit", function(event) {
    event.preventDefault();
    weather.windSpeed(transport);
  });
});

function Destination (city, distance, overseas){

  this.city = city;
  this.distance = distance;
  this.overseas = overseas;
  this.cityChoice = function(transInstance){
    var travelTime = this.distance/transInstance.speed;

    if (travelTime < 8){
      $("body").append("<h1>pack your bag!</h1>");
    } else{
      $("body").append("<h1>Sorry, Travel Closer</h1>");
    }
  };
}


  var destPrague = new Destination ("Prague", 4698);
  var destSanFran = new Destination ("San Francisco", 2770);
  var destAntarc = new Destination ("Antarctica", 8183);


//START TRANSPORTATION FUNCTION

function Transportation (type, speed){
  this.type = type;
  this.speed = speed;

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



var weatherClear = new Weather ("clear", 0, 5);
var weatherStorm = new Weather ("storm", 85, 25);
var weatherSnow = new Weather ("snow", 75, 8);
