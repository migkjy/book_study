$(document).ready(function(){
    var loginSubmit = $("#loginSubmit");
    var loginEmail  = $("#loginEmail");
    var loginPw     = $("#loginPw");
    var regEmailPattern = /^[a-zA-Z_\-0-9]+@[a-z]+.[a-z]+$/;    
    
    loginSubmit.click(function(){
        var regEmailPattern = /^[a-zA-Z_\-0-9]+@[a-z]+.[a-z]+$/;
        if(!regEmailPattern.test(loginEmail.val())){
            alert('check your E-mail');
            return false;
        }
        if(loginPw.val().length < 8){
            alert('check your Password');
            return false;
        }
    });

    // Sign Up filtering
    var signUpSubmit = $("#signUpSubmit");
    var userName     = $("#userName");
    var userEmail    = $("#userEmail");
    var userPw       = $("#userPw");
    var birthYear    = $("#birthYear");
    var birthMonth   = $("#birthMonth");
    var birthDay     = $("#birthDay");
    var valueError   = $("#valueError");

    signUpSubmit.click(function(){
        if(userName.val() == ""){
            valueError.text("fillup your name please");
            userName.focus();
            timeOutCall();
            return false;
        }

        var regNamePattern = /^[가-힣a-zA-Z]+$/
        if(regNamePattern.test(userName.val())){
            // console.log('userName is fine');
        }else{
            valueError.text("use correct name please");
            userName.focus();
            timeOutCall();
            return false;
        }

        // var regEmailPattern = /^[a-zA-Z_\-0-9]+@[a-z]+.[a-z]+$/;        
        if(regEmailPattern.test(userEmail.val())){
            // console.log("userEmail is fine");
        }else{
            valueError.text("use correct Email please");
            userEmail.focus();
            timeOutCall();
            return false;
        }

        if(userPw.val().length >= 8){
            // console.log("userPw is fine");
        }else{
            valueError.text("use correct Password please");
            userPw.focus();
            timeOutCall();
            return false;
        }

        if(isNaN(birthYear.val())){
            valueError.text("BirthYear please");
            birthYear.focus();
            timeOutCall();
            return false;
        }

        if(isNaN(birthMonth.val())){
            valueError.text("BirthMonth please");
            birthMonth.focus();
            timeOutCall();
            return false;
        }

        if(isNaN(birthDay.val())){
            valueError.text("BirthDay please");
            birthDay.focus();
            timeOutCall();
            return false;
        }

        if($(":input:radio[name=gender]:checked").val() == 'm' || ($(":input:radio[name=gender]:checked").val() == 'w')){
            // 
        }else{
            valueError.text("gender check please");
            timeOutCall();
            return false;            
        }

        return true;
    });


    function timeOutCall(){
        setTimeout(function(){
            $("#valueError").text("");
        },2000);
    }
});