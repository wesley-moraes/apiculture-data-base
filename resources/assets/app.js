var myBeeApp = angular.module('myBeeApp', ['ngRoute'])

myBeeApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'public/build/views/login/login.html'
        })
        .otherwise({
            redirectTo: 'public/build/views/login/login.html'
        });

 $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
    //$locationProvider.hashPrefix('!');
}])
