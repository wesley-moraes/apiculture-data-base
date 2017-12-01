angular
    .module('myBeeApp.controllers')
    .controller('home', home);

home.$inject = [
    '$scope',
    '$rootScope',
//    '$angularCharts'
];

function home(
    $scope,
    $rootScope
){
        //show menu
        $rootScope.changeDisplay = 'display-block';
        $rootScope.backgroundImg = '';

}

//RadarCtrl();
//
//function RadarCtrl($scope){
//    //chart
//        $scope.labels = ["Primavera", "Verão", "Outono", "Inverno"];
//        $scope.data = [
//                [32, 53, 14, 79],
//                ['Janeiro', 'Fevereiro', 'Março', 'Abril']
//            ];
//        $scope.colors = [{
//          backgroundColor:"transparent",
//          hoverBackgroundColor:"#000",
//          borderColor:"#FF530D",
//          hoverBorderColor:"#000"
//        }];
//}
