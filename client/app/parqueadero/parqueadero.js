'use strict';

angular.module('parqueaderosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero', {
        url: '/parqueadero',
        template: '<parqueadero></parqueadero>'
      });
  });
