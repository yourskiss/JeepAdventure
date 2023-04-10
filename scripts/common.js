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
        $(".mf_error").hide().html('');
        return true;
    }
}
/* form validation === end */


/* otpValidation === start */
function otpValidation()
{
    // debugger;
    $(".mf_error").hide().html('');
    if($("#OtpID").val() == '')
    {
        $("#error_OtpID").show().html('Please enter OTP');
        return false;
    }
    else if ($("#OtpID").val().length !== 4) 
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
/* otpValidation === end */




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