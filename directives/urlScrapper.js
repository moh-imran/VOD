/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('urlScrapper', function() {
    return {
       restrict: "A",
       require: "ngModel",
        link: function(scope, element, attr, ngModel) {
            element.on('"blur keyup change', function() {
               var words = element.text().split(' ');
               var length = words.length - 1;
               var lastword =  words[length];
               var firstcharacter = lastword.substring(0,1);
               
                if(lastword.indexOf('@') === -1)
                    {
                       element.parent().find(".ulist").css("display", "none");
                    }
               //console.log(scope.search);
               if (firstcharacter == "@"){
                   element.parent().find(".ulist").css("display", "block");
                  var tag = lastword.substring(1);
                    ngModel.$setViewValue(tag);
                    tag(ngModel.$viewValue || "");         
                    
            //element.parent().find(".tagsfrnd").html(tag);
//                var index = user.indexOf(tag);
//                username = user[index];
//                return tag;
                //alert(username);
               }
          });
        }
    };
});