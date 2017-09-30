angular
    .module('myBeeApp.controllers')
    .controller('singup', singup);

singup.$inject = [
    '$scope'
];

function singup(
    $scope
){
    //password show or hide
    $scope.showPassword = false;
    $scope.toggleShowPassword = function(){
        $scope.showPassword = !$scope.showPassword;
    }

    $scope.showRepeatPassword = false;
    $scope.toggleShowRepeatPassword = function(){
        $scope.showRepeatPassword = !$scope.showRepeatPassword;
    }
}
