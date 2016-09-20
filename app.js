/**
 * Created by synDreams on 18/09/2016.
 */
(function(){
    var app = angular.module('herbario', ["firebase"]);
    app.controller("herbCtrl", function($scope, $firebaseObject) {
        var ref = new Firebase("https://herbario-a575d.firebaseio.messages");
        $scope.baseH = $firebaseArray(ref);
        $scope.addMessage = function() {
            $scope.baseH.$add({});
        };
    });
})();