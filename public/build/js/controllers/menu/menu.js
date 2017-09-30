angular
    .module('myBeeApp.controllers')
    .controller('menu', menu);

menu.$inject = [
    '$scope',
    '$rootScope'
];

function menu(
    $scope,
    $rootScope
){
        $rootScope.changeDisplay = 'display-none';
    }
