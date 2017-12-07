'use strict';

(function(){

class ParqueaderoComponent {
  constructor(automovilesService,parqueaderosService,puestosService) {
  this.automovilesService = automovilesService;
  this.parqueaderosService = parqueaderosService;
  this.puestosService = puestosService;
  this.show=false;
  this.show2=false; 
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
        for(var i=0; i < response.length; i++){
          if(response[i].diponibilidadPuesto){
          response[i].diponibilidadPuesto = 1;       
        }else{
          response[i].diponibilidadPuesto = 0;       
        }
      }
      this.puestos = response;
    })
    .catch(err => {
      console.log(err);
    });
  }
  ingresarCarro(){
    this.show=true;
    this.ingresar.diponibilidadPuesto = 0;
    this.automovilesService.save(this.ingresar).$promise
    .then(response => {
      console.log(response,'se envio');
      this.mostrar = response;
    })
    .catch(err => {
      console.log(err);
    });
  }

  asignarPuesto(){  
    this.show2=true;
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

  capturar(item){
    $('#modalPuesto').modal();
    this.carroActualizado = item;
  }

  actualizarPuesto(item){        
    $('#modalPuesto').modal();   
    $(item).hide();
    this.puestosService.update(item).$promise
    .then(response => {
      console.log(response,'se saco el carro');         
    })
    .catch(err => {
      console.log(err);

    });
  }
}

angular.module('parqueaderosApp')
  .component('parqueadero', {
    templateUrl: 'app/parqueadero/parqueadero.html',
    controller: ParqueaderoComponent,
    controllerAs: 'vm'
  });

})();
