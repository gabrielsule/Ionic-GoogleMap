**Ionic - GoogleMap** es un ejemplo de la usabilidad de ionic con librerias de Cordova para la geolocalizacion.

## Instalando Ionic
```npm install -g ionic cordova
...```

## Creando una app
```ionic start myapp blank
...```

## Instalando ngCordova 
```cd myapp
   bower install ngCordova
...```

## Agregando librerias a index.html
```<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="js/asset/app.js"></script>
<script src="js/asset/controller.js"></script>
<script src="lib/angular-google-maps/dist/angular-google-maps.min.js"></script>
<script src="http://maps.google.com/maps/api/js?key=API_de_google"></script>
...```


## Llamando a la libreria ngCordova desde AngularJS

```var myapp = angular.module('starter', ['ionic', 'ngCordova', 'myControl'])
...```

## Para que no existan problemas al cargar el mapa

```google.maps.event.addDomListener(window, "load", initialize);
...```


### Librerias externas
* [Ionic](http://ionicframework.com/)
* [ngCordova](https://www.npmjs.com/package/ng-cordova)
* [Google API](http://maps.google.com/maps/api)

## License 
* Free

## Version 
* Version 1.0

## Contacto
* e-mail: gabrielsule (gabrielsule@gmail.com)
* Twitter: [@gabrielsule](https://twitter.com/gabrielsule)
