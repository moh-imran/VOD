/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('secrhInput', function() {
    function getPos(element) {
        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ( (sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
    }
    
   
    return {
        restrict: "A",
       require: "ngModel",
        link: function(scope, element, attr, ngModel) {
            function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

            element.on('"blur  change keydown', function(event) {
                scope.$apply(function() {
                  scope.caret  = getPos(element[0]);

                });
                var lastiword = "@" + scope.text;
                
                
               
                var activelist = element.parent().find("ul.select");
                var active = element.parent().find("ul").hasClass("select");
                var activelisting =  element.parent().find(".ulist").hasClass("on");
                if(event.which === 40) {
                   
                    if (activelisting){
                         event.preventDefault();
                          
                        if (active){
                             var activelist = element.parent().find("ul.select");
                              activelist.next().addClass("select");
                              activelist.removeClass("select");
                        }
                        else {
                             event.preventDefault();
                           element.parent().find("ul:first-child").addClass("select");
                        }
                    }
                }
                if(event.which === 38) {
                    if (activelisting){
                        event.preventDefault();
                        var active = element.parent().find("ul").hasClass("select");
                        if (active){
                              activelist.prev().addClass("select");
                              activelist.removeClass("select");
                        }
                        else {
                           element.parent().find("ul:last-child").addClass("select");
                        }
                    }   
                }
                if(event.which === 13) {
                    if (activelisting){
                        
                        event.preventDefault();
                        
                         //var newtext = element.text().replace(/\w+[.!?]?$/, '');
                         var name = activelist.find(".name").text();
                         //var emptyspan = document.createElement("span");
                         var btn ="<span class='user' contenteditable='false' >&nbsp;"+name+"</span><br class='br'>"+ "&nbsp; " ;
                         
//                         btn.className = "user";
//                         var t = document.createTextNode(name);
//                         btn.appendChild(t); 
                         //console.log('after', element.html().substring(caretPoss));
                          
//                          var before = element.html().substr(0,caretPoss);
//                          var after = element.html().substr(caretPoss);
//                          //var replacement = ""
//                        // var newbefore = before.replace(/_([^lastword]*)$/,replacement+'$1'); 
//                         var lastindex = before.lastIndexOf(lastword);
//                         var newbefore = before.replace(lastword, "");
//                         console.log('before',  scope.before);
                        
                        var newtext = element.html().replace(lastiword, btn);
                         var newVal = scope.caret - 5;
                         
                         //var strLength = element.val().length * 2;
                         //console.log (strLength);
                         element.parent().find(".taglisting").removeClass("on");
                         element.empty().append(newtext);
                         placeCaretAtEnd(element[0]);
                         //element.append(btn);
                         //element.append("&#8203; ");
                         
      
                        // var e = jQuery.Event("keypress");
                        //e.which = 35; // # Some key code value
                        //$(document.body).trigger(e);
                         //element.focus();
                         //element[0].setSelectionRange(strLength, strLength);
                       
                        //element.append("bravo");
                       // console.log(lastword);
                        //element.parent().find(".ulist").css("display", "none");
                        //element.parent().find(".ulist  ul").removeClass("select");
                              //var activelist = element.parent().find("ul.select");
                              //activelist.prev().addClass("select");
                              //activelist.removeClass("select");
                        
                        
                    }   
                }
                 function ReturnWord(text, caretPos) {
                    var index = text.indexOf(caretPos);
                    var preText = text.substring(0, caretPos);
                    var words = element.text().split(" ");
                    //var lengthy = words.length - 1;
                    var lastwordy =  words[0];
                    var fcha = lastwordy.substring(0,1);
                    var fchare = lastwordy.substring(1);
                    
                    if (preText.indexOf(" ") > 0 || preText.indexOf("@") > 0) {
                        
                        var words = preText.split("@");
                       
                         var tag = words[words.length - 1]
                       ngModel.$setViewValue(tag);
                       tag(ngModel.$viewValue || "");
                       
                        console.log(words[words.length - 1]);  //return last word
                    }
                    else if (fcha === "@") {
                        element.parent().find(".ulist").addClass("on");
                        var tag = fchare;
                         scope.$apply(function() {
                            scope.fchar =  fcha;

                          });
                        
                        ngModel.$setViewValue(tag);
                        tag(ngModel.$viewValue || "");
                        
                    }
                    else {
                        return preText;
                    }
                }
                if(element.html().indexOf(lastiword) > 0){
                    element.parent().find(".ulist").addClass("on");
                }
               
                var text = element;
                var caretPoss = scope.caret;
                 var word = ReturnWord(element.text(), caretPoss);
                if (word != null) {
                    var lastword = word;
                    
                }
                
               //var firstcharacter = lastword.substring(0,1);
               
                
                
                
                
            
//               if (firstcharacter == "@"){
//            //element.parent().find(".tagsfrnd").html(tag);
////                var index = user.indexOf(tag);
////                username = user[index];
////                return tag;
//                //alert(username);
//               }
                
              
              
          });
        }
    };
});


/**
 * Created by obaidullah on 6/9/2015.
 */
