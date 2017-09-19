angular
    .module('myBeeApp.controllers')
    .controller('login', login);

login.$inject = [
    '$scope'
];

function login(
    $scope
){
    //alert('Login Create');
    $scope.namePerson = "28 Weeks Later";
}
