'use strict';

(function(){

class ParqueaderoComponent {
<<<<<<< HEAD
  constructor(parqueaderosservice) {
    this.message = 'Hello';
=======
  constructor(automovilesService,parqueaderosService,puestosService) {
  this.automovilesService = automovilesService;
  this.parqueaderosService = parqueaderosService;
  this.puestosService = puestosService;
  }

  $onInit(){
    this.parqueaderosService.query().$promise
    .then(response => {
      console.log(response,'parqueaderos');
      this.parqueadero = response;
    })
    .catch(err => {
      console.log(err);
    });
    this.puestosService.query().$promise
    .then(response => {
      console.log(response,'puestos');
      this.puestos = response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  ingresarCarro(){
    this.automovilesService.save(this.ingresar).$promise
    .then(response => {
      console.log(response,'se envio');
      this.mostrar = response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  /*sacarCarro(item){
    this.automovilesService.update(item).$promise
    .then(response => {
      console.log(response,'si se saco el carro');
    })
    .catch(err => {
      console.log(err);
    });
  }*/
  asignarPuesto(){
    console.log(this.asignar);
    this.puestosService.save(this.asignar).$promise
    .then(response => {
      console.log(response,'se asigno puesto');
      this.error = response;
    })
    .catch(err => {
      console.log(err);

    });
  }
  actualizarPuesto(){
    this.item;
    this.puestosService.update(id:this.item.id, this.item).$promise
    .then(response => {
      console.log(response,'se saco el carro');
      this.carroActualizado = response;
    })
    .catch(err => {
      console.log(err);

    });
>>>>>>> 9a7a42fff542adc70968437066c263c4f76615cf
  }
}

angular.module('parqueaderosApp')
  .component('parqueadero', {
    templateUrl: 'app/parqueadero/parqueadero.html',
    controller: ParqueaderoComponent,
<<<<<<< HEAD
    controllerAs: 'parqueaderoCtrl'
=======
    controllerAs: 'vm'
>>>>>>> 9a7a42fff542adc70968437066c263c4f76615cf
  });

})();
