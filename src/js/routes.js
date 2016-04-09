app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '../partials/home.html',
      controller: 'homeController'
    })
    .when('/charges', {
      templateUrl: '../partials/charges.html',
      controller: 'chargesCtrl'
    })
    .when('/earnings', {
      templateUrl: '../partials/earnings.html',
      controller: 'earningsCtrl'
    })
    .otherwise('/home');
});