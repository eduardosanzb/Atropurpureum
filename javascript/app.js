/**
 * Created by synDreams on 18/09/2016.
 */
(function(){
    var app = angular.module('herbario', ["firebase"]);
    app.controller("herbCtrl", function($scope, $firebaseArray, $firebaseAuth) {

        var ref = firebase.database().ref()
        var BasicPckg = ref.child('BasicPckg')
        $scope.baseH = $firebaseArray(BasicPckg);
        $scope.baseA = {}
        $scope.addMessage = function(especie) {
            $scope.baseH.$add(especie)
        };
        console.log($scope)
    });
})();