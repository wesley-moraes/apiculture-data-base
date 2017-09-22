angular
    .module('myBeeApp.controllers')
    .controller('recoveryPassword', recoveryPassword);

recoveryPassword.$inject = [
    '$scope'
];

function recoveryPassword(
    $scope
){
        $scope.recovery = "Recuperar Senha"
}
