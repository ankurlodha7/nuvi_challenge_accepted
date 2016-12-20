(function () {
    angular.module('UserInfo')
        .controller('userController',userControllerFn);
    userControllerFn.$inject=['$http'];
    function userControllerFn($http){
        var userCtrl = this;
        $http({
            method:'GET',
            url:"https://nuvi-challenge.herokuapp.com/activities"
        })
            .success(function (data) {
                console.log(data);
                userCtrl.users=data;
            })
            .error(function (err) {
                console.log(err);
                var error =err;
            })
    }

})();