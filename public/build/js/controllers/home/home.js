angular
    .module('myBeeApp.controllers')
    .controller('home', home);

home.$inject = [
    '$scope',
    '$rootScope'
];

function home(
    $scope,
    $rootScope
){
        //show menu
        $rootScope.changeDisplay = 'display-block';
}
