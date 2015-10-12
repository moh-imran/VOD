/**
 * Created by obaidullah on 6/9/2015.
 */

angular.module('th.Profiling').directive('postComment', [ 'API_RESOURCES', 'ServerRequest', '$http', '$location', '$cookies',   function( AR, SR,$http,location, $cookies) {


    return {
       restrict: "A",
       //require: "ngModel",
        link: function(scope, element, attr) {

            element.on( 'keydown' , function (e){

                if(e.which == 13){
                    var userinfo = $cookies.getObject('userObjCookie');
                    var addCommentData = {
                        sessiontoken: userinfo.sessiontoken,
                        user_id: userinfo._id.$id,
                        post_id: '',
                        text: ''
                    };

                    addCommentData.post_id = attr.data;
                    addCommentData.text = element.val();

                    console.log("comment object", addCommentData);
                    SR.sendPostData(AR.ADDCOMMENTS, addCommentData)
                        .success(function (data, status, headers, config) {
                            if (data.status == 'success') {

                                var com = '<div class="comment clearfix">';
                                com += '<div class="coment_by">';
                                com += '<div class="img">';
                                com += '<img src="' + userinfo.profile_pic + '">'; //user current profile image will come here...
                                com += '</div>';
                                com += '<div class="name">';
                                com += '<span>' + userinfo.f_name + '</span>';
                                com += '<span class="like pretty_date">' + 'date from response' + '</span>';
                                com += '</div>';
                                com += '<div class="clear"></div>';
                                com += '</div>';
                                com += '<div class="comment_text">' + addCommentData.text + '</div>';
                                com += '</div>';

                                element.val('');
                                element.attr('placeholder', 'Write a comment');
                                element.parents('.home_post').find('.comment').append(com);
                                console.log("self content",element.parents('.home_post'));

                            }
                            else {


                            }

                        });

                }


            });



        }
    };
}]);