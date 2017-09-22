/*Angular Controller*/
angular
    .module('myBeeApp.controllers')
    .controller('loginCreate', loginCreate);

loginCreate.$inject = [
    '$scope'
];

function loginCreate(
    $scope
){
    //alert('Login Create');
    $scope.namePerson = "28 Weeks Later";
}
