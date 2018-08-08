console.log("working");

var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var start = document.getElementById('start').value;
var end = document.getElementById('end').value;
var submit = document.getElementById('submit');

function route(){
  console.log(end);
  console.log(start);
}

function initialize(){
  directionDisplay = new google.maps.DirectionsRenderer();
  var wellington = new google.maps.LatLng(-41.2865, 174.7762);
  var myOptions = {
    zoom: 6,
    mapTypeId: "roadmap",
    center: wellington
  }
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  directionDisplay.setMap(map);
  calcRoute();
}

function calcRoute(){
  var waypts = [];
  stop = new google.maps.LatLng(48.208174, 16.373819)
  waypts.push({
    location: stop,
    stopover: true
  });
  start = new google.maps.LatLng(52.520007, 13.404954);
  end = new google.maps.LatLng(48.856614, 2.352222);
  var request = {
    origin: start,
    destination: end,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response,status){
    if(status == google.maps.DirectionsStatus.OK){
      directionDisplay.setDirections(response);
      var route = response.routes[0];
    }
  })
}
