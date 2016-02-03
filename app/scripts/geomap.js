var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 12.934170, lng: 77.615511}
  });
  //bounds  = new google.maps.LatLngBounds();
  //var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: {lat: 12.934170, lng: 77.615511}
  });
  marker.bindTo('position', map, 'center');
  //loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
  //bounds.extend(loc);
  //map.fitBounds(bounds);
  //map.PanToBounds(bounds);
  google.maps.event.addListener(map, 'dragend', function (event) {
    //alert("zasad");
    var lat_lng = marker.getPosition();
    //alert(latlng);
    getReverseGeocodingData(lat_lng.lat(), lat_lng.lng());
});
}
function getReverseGeocodingData(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            var address = (results[0].formatted_address);
            alert(address);
        }
    });
}