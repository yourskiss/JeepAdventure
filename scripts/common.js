/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */

 
// only number validation === start
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
// only number validation === end



// only Letter validation === start
function isLetter(e) 
{
    var regex = new RegExp("^[a-zA-Z ]+$");
    var strigChar = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(strigChar)) {
        return true;
    }
    return false
}
// only Letter validation === end

 // only AlphaNumeric  === start
function isAlphaNumeric(e) 
{
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var strigChar = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(strigChar)) {
        return true;
    }
    return false
}
// only AlphaNumeric  === end
    

/* form validation === start */
function formValidation()
{
    // debugger;
    $(".mf_error").hide().html('');
    if($("#fullname").val() == '')
    {
        $("#error_fullname").show().html('Please enter your name');
        return false;
    }
    else if($("#mobilenumber").val() == '')
    {
        $("#error_mobilenumber").show().html('Please enter your mobile number');
        return false;
    }
    else if ($("#mobilenumber").val().length !== 10) 
    {
        $("#error_mobilenumber").show().html('Please enter valid mobile number');
        return false;
    }
    else if (($("#mobilenumber").val().indexOf('9')) != 0 && ($("#mobilenumber").val().indexOf('8')) != 0 && ($("#mobilenumber").val().indexOf('7')) != 0 && ($("#mobilenumber").val().indexOf('6')) != 0) 
    {
        $("#error_mobilenumber").show().html('Mobile number start with digits like 9, 8, 7, 6');
        return false;
    }
    else if($("#uniqueid").val() == '')
    {
        $("#error_uniqueid").show().html('Please enter unique id');
        return false;
    }
    else if($("#location").val() == '')
    {
        $("#error_location").show().html('Please enter your location');
        return false;
    }
    else 
    {
        $("#registerscreen").slideUp(200);
        $("#OtpNumberScreen").slideDown(200);
        if($("#OtpNumber").val() == '')
        {
            $("#error_OtpNumber").show().html('Please enter OTP');
            return false;
        }
        else if ($("#OtpNumber").val().length !== 6) 
        {
            $("#error_OtpNumber").show().html('Please enter valid OTP');
            return false;
        }
        else 
        {
            $(".mf_error").hide().html('');
            return true;
        }
    }
}
/* form validation === end */


/* otpValidation === start */
function otpValidation()
{
    // debugger;
    $(".mf_error").hide().html('');
    if($("#phonenumber").val() == '')
    {
        $("#error_phonenumber").show().html('Please enter mobile number');
        return false;
    }
    else if($("#phonenumber").val().length != 10)
    {
        $("#error_phonenumber").show().html('Please enter valid mobile number');
        return false;
    }
    else if (($("#phonenumber").val().indexOf('9')) != 0 && ($("#phonenumber").val().indexOf('8')) != 0 && ($("#phonenumber").val().indexOf('7')) != 0 && ($("#phonenumber").val().indexOf('6')) != 0) 
    {
        $("#error_phonenumber").show().html('Mobile number start with digits like 9, 8, 7, 6');
        return false;
    }
    else 
    {
        $("#loginscreen").slideUp(200);
        $("#otpscreen").slideDown(200);
        if($("#OtpID").val() == '')
        {
            $("#error_OtpID").show().html('Please enter OTP');
            return false;
        }
        else if ($("#OtpID").val().length !== 6) 
        {
            $("#error_OtpID").show().html('Please enter valid OTP');
            return false;
        }
        else 
        {
            $(".mf_error").hide().html('');
            return true;
        }
    }
    
}
/* otpValidation === end */


/* uniqueIdValidation === start */
function uniqueIdValidation()
{
    // debugger;
    $(".mf_error").hide().html('');
    if($("#UniqueID").val() == '')
    {
        $("#error_UniqueID").show().html('Please enter Unique ID');
        return false;
    }
    else 
    {
        $(".mf_error").hide().html('');
        return true;
    }  
}
/* uniqueIdValidation === end */





/* weekly winner  === start */
$("#weeklywinnertab dd").click(function()
{
    var dataid = $(this).attr('data-id');
    $("#weeklywinnertab dd").removeClass("active");
    $(this).addClass("active");
    $(".weeklywinnerlist").slideUp(500);
    $(".weeklywinnerlist[data-id='"+dataid+"']").slideDown(500);
});
/* weekly winner === end */

/* click to answer button === start */
$("#quiczAnswerKey li").click(function()
{
    $("#quiczAnswerKey li").removeClass("active");
    $(this).addClass("active");
    $("#quizSubmitBtn").removeClass("disabled");
});
/* click to answer button === end */


/* time counter ===== start */
function timeCounter()
{
    var tmrCount = $('#tmrCount');
    $.each(tmrCount, function(key, val) 
    {
        var getDate = new Date();	//$(this).attr('data-id');
        getDate.setHours(getDate.getHours() + 6);
        setInterval(() => {
            var endTime = new Date(getDate);			
            endTime = (Date.parse(endTime) / 1000);
            var currentTime = new Date();
            currentTime = (Date.parse(currentTime) / 1000);
            var leftTime = endTime - currentTime;
            var days = Math.floor(leftTime / 86400); 
            var hours = Math.floor((leftTime - (days * 86400)) / 3600);
            var minutes = Math.floor((leftTime - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((leftTime - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $(val).find('#tmrDays').html(days);
            if(days>0){ $(val).find('#tmrHours').html(parseInt(hours)+parseInt(parseInt(days)*parseInt(24))); }
            else{ $(val).find('#tmrHours').html(hours); }
            $(val).find('#tmrMinutes').html(minutes);
            $(val).find('#tmrSeconds').html(seconds);	
        }, 1000); 
    });
}
timeCounter();
/* time counter ===== end  */



/* winner slider ===== start  */
$(function($) 
{
    if($(".winnerSlider").length > 0)
    {
        $('.winnerSlider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            dots: false,
            arrows: false,
            vertical: true,
            infinite: true,
            adaptiveHeight: false,
            centerMode: true,
            centerPadding: '0',
            initialSlide:0,
            buttons: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            accessibility: false,
            draggable: false,
            swipe: false,
            touchMove: false
        });

        var random_number = Math.floor((Math.random() * 10) + 1);
        var rand_num = random_number + "000";
        var rn =  parseInt(rand_num);
        console.log(random_number, rand_num, rn);
        setInterval(() => {
            $('.winnerSlider').slick('slickSetOption', {
                'autoplay': false
            }, false);
        }, rn); 

    }
});


/* winner slider ===== end  */