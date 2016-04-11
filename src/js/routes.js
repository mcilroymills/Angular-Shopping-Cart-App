app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '../partials/home.html',
      controller: 'homeController'
    })
    .when('/checkout', {
      templateUrl: '../partials/checkout.html',
      controller: 'checkoutController'
    })
    .otherwise('/home');
});