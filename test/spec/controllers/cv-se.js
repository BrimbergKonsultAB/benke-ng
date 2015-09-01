'use strict';

describe('Controller: CvSeCtrl', function () {

  // load the controller's module
  beforeEach(module('benkeNgApp'));

  var CvSeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CvSeCtrl = $controller('CvSeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CvSeCtrl.awesomeThings.length).toBe(3);
  });
});
