app.controller('homeController', ['$scope', "inventoryService", function($scope, inventoryService) {
  $scope.inventory = inventoryService.getInventory();

}]);