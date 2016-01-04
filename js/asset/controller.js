var myControl = angular.module('myControl', []);

myControl.controller('geoCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading){

    function initialize() {

        var posOptions = {
            timeout: 10000,
            maximumAge: 0,
            enableHighAccuracy: false
        };

        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
            var myLatLng = new google.maps.LatLng(lat, long);

            var mapOptions = {
                center: myLatLng,
                scrollwheel: false,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);  

            //imagen
            var image = '';
            
            //contenido
            var contentString = '<div id="content"></div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
 
            var marker = new google.maps.Marker({
                map: map,
                position: myLatLng,
                //icon: image, 
                title: 'La Casona'
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            $scope.map = map;
        });
    };

    google.maps.event.addDomListener(window, "load", initialize);

}, function(err) {
    console.log("Could not get location");
});