/******************************************************/
/** jquery-match-height                              **/

$(function() {
    $('.machines .col').matchHeight();
});

/******************************************************/
/******************************************************/
/** Contact Section Map                              **/

$(function() {

  // Snippt source: http://www.labnol.org/internet/embed-google-maps-background/28457/
  // Similar Snippt: http://sickdesigner.com/fun-with-google-maps

  console.log("MAP-SECTION");
  var position = [30.049019020085613, 31.20098772209326];
  var fpoint = [30.049007411520297, 31.202280546838438];

  function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);
    var focuse = new google.maps.LatLng(fpoint[0], fpoint[1]);

    var mapOptions = {
      'zoom': 17, // initialize zoom level - the max value is 21
      'streetViewControl': false, // hide the yellow Street View pegman
      'scaleControl': true, // allow users to zoom the Google Map
      'mapTypeId': google.maps.MapTypeId.ROADMAP,
      'center': focuse,
      'scrollwheel': false
    };

    map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
      'position': latLng,
      'map': map,
      'draggable': false,
      'animation': google.maps.Animation.DROP
    });
  }

  google.maps.event.addDomListener(window, 'load', showGoogleMaps);
});
