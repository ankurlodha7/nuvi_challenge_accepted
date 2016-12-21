(function () {
    angular.module('UserInfo')
        .controller('userController',userControllerFn);
    userControllerFn.$inject=['$http','$localStorage'];
    function userControllerFn($http,$localStorage){
        var userCtrl = this;
        
        // Read that value back
        $http({
            method:'GET',
            url:"https://nuvi-challenge.herokuapp.com/activities"
        })
            .success(function (data) {
                console.log(data);
                $localStorage.data=data;
                userCtrl.users = $localStorage.data;
                
            })
            .error(function (err) {
                console.log(err);
                $localStorage.data.error =err;
                userCtrl.users.error = $localStorage.data.error;
            })
    }

})();