angular
    .module('myBeeApp.controllers')
    .controller('login', login);

login.$inject = [
    '$scope',
    '$window'
];

function login(
    $scope,
     $window
){
    //password show or hide
    $scope.showPassword = false;
    $scope.toggleShowPassword = function(){
        $scope.showPassword = !$scope.showPassword;
    }

    //validate form
    $scope.validateForm = function(){
        //if(authentication){}
        //var email = this.email;
        $window.location = '#!/home';
    }
}


