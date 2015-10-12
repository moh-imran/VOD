/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('secrhInput', function() {
    return {
        restrict: "A",
       require: "ngModel",
        link: function(scope, element, attr, ngModel) {
            element.on('"blur keydown change', function(event) {
               var words = element.text().split("");
               var length = words.length - 1;
               var lastword =  words[length];
               var firstcharacter = lastword.substring(0,1);
               var activelist = element.parent().find("ul.select");
               var active = element.parent().find("ul").hasClass("select");
//                if(lastword.indexOf('@') === -1)
//                    {
//                       element.parent().find(".ulist").css("display", "none");
//                        element.parent().find(".ulist ul ").removeClass("select");
//                    }
//                if(event.which === 40) {
//                    alert();
//                    if (firstcharacter === "@"){
//                        
//                        if (active){
//                             var activelist = element.parent().find("ul.select");
//                              activelist.next().addClass("select");
//                              activelist.removeClass("select");
//                        }
//                        else {
//                           element.parent().find("ul:first-child").addClass("select");
//                        }
//                    }   
//                }
//                if(event.which === 38) {
//                    if (firstcharacter === "@"){
//                        event.preventDefault();
//                        var active = element.parent().find("ul").hasClass("select");
//                        if (active){
//                             
//                              activelist.prev().addClass("select");
//                              activelist.removeClass("select");
//                        }
//                        else {
//                           element.parent().find("ul:last-child").addClass("select");
//                        }
//                    }   
//                }
//                if(event.which === 13) {
//                    if (firstcharacter === "@"){
//                        event.preventDefault();
//                         //var newtext = element.text().replace(/\w+[.!?]?$/, '');
//                         var name = activelist.find(".name").text();
//                         var emptyspan = document.createElement("span");
//                         var btn = document.createElement("span");
//                         btn.className = "user";
//                         var t = document.createTextNode(name);
//                         btn.appendChild(t); 
//                         var newtext = element.html().replace(lastword, "");
//                         
//                         //var strLength = element.val().length * 2;
//                         //console.log (strLength);
//                         element.empty().append(newtext);
//                         element.append(btn);
//                         element.append("&#8203; ");
//                         
//      
//                         var e = jQuery.Event("keypress");
//                        e.which = 35; // # Some key code value
//                        $(document.body).trigger(e);
//                         //element.focus();
//                         //element[0].setSelectionRange(strLength, strLength);
//                       
//                        //element.append("bravo");
//                       // console.log(lastword);
//                        element.parent().find(".ulist").css("display", "none");
//                        //element.parent().find(".ulist  ul").removeClass("select");
//                              //var activelist = element.parent().find("ul.select");
//                              //activelist.prev().addClass("select");
//                              //activelist.removeClass("select");
//                        
//                        
//                    }   
//                }
               //console.log(scope.search);
               if (firstcharacter === "@"){
                   element.parent().find(".ulist").css("display", "block");
                    
                    
                  var tag = lastword.substring(1);
                 // console.log(tag);
                    ngModel.$setViewValue(tag);
                    tag(ngModel.$viewValue);   
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