
//http request service...


angular.module('th.Server').service('UrlConverter', [ "$sce", function ( $sce) {

    ///video Url Conversions
    this.changeVideoUrl = function (sourcepath) {

        var config='';
        return config = {
            preload: "none",
            sources: [
                {src: $sce.trustAsResourceUrl(sourcepath), type: "video/mp4"}

            ],
            tracks: [
                {
                    src: "pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
                }
            ],
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            }
        };

    };

}]);