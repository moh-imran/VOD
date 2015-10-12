
/**
* Created by Shakeel Latif on 6/4/2015.
*/

angular.module('th.Profiling').controller('index', ['$scope', 'API_RESOURCES', 'ServerRequest', '$http', '$location','$cookies',   function($scope,  AR, SR,$http,location,$cookies){

$scope.loginForm = function(loginData, validity){
if(validity){
location.path('/home');
}
else{
    $scope.Messages = [];
    $scope.Messages.push("Please Enter Valid Email and Password..");
}

}


}]);