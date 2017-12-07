'use strict';

angular.module('parqueaderosApp', ['parqueaderosApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router', 'ui.bootstrap'
  ])
  .constant('API','http://localhost:8080/parqueaderosBackend')
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
