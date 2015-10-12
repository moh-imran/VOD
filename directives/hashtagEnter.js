

angular.module('th.Profiling').directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
        scope.$watch('sel', function () {
            scope.aho=function(keyEvent){
                alert(keyEvent.which);
                if(keyEvent.which){
                    alert("saleem elahi");

                }}
        });
        iElement.autocomplete({
            source: scope[iAttrs.uiItems],
            select: function() {


                $timeout(function() {
                    iElement.trigger('input');
                }, 0);
            }
        });
    };
});