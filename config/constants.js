/**
 * Created by Shakeel Latif on 6/4/2015.
 */

angular.module('th.constants').constant('API_RESOURCES', (function () {

    var ApiEndPath = "";
    var HomePage = "";


    ApiEndPath = "http://staging.talentedhuman.com/talented-human-api/index.php/";
    //ApiEndPath = "http://192.168.2.100/humant/";
    if ( window.location.hostname === "localhost" )
    {


        //ApiEndPath = "http://staging.talentedhuman.com/talented-human-api/index.php/";

        ApiEndPath = "http://192.168.0.108/talented-human-api/";

        HomePage = 'http://localhost/Best@/front-end/#/';
    }

    var RESOURCE_BASE_URL = "http://staging.talentedhuman.com/talented-human-api/posts/";

    return {
        REGISTER: ApiEndPath + 'register',
        LOGIN: ApiEndPath + 'login',
        FBLOGIN: ApiEndPath + 'fblogin',
        GOOGLOGIN: ApiEndPath + 'googlelogin',
        DELETEACCOUNT: ApiEndPath + 'deleteaccount',
        SAVEFEED: ApiEndPath + 'save_feed',
        CHANGEPASSWORD: ApiEndPath + 'changepassword',
        UPDATEPROFILE: ApiEndPath + 'update_profile',
        VERIFYEMAIL: ApiEndPath + 'verifyregistertoken',
        FORGOTPASSWORD: ApiEndPath + 'forgetpassemail',
        RESETPASSWORD: ApiEndPath + 'changeforgetpassword',
        RESETPASS: ApiEndPath + 'resetpassword',
        LOGOUT: ApiEndPath + 'logout',


        ADDPOST: ApiEndPath + 'add_post',
        FETCHPOSTS: ApiEndPath + 'fetchposts',
        ADDFOLLOWER: ApiEndPath + 'addfollwer',
        REMOVEFOLLOWER: ApiEndPath + 'removefollwers',
        ADDCOMMENTS: ApiEndPath + 'addcomments',
        ADDLIKES: ApiEndPath + 'addlikes',
        FETCHPHOTOS: ApiEndPath + 'fetchspecficposts',
        USERPROFILE: ApiEndPath + 'user_profile',
        SETPRIVACY: ApiEndPath + 'set_privacy',
        UPDATEPRIVACY: ApiEndPath + 'update_privacy_info',

        MYFOLLOWERS: ApiEndPath + 'get_followers',
        MYFOLLOWINGS: ApiEndPath + 'get_following',
        ALLHUMANS: ApiEndPath + 'get_humans',
        GETUSERPOSTS: ApiEndPath + 'user_specfic_posts',
        SCRAPPINGSERVICE:ApiEndPath + 'scrap_page',
        HASHTAGSEARCH:ApiEndPath + 'hashtag_search',
        SENDEMAILINVITER:ApiEndPath + 'send_inviter_email',


        //Paths for assets access...
        IMAGE_RESOURCE: RESOURCE_BASE_URL + 'images/',
        VIDEO_RESOURCE: RESOURCE_BASE_URL + 'videos/',
        AUDIO_RESOURCE: RESOURCE_BASE_URL + 'music/'
    };

})());