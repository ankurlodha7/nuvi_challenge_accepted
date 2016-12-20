(function()
{
    angular.module('UserInfo',['ngRoute'])
        .config(configFn);
    configFn.$inject=['$routeProvider'];
    function configFn($routeProvider) {
        $routeProvider.when('/users',{
            templateUrl:'view/users.html',
            controller:'userController',
            controllerAs:'userCtrl'
        })
        $routeProvider.when('/users/:userid',{
            templateUrl:'view/userprofile.html',
            controller:'userProfileController',
            controllerAs:'userProfile'
        })

        $routeProvider.when('/posts',{
            templateUrl:'view/posts.html',
            controller:'postController',
            controllerAs:'postCtrl'
        })
            .otherwise({
                redirectTo:'/users'
            });
    };








})();