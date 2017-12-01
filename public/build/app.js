var myBeeApp = angular.module('myBeeApp', [
    'ngRoute',
    'myBeeApp.controllers'
]);

angular.module('myBeeApp.controllers', []);

myBeeApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'login'
        })
        .when('/singup', {
            templateUrl: 'singup/singup.html',
            controller: 'singup'
        })
        .when('/recovery-password', {
            templateUrl: 'recovery-password/recovery-password.html',
            controller: 'recoveryPassword'
        })
        .when('/home', {
            templateUrl: 'home/home.html',
            controller: 'home'
        })
        .when('/consult', {
            templateUrl: 'consult/consult.html',
            controller: 'consult'
        })
        .when('/add', {
            templateUrl: 'add/add.html',
//            controller: 'singup'
        })
        .when('/configuration', {
            templateUrl: 'configuration/configuration.html',
            controller: 'configuration'
        })
        .when('/logout', {
            templateUrl: 'login/login.html',
            controller: 'logout'
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


