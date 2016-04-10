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

}]);