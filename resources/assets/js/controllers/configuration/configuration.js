angular
    .module('myBeeApp.controllers')
    .controller('configuration', configuration);

configuration.$inject = [
    '$scope'
];

function configuration(
    $scope
){
    $scope.nameConfig = "Página de Configuração"
}
