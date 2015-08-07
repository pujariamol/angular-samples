describe('AppControllers', function(){

  beforeEach(angular.module('juniorAmazon'));

  it('should create "products" model with 3 products', inject(function($controller) {
    var scope = {},
        ctrl = $controller('AppControllers', {$scope:scope});

    expect(scope.products.length).toBe(3);
  }));

});