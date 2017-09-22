angular
    .module('myBeeApp.controllers')
    .controller('singup', singup);

singup.$inject = [
    '$scope'
];

function singup(
    $scope
){
        $scope.singupMessage = "Inscreva-se"
}
