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
    alert('teste JS');
}
