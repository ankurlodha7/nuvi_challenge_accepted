(function()
{
    angular.module('UserInfo',["chart.js","ngRoute","ngStorage"])
        .config(configFn);
    configFn.$inject=['$routeProvider'];
    function configFn($routeProvider) {
        $routeProvider.when('/users',{
            templateUrl:'view/users.html',
            controller:'userController',
            controllerAs:'userCtrl'
        })
        $routeProvider.when('/chart',{
            templateUrl:'view/chart.html',
            controller:'userProfileController',
            controllerAs:'chart'
        })
            .otherwise({
                redirectTo:'/users'
            });
    };








})();