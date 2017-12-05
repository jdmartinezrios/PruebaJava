'use strict';

describe('Service: puestos', function () {

  // load the service's module
  beforeEach(module('parqueaderosApp.puestos'));

  // instantiate service
  var puestos;
  beforeEach(inject(function (_puestos_) {
    puestos = _puestos_;
  }));

  it('should do something', function () {
    expect(!!puestos).to.be.true;
  });

});
