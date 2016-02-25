function updateMarkerAddress(str) {
  document.getElementById('address').innerHTML = str;
}



var marker;
var lat,lng,postalcode,locality1;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 12.934170, lng: 77.615511}
  });

  var infowindow = new google.maps.InfoWindow;

  marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: {lat: 12.934170, lng: 77.615511}
  });

  marker.bindTo('position', map, 'center');
  google.maps.event.addListener(map, 'dragend', function (event) {

    var lat_lng = marker.getPosition();

    getReverseGeocodingData(lat_lng.lat(), lat_lng.lng());
    $( "#map_sidebar" ).show( "fold");
    lat=lat_lng.lat();
    lng=lat_lng.lng();
});
}
function getReverseGeocodingData(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
        }
        if (status == google.maps.GeocoderStatus.OK) {
            var address = (results[0].formatted_address);
            updateMarkerAddress(address);


            var country, postal_code, locality, sublocality;
            for (i = 0; i < results[0].address_components.length; ++i)
            {
                for (j = 0; j < results[0].address_components[i].types.length; ++j)
                {
                    if (!country && results[0].address_components[i].types[j] == "country")
                    country = results[0].address_components[i].long_name;
                    else if (!postal_code && results[0].address_components[i].types[j] == "postal_code")
                    postal_code = results[0].address_components[i].long_name;
                    else if (!locality && results[0].address_components[i].types[j] == "locality")
                    locality = results[0].address_components[i].long_name;
                    else if (!sublocality && results[0].address_components[i].types[j] == "sublocality")
                    sublocality = results[0].address_components[i].long_name;
                }
            }
            postalcode=postal_code;
            locality1=locality;
        }
    });
}
