'use strict';

describe('Service: automoviles', function () {

  // load the service's module
  beforeEach(module('parqueaderosApp.automoviles'));

  // instantiate service
  var automoviles;
  beforeEach(inject(function (_automoviles_) {
    automoviles = _automoviles_;
  }));

  it('should do something', function () {
    expect(!!automoviles).to.be.true;
  });

});
