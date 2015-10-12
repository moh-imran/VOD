
/**
* Created by Shakeel Latif on 6/4/2015.
*/

angular.module('th.Profiling').controller('home', ['$scope', 'API_RESOURCES', 'ServerRequest', '$http','$cookies','UrlConverter',   function($scope, AR, SR,$http,$cookies,UC){

    $scope.allVideosData = {};
    $('.bxslider').bxSlider();
    $.get('https://demo2697834.mockable.io/movies')
        .success(function(data,status,headers,config){
            var i = 0;
            angular.forEach(data.entries, function (dataSource) {

                    //console.log("datasource", dataSource.contents[0].url);
                    var sourceObj = UC.changeVideoUrl(dataSource.contents[0].url);
                    //console.log("converted url",sourceObj);
                    data.entries[i].contents[0].url = sourceObj;

                i++;
            });

            $scope.allVideosData = data.entries;
            console.log("data",$scope.allVideosData);
        })

    .error(function () {

    });


    $('.outerdiv').click(function(){


    });

//$scope.onClickOverlayPlay = function () {
//
//    console.log("Current Time",$scope.currentTime);
//    console.log("video played",$scope.timeLeft);
//
//};
    //$scope.config = {
    //    preload: "none",
    //    sources: [
    //        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"}
    //    ],
    //    tracks: [
    //        {
    //            src: "pale-blue-dot.vtt",
    //            kind: "subtitles",
    //            srclang: "en",
    //            label: "English",
    //            default: ""
    //        }
    //    ],
    //    theme: {
    //        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
    //    }
    //};


}]);