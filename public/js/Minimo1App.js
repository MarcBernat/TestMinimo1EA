
var Minimo1App = angular.module('Minimo1App', ['ngRoute']);

Minimo1App.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/api', {
            templateUrl: './views/api.html',
            controller: 'ApiCtrl'
        })
        .otherwise({
            redirectTo: '/api'
        });

    }]);


