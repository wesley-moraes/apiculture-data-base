angular
    .module('myBeeApp.controllers')
    .controller('login', login);

login.$inject = [
    '$scope'
];

function login(
    $scope
){

    //password show or hide
    $scope.showPassword = false;
    $scope.toggleShowPassword = function(){
        $scope.showPassword = !$scope.showPassword;
    }
}


