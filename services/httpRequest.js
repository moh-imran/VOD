
//http request service...


angular.module('th.Server').service('ServerRequest', [ "$http", function ( $http) {

    this.sendPostData = function (url, data) {
        return $http({
            method: 'POST',
            url: url,

            dataType: "json",
            data: data
            //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            //transformRequest: function(obj) {
            //    var str = [];
            //    for ( var p in obj )
            //        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            //    return str.join("&");
            //}

        }).success(function (data) {
            console.log("From common http Service.", data);
            RH.ResponseFilter(data);
        });
    }
    this.sendPostArray = function (url, data) {
        console.log("into", data);
        return $http({
            method: 'POST',
            url: url,

            //dataType: "json",
            data: data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }

        }).success(function (data) {
            console.log("From common http Service.", data);
            RH.ResponseFilter(data);

            //return data;
        });
    }

}]);