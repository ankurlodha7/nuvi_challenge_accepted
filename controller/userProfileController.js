(function ()
{
    angular.module('UserInfo')
        .controller('userProfileController', userProfileControllerFn);
    userProfileControllerFn.$inject=['$http','$scope'];
    function userProfileControllerFn($http,$scope)
    {
        
        $http({
            method: 'GET',
            url: "https://nuvi-challenge.herokuapp.com/activities"
        }).success(function (data) {
            var chartjsData = [];
            for (var i = 0; i < data.length; i++) {
                chartjsData.push(data[i].provider);

            }
            var arr = chartjsData;

            function countInArray(array, what) {
                var count = 0;
                for (var i = 0; i < array.length; i++) {
                    if (array[i] === what) {
                        count++;
                    }
                }
                return count;
            }

            var chartdata = [];
            chartdata.push(countInArray(arr, 'facebook')); // returns no. of times fb appears in array and pushes in to chartdata
            chartdata.push(countInArray(arr, 'instagram'));
            chartdata.push(countInArray(arr, 'twitter'));
            chartdata.push(countInArray(arr, 'tumblr'));
            console.log(chartdata);
            var chartJson = JSON.stringify(chartdata);
            console.log(arr.length);
            $scope.labels = ["Facebook","Instagram","Twitter","Tumblr"];
            $scope.data = chartdata;
            console.log('dispaly '+$scope.labels);
            console.log('dispaly '+$scope.data)


            })



                .error(function (err) {
                console.log(err);
            })

    }

})();