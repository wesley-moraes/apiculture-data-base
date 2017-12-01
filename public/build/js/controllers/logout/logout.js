angular
    .module('myBeeApp.controllers')
    .controller('logout', logout);

logout.$inject = [
    '$scope',
    '$rootScope',
    '$location'
];

function logout(
    $scope,
    $rootScope,
    $location
){
    //hide menu
    $rootScope.backgroundImg = 'background-img';
    $rootScope.changeDisplay = 'display-none';

    $location.path('/login');
}
