function initMap() {
    var element = document.querySelector('.map');
    var coordinates = { lat: 27.664827, lng: -81.515755 };
    var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: coordinates });
    var markers = new google.maps.Marker({ position: coordinates, map: map });
}