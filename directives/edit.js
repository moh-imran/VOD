/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('editInput', function() {
    return {
        link: function(scope, element, attr) {
           element.on('click', function() {
            var input = element.parent().find("input[type='text'],  select");
            $(".editabe_inputs input[type='text'], .editabe_inputs select").attr('disabled','true');
              input.removeAttr("disabled");
              $(".editabe_inputs .edit").css('display','inline-block');
              element.hide();
              $(".editabe_inputs").find(".close, .tick").hide();
              element.parent().find(".close, .tick").css('display','inline-block');
               input.click(function(event){
                   event.stopPropagation();
               });
               var tick = element.parent().find(".tick, .close");
                  tick.click(function(){
                  tick.hide();
                  element.show();
                  input.attr('disabled','true');
              });
          });
        }
    };
});