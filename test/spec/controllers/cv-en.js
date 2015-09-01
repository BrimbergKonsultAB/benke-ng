'use strict';

describe('Controller: CvEnCtrl', function () {

  // load the controller's module
  beforeEach(module('benkeNgApp'));

  var CvEnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CvEnCtrl = $controller('CvEnCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CvEnCtrl.awesomeThings.length).toBe(3);
  });
});
