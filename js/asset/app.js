var myapp = angular.module('starter', ['ionic', 'ngCordova', 'myControl'])

myapp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

myapp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html'
  });
   $urlRouterProvider.otherwise("/");
 })