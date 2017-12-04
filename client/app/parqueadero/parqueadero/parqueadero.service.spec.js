'use strict';

describe('Service: parqueadero', function () {

  // load the service's module
  beforeEach(module('parqueaderosApp.parqueadero'));

  // instantiate service
  var parqueadero;
  beforeEach(inject(function (_parqueadero_) {
    parqueadero = _parqueadero_;
  }));

  it('should do something', function () {
    expect(!!parqueadero).to.be.true;
  });

});
