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
            function add() {
          
                  if(element.text() == ''){
                    element.text(element.attr('placeholder')).addClass('placeholder');
                    
                  }
                }

    function remove() {
       
      if(element.text() == element.attr('placeholder')){
          
        element.text('').removeClass('placeholders');
      }
    }
    element.blur(add).focus(remove).each(add);
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
            element.on('"blur  change  keyup', function(event) {

                scope.getPostText = element.html();

                // hashtag
               var hashwords = element.text().split(" ");
               var hashwordslength = hashwords.length - 1;
               var lastword =  hashwords[hashwordslength];
               var lstcotain = lastword.split("#");
               var lstcotainword = lstcotain[1];
               console.log('asty',lstcotainword);
               var firstcharacter = lastword.trim().substring(0,1);
               var activelist = element.parent().find("ul.select");
               var active = element.parent().find("ul").hasClass("select");
               if (event.keyCode == 32) {
                  
                         if (firstcharacter === "#"){
                             
                                //element.parent().find(".ulist").css("display", "block");
                                var btns ="<span class='tagy' contenteditable='false' >&nbsp;"+lastword+"</span><br class='br'>"+ " " ;
                               
                                var newtexts = element.html();
                                var lstiword = lastword.trim();
                                
                                 var asdf =       newtexts.replace(lstiword, btns);
                              
                                
                                element.empty().append(asdf);
                                 placeCaretAtEnd(element[0]);

                            }
                        else if (lstcotainword !== null){
                             var btns ="<span class='tagy' contenteditable='false' >&nbsp; #"+lstcotainword+"</span><br class='br'>"+ " " ;
                               
                                var newtexts = element.html();
                                var lstiword ="#"+lstcotainword.trim();
                                
                                 var asdf =       newtexts.replace(lstiword, btns);
                              
                                
                                element.empty().append(asdf);
                                 placeCaretAtEnd(element[0]);
                        }
                     }
                

                if(event.which === 40){
                    
                }
                else if( event.which === 38){
                    
                }
                else {
                    setTimeout(function(){ 
                            element.parent().find("ul").removeClass("select");
                            element.parent().find("ul:first-child").addClass("select");
                         
                    },80);
                }
                scope.$apply(function() {
                  scope.caret  = getPos(element[0]);

                });
                var lastiword = "@" + scope.text;
                scope.lastiword  = lastiword ;
                var activelist = element.parent().find("ul.select");
                scope.activelist = activelist;
                var active = element.parent().find("ul").hasClass("select");
                scope.active = active;
                var activelisting =  element.parent().find(".ulist").hasClass("on");
                scope.activelisting =  activelisting;
                if(event.which === 13) {
                    if (activelisting){
                         var name = scope.activelist.find(".name").text();
                         var btn ="<span class='user' contenteditable='false' >&nbsp;"+name+"</span><br class='br'>"+ "&nbsp; " ;
                        var newtext = element.html().replace(scope.lastiword, btn);
                         var newVal = scope.caret - 5;
                         element.parent().find(".taglisting").removeClass("on");
                         element.empty().append(newtext);
                         placeCaretAtEnd(element[0]);
                    }   
                }   
                 function ReturnWord(text, caretPos) {
                    var index = text.indexOf(caretPos);
                    var preText = text.substring(0, caretPos);
                    var words = element.text().split(" ");
                    //var lengthy = words.length - 1;
                    var lastwordy =  words[0];
                    scope.lastwordy = lastwordy;
                    var fcha = lastwordy.substring(0,1);
                    scope.fcha = fcha;
                    var fchare = lastwordy.substring(1);
                    //console.log(lastwordy);
                    
                    if (preText.indexOf(" ") > 0 || preText.indexOf("@") > 0) {
                        var words = preText.split("@");
                        var tag = words[words.length - 1];
                        ngModel.$setViewValue(tag);
                        tag(ngModel.$viewValue || "");
                        //console.log(words[words.length - 1]);  //return last word
                    }
                    else if (preText.indexOf("#") > 0){
                        scope.hashwords = preText.split("#");
                        console.log(scope.hashwords);
                        scope.lasthashword = [scope.hashwords.length - 1];
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
                else if (scope.fcha !== "@"){
                    element.parent().find(".ulist").removeClass("on");
                }
               
                var text = element;
                var caretPoss = scope.caret;
                 var word = ReturnWord(element.text(), caretPoss);
                if (word != null) {
                    var lastword = word;
                    
                }
                
          });
          element.on('"blur  change keydown', function(event) {
             
              var activelist = element.parent().find("ul.select");
                 if(event.which === 40) {
                   
                    if (scope.activelisting){
                        
                         event.preventDefault();
                          
                        if (scope.active){
                             var activelist = element.parent().find("ul.select");
                              activelist.next().addClass("select");
                              activelist.removeClass("select");
                        }
                        else {
                            
                           element.parent().find("ul:first-child").addClass("select");
                        }
                    }
                }
                if(event.which === 38) {
                    if (scope.activelisting){
                        event.preventDefault();
                        var active = element.parent().find("ul").hasClass("select");
                        if (scope.active){
                              activelist.prev().addClass("select");
                              activelist.removeClass("select");
                        }
                        else {
                           element.parent().find("ul:last-child").addClass("select");
                        }
                    }   
                }
                if(event.which === 13) {
                    if (scope.activelisting){
                        event.preventDefault();
                         
                    }   
                }
           });
          
        }
    };
});
angular.module('th.Profiling').directive('actualInput', function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attr, ngModel) {
            
            element.parent().find(".tagging").on('"keyup', function(event) {
                alert();
            var html = element.parent().find(".tagging").html();
            console.log(html);
            ngModel.$setViewValue(html);
            html(ngModel.$viewValue);
            });
        }
    }
});

/**
 * Created by obaidullah on 6/9/2015.
 */




