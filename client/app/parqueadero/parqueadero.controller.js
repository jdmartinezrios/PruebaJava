'use strict';

(function(){

class ParqueaderoComponent {
  constructor(automovilesService,parqueaderosService,puestosService,$interval) {
  this.automovilesService = automovilesService;
  this.parqueaderosService = parqueaderosService;
  this.puestosService = puestosService;
  this.$interval = $interval;
  this.show=false;
  this.show2=false;
  this.clock = Date.now();
  }
  $onInit(){
    var tick = function() {};
    tick();
    this.$interval(() => {
      this.clock = Date.now();
    }, 1000);  
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

    this.automovilesService.query().$promise
    .then(response =>{
      console.log(response,'AUTOMOVILES');
      this.automoviles = response;      
    })
    .catch(err => {
      console.log(err,'error');
    });
  }

  consultarHora(){
    var hora = new Date();
    this.horas = hora.toJSON();
  }

  ingresarCarro(){
    this.show=true;
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
    this.asignar.diponibilidadPuesto = 0;
    this.puestosService.save(this.asignar).$promise
    .then(response => {
      console.log(response,'se asigno puesto');
      this.carroAsignado = response;
    })
    .catch(err => {
      console.log(err);

    });
  }

  capturar(item){
    $('#modalPuesto').modal();    
    this.carroActualizado = item; 
    var hora2 = new Date();
    this.horaSalida = hora2.toJSON();
    this.horaFinal = this.horaSalida;
  }

  actualizarPuesto(item){
    $('#modalPuesto').modal();
    this.carrito = item;  
    item.parqueadero.ingresos = item.parqueadero.tarifa;
    item.automovil.horaSalida = this.horaFinal;
    this.horaFinalSalida = item.automovil.horaSalida;
    console.log(item.parqueadero.ingresos);
    this.puestosService.update(item).$promise
    .then(response => {
      console.log(response,'se saco el carro');
    })
    .catch(err => {
      console.log(err);

    });           
    this.automovilesService.update({
      placa:this.carrito.automovil.placa,
      horaSalida:this.horaFinalSalida,
      horaEntrada:this.carrito.automovil.horaEntrada
    }).$promise
    .then(response=>{
      console.log(response,'se actualizo la hora de salida');
    })
    .catch(err=>{
      console.log(err);
    });
  }
  actualizarTarifa(tarifa){
    this.parqueaderosService.update(tarifa).$promise
    .then(response => {
      console.log(response,'se actualizo la tarifa');
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
