/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('passValidator', function() {


    PASS_REGEXP = /\d/;

    return {

       require: "ngModel",
        link: function(scope, element, attr, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {

                if (viewValue.length >= 6 && PASS_REGEXP.test(viewValue)) {
                    // it is valid
                    ctrl.$setValidity('password', true);
                } else {
                    // it is invalid
                    ctrl.$setValidity('password', false);
                }
                // update model anyway to sync password fields
                return viewValue;
            });

            ctrl.$formatters.unshift(function(viewValue) {
                if (viewValue.length >= 6 && PASS_REGEXP.test(viewValue)) {
                    // it is valid
                    ctrl.$setValidity('password', true);
                } else {
                    // it is invalid
                    ctrl.$setValidity('password', false);
                }
                // update model anyway to sync password fields
                return viewValue;
            });
        }
    };
});