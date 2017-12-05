'use strict';

(function(){

class ParqueaderoComponent {
  constructor(parqueaderosservice) {
    this.message = 'Hello';
  }
}

angular.module('parqueaderosApp')
  .component('parqueadero', {
    templateUrl: 'app/parqueadero/parqueadero.html',
    controller: ParqueaderoComponent,
    controllerAs: 'parqueaderoCtrl'
  });

})();
