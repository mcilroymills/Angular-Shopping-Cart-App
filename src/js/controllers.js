app.controller('homeController', ['$scope', "inventoryService", function($scope, inventoryService) {
  $scope.inventory = inventoryService.getInventory();
  $scope.sort = 'null';
  //An array of all categories
  $scope.categories = inventoryService.getCategories();
  //Resets search by category when "Select one:" is selected
  $scope.$watch('search.categories', function() {
    if ($scope.search.categories === '')
      $scope.search.categories = undefined;
  });
  $scope.cart = inventoryService.getCart();
  $scope.quantity = {};
  //Adds a tea to the cart num times
  $scope.addToCart = function (teaID) {
    //Push tea into service's cart
    inventoryService.addToCart(teaID, $scope.quantity[teaID]);
    //Update scope's cart
    $scope.cart = inventoryService.getCart();
    console.log($scope.cart);
  };
}]);

app.controller('checkoutController', ['$scope', "inventoryService", function($scope, inventoryService) {
  $scope.cart = inventoryService.getSummaryCart();
  $scope.quantity = {};
  //Adds a tea to the cart num times
  $scope.addToCart = function (teaID) {
    //Push tea into service's cart
    inventoryService.addToCart(teaID, $scope.quantity[teaID]);
    //Update scope's cart
    $scope.cart = inventoryService.getCart();
  };
  $scope.getSubTotal = function (teaID) {
    return inventoryService.calculateSubTotal(teaID);
  };
  //Adds a tea to the cart num times
  $scope.editCart = function (teaID, oldQuantity) {
    //Push tea into service's cart
    inventoryService.editCart(teaID, oldQuantity, $scope.quantity[teaID]);
    //Update scope's cart
    $scope.cart = inventoryService.getCart();
    };
}]);