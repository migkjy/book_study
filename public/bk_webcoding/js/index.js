$(document).ready(function(){
    var signUpBtn = $("#signUpBtn");
    var goToLoginBtn = $("#goToLoginBtn");
    var signUp = $("#signUp");
    var loginForm = $("#loginForm");
    var introSite = $("#introSite");

    signUpBtn.click(function(){
        loginForm.slideDown();
        signUp.slideDown();
        introSite.slideUp();
    });

    goToLoginBtn.click(function(){
        loginForm.slideDown();
        signUp.slideUp();
        introSite.slideDown();
    });

    // gender controll
    var genderWoman = $("#gMW");
    var genderMan = $("#gMM");

    genderWoman.click(function(){
        genderBgInit();
        $(this).css("background", "#64cbf9") 
        $(this).css("color", "#fff")
    });

    genderMan.click(function(){
        genderBgInit();
        $(this).css("background", "#64cbf9") 
        $(this).css("color", "#fff")
    });

    function genderBgInit(){
        genderMan.css('background', '#fff');
        genderMan.css('color', '#000');
        genderWoman.css('background', '#fff');
        genderWoman.css('color', '#000');
    }

    // firstpage controll
    toGoToShort = false;
    $(window).resize(function(){
        if(window.innerWidth >= 1200){
            loginForm.slideDown();
            signUp.slideDown();
            introSite.slideDown();
        }else{
            if(toGoToShort == true){
                signUp.slideUp();
            }
        }
    })
});