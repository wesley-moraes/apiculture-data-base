var myBeeApp = angular.module('myBeeApp', [
    'ngRoute',
    'myBeeApp.controllers'
]);

angular.module('myBeeApp.controllers', []);

myBeeApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginCreate'
        })
        .when('/configuration', {
            templateUrl: 'configuration/configuration.html'
        })
        .when('/singup', {
            templateUrl: 'singup/singup.html'
        })
        .when('/recovery-password', {
            templateUrl: 'recovery-password/recovery-password.html'
        })
        .otherwise({
            redirectTo: '/login'
        });

// $locationProvider.html5Mode({
//  enabled: true,
//  requireBase: false
//});
    //$locationProvider.hashPrefix('!');
}]);


