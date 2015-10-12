/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('validPasswordConfirm', function() {

    return {
        require: 'ngModel',
        /*scope: {
            reference: '=validPasswordConfirm'
        },*/

        link: function(scope, elm, attrs, ngModelController) {

            ngModelController.$setValidity('noMatch', true);

            attrs.$observe('validPasswordConfirm', function (newVal) {
                if (newVal === 'true') {
                    ngModelController.$setValidity('noMatch', true);
                } else {
                    ngModelController.$setValidity('noMatch', false);
                }
            });

            /*ngModelController.$parsers.unshift(function(viewValue, $scope) {

                var noMatch = viewValue != scope.reference;
                ngModelController.$setValidity('noMatch', !noMatch);
            });

            scope.$watch("reference", function(value) {;
                ngModelController.$setValidity('noMatch', value === ngModelController.$viewValue);

            });*/
        }
    }
});