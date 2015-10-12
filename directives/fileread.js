/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('fileread', function() {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                    
                });
            });
        }
    }
});