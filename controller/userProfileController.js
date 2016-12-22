(function () {
    angular.module('UserInfo')
        .controller('userProfileController', userProfileControllerFn);
    userProfileControllerFn.$inject = ['$http'];
    function userProfileControllerFn($http) {
        var chart = this;
        $http({
            method: 'GET',
            url: "https://nuvi-challenge.herokuapp.com/activities"
        })
            .success(function (data) {
                var cjson = JSON.stringify(data);
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
                var chartJson = chartdata;
                console.log(arr.length);
                var labels = ["Facebook", "Instagram", "Twitter", "Tumblr"];
                chart.labels = labels;
                chart.data = cjson;
                console.dir(chartJson);


                var barChartData = {
                    labels: labels,
                    datasets: [
                        {
                            fillColor: "rgba(220,220,220,0.5)",
                            strokeColor: "rgba(220,220,220,1)",
                            scaleOverride: true,
                            scaleSteps: 100,
                            stepValue: 1,
                            barShowStroke: false,
                            data: cjson
                        },
                        {
                            fillColor: "rgba(151,187,205,0.5)",
                            strokeColor: "rgba(151,187,205,1)",
                            scaleOverride: true,
                            scaleSteps: 100,
                            barShowStroke: false,
                            stepValue: 1,
                            data: cjson
                        }
                    ]

                }

            }).error(function (err) {
            console.log(err);
        })


    }
})();