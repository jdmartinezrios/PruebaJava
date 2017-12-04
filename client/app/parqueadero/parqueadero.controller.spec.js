'use strict';

describe('Component: ParqueaderoComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderosApp'));

  var ParqueaderoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueaderoComponent = $componentController('parqueadero', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
