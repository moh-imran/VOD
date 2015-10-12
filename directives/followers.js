/**
 * Created by Shakeel Latif on 6/29/2015.
 */

angular.module('th.Profiling').directive('addRemoveFollowers', ['API_RESOURCES','$rootScope', 'ServerRequest', 'commonUserFunctionsSr', '$cookies', function (AR,$rootScope, SR, CUF, $cookies) {

    var userinfo = $cookies.getObject('userObjCookie');

    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.on('click', function (e) {
                console.log("from Directive s=click function");
                e.preventDefault();
                //console.log("class is : " + element.attr('class'));
                //console.log("checking class : " + element.attr('class').indexOf('follow-icon'));
                $('ng-show').empty();

                if (element.attr('class').indexOf('follow-icon') >= 0) {
                    console.log("Following ID is  : ", element.data('followingid'));
                    element.data('followingid').is_followed = 0;
                    console.log("ng-show value is  : ", element.data('ng-show'));
                    follow();

                }

                else if (element.attr('class').indexOf('already-followed-icon') >= 0) {
                    console.log("Following ID is  : ", element.data('followingid'));
                    console.log("ng-show value is  : ", element.data('ng-show'));

                    unfollow();
                }
                else {
                    console.log("ERROR : required DOM class not found");
                }
            });
            ///Follow a Human
            function follow() {

                console.log("from Directive from follow function");
                /// change UI as user pressed button
                element.removeClass('follow-icon');
                element.addClass('already-followed-icon');
                $rootScope.$broadcast('updatingFollowingsCount',true);  /// true to count++ and false to count--
                console.log("just called broadcast for updating Followings count.");
                CUF.AddFollowertoUser(userinfo.sessiontoken, userinfo.user_id, element.data('followingid'),
                        function (responseObj) {
                            console.log("session toeken  : " + userinfo.sessiontoken + "user_id : " + userinfo.user_id + "following id :" + element.data('followingid'));
                            if (!responseObj.status == "success") { /// If there is some kind of error, revert back the toggle button status
                                element.removeClass('already-followed-icon');
                                element.addClass('follow-icon');
                                $rootScope.$broadcast('updatingFollowingsCount',false);
                            }
                        });
            }


            /// UnFollow
            function unfollow() {
                $rootScope.$broadcast('updatingFollowingsCount',false);
                console.log("from Directive from unfollow function");
                /// change UI as user pressed button
                element.removeClass('already-followed-icon');
                element.addClass('follow-icon');

                CUF.RemoveFollowerFromUser(userinfo.sessiontoken, userinfo.user_id, element.data('followingid'),
                                       function (responseObj) {
                                           if (!responseObj.status == "success") {
                                               element.addClass('already-followed-icon');
                                               element.removeClass('follow-icon');
                                               $rootScope.$broadcast('updatingFollowingsCount',true);
                                           }
                                       });
            }
        }
    }
}]);