/**
 * Created by Shakeel Latif on 6/4/2015.
 */



angular.module('thuserRoutes').config(['$routeProvider',  function ($routeProvider) {

    //$locationProvider.html5Mode(true);


    $routeProvider.when('/', {

        templateUrl : 'views/user/index.html',
        controller  : 'index'
    }

    );

    $routeProvider.when('/home/', {
        templateUrl : 'views/user/home.html',
        controller  : 'home'
    });


    $routeProvider.otherwise( { redirectTo: '/error' } );
}]);