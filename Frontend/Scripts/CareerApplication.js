$(function () {
    $("#dateavailable").datepicker({
        minDate: new Date()
    });
    $("#dlexpiration").datepicker();
    $("#applicationdate").datepicker({ dateFormat: "mm/dd/yy", minDate:0,maxDate:0 }).datepicker("setDate", new Date());
});

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var file = document.getElementById('resume');

file.onchange = function (e) {
    var ext = this.value.match(/\.([^\.]+)$/)[1];
    switch (ext) {
        case 'pdf':
        case 'doc':
        case 'docx':
            //alert('allowed');
            $('#errorListWrapper').hide();
            break;
        default:
            var formError = '';
            //alert('not allowed');
            formError += "<li>Only .pdf, .doc, and .docx files are allowed.</li>";
            if (formError) {
                $('#errorList').append(formError);
                $('#errorListWrapper').show();
                formError = '';
                $("html, body").animate({ scrollTop: 0 }, "slow");
                this.value = '';
                //return false;
            }
    }
}

$('input[name=ValidLicense]').change(function () {
    if ($('#validlicense2').is(':checked')) {
        $('.dlfield').show();
    } else {
        $('.dlfield').hide();
    }
});


$('#rootwizard').bootstrapWizard({
    onNext: function (tab, navigation, index) {
       
        if (index == 1) {
            var formError = '';
            var job = getUrlVars()["job"];
            $('#errorList').empty();

            if (!$('#lastname').val()) { formError += "<li>Please enter your last name</li>"; }
            if (!$('#firstname').val()) { formError += "<li>Please enter your first name</li>"; }
            if (!$('#address').val()) { formError += "<li>Please enter your address</li>"; }
            if (!$('#city').val()) { formError += "<li>Please enter your city</li>"; }
            if (!$('#state').val()) { formError += "<li>Please select a state</li>"; }
            if (!$('#zip').val()) { formError += "<li>Please enter your zip</li>"; }
            if (!$('#phone').val()) { formError += "<li>Please enter a valid phone number</li>"; } else { if (!$('#phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number</li>" } }
            if (!$('#email').val()) { formError += "<li>Please enter a valid email address</li>"; } else { if (!$('#email').val().match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/)) { formError += "<li>Please enter a valid email address</li>" } }
            if (!$('#dateavailable').val()) { formError += "<li>Please enter the date your can start on</li>"; }
            if (!$('#salary').val()) { formError += "<li>Please enter your desired salary</li>"; }
            if (job == null) {
                if (!$('#position').val()) { formError += "<li>Please select the position you are applying for</li>"; }
            }
            if (!$('input[name=Authorized]').is(':checked')) { formError += "<li>Please select if you are authorized to work in the U.S.</li>"; }
            if (!$('input[name=CompanyWork]').is(':checked')) { formError += "<li>Please select if you have previously worked for us before</li>"; }
            if (!$('input[name=ValidLicense]').is(':checked')) { formError += "<li>Please select if you have a valid license</li>"; }
            if ($('#validlicense2').is(':checked')) {
                if (!$('#dlnumber').val()) { formError += "<li>Please enter your driver's license number</li>"; }
                if (!$('#dlstate').val()) { formError += "<li>Please select the state your driver's license was issued</li>"; }
                if (!$('#dlexpiration').val()) { formError += "<li>Please enter your driver's license expiration date</li>"; }
            }
            if (formError) {
                $('#errorList').append(formError);
                $('#errorListWrapper').show();
                formError = '';
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            } else {
                $('#errorListWrapper').hide();
            }
        } else if (index == 4) {
            var formError = '';
            $('#errorList').empty();
            if ($('#ref1phone').val() != '') {
                if (!$('#ref1phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #1</li>" }
            }
            if ($('#ref2phone').val() != '') {
                if (!$('#ref2phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #2</li>" }
            }
            if ($('#ref3phone').val() != '') {
                if (!$('#ref3phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #3</li>" }
            }

            if (formError) {
                $('#errorList').append(formError);
                $('#errorListWrapper').show();
                formError = '';
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            } else {
                $('#errorListWrapper').hide();
            }
        } else if (index == 5) {
            var formError = '';
            $('#errorList').empty();
            if ($('#company1phone').val() != '') {
                if (!$('#company1phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #1</li>" }
            }
            if ($('#company2phone').val() != '') {
                if (!$('#company2phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #2</li>" }
            }
            if ($('#company3phone').val() != '') {
                if (!$('#company3phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #3</li>" }
            }

            if (formError) {
                $('#errorList').append(formError);
                $('#errorListWrapper').show();
                formError = '';
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            } else {
                $('#errorListWrapper').hide();
            }
        }
        $('#errorListWrapper').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    },
    onTabClick: function (tab, navigation, index) {
        
        var formError = '';
        $('#errorList').empty();

        if (!$('#lastname').val()) { formError += "<li>Please enter your last name</li>"; }
        if (!$('#firstname').val()) { formError += "<li>Please enter your first name</li>"; }
        if (!$('#address').val()) { formError += "<li>Please enter your address</li>"; }
        if (!$('#city').val()) { formError += "<li>Please enter your city</li>"; }
        if (!$('#state').val()) { formError += "<li>Please select a state</li>"; }
        if (!$('#zip').val()) { formError += "<li>Please enter your zip</li>"; }
        if (!$('#phone').val()) { formError += "<li>Please enter a valid phone number</li>"; } else { if (!$('#phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number</li>" } }
        if (!$('#email').val()) { formError += "<li>Please enter a valid email address</li>"; } else { if (!$('#email').val().match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/)) { formError += "<li>Please enter a valid email address</li>" } }
        if (!$('#dateavailable').val()) { formError += "<li>Please enter the date your can start on</li>"; }
        if (!$('#salary').val()) { formError += "<li>Please enter your desired salary</li>"; }
        if (!$('input[name=Authorized]').is(':checked')) { formError += "<li>Please select if you are authorized to work in the U.S.</li>"; }
        if (!$('input[name=CompanyWork]').is(':checked')) { formError += "<li>Please select if you have previously worked for us before</li>"; }
        if (!$('input[name=ValidLicense]').is(':checked')) { formError += "<li>Please select if you have a valid license</li>"; }
        if ($('#validlicense2').is(':checked')) {
            if (!$('#dlnumber').val()) { formError += "<li>Please enter your driver's license number</li>"; }
            if (!$('#dlstate').val()) { formError += "<li>Please select the state your driver's license was issued</li>"; }
            if (!$('#dlexpiration').val()) { formError += "<li>Please enter your driver's license expiration date</li>"; }
        }
        if (formError) {
            $('#errorList').append(formError);
            $('#errorListWrapper').show();
            formError = '';
            return false;
        }       
        $('#errorListWrapper').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    },
    onLast: function (tab, navigation, index) {
        
        var formError = '';
        $('#errorList').empty();

        if (!$('#lastname').val()) { formError += "<li>Please enter your last name</li>"; }
        if (!$('#firstname').val()) { formError += "<li>Please enter your first name</li>"; }
        if (!$('#address').val()) { formError += "<li>Please enter your address</li>"; }
        if (!$('#city').val()) { formError += "<li>Please enter you city</li>"; }
        if (!$('#state').val()) { formError += "<li>Please select a state</li>"; }
        if (!$('#zip').val()) { formError += "<li>Please enter your zip</li>"; }
        if (!$('#phone').val()) { formError += "<li>Please enter a valid phone number</li>"; } else { if (!$('#phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number</li>" } }
        if (!$('#email').val()) { formError += "<li>Please enter a valid email address</li>"; } else { if (!$('#email').val().match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/)) { formError += "<li>Please enter a valid email address</li>" } }
        if (!$('#dateavailable').val()) { formError += "<li>Please enter the date your can start on</li>"; }
        if (!$('#salary').val()) { formError += "<li>Please enter your desired salary</li>"; }
        if (!$('input[name=Authorized]').is(':checked')) { formError += "<li>Please select if you are authorized to work in the U.S.</li>"; }
        if (!$('input[name=CompanyWork]').is(':checked')) { formError += "<li>Please select if you have previously worked for us before</li>"; }
        if (!$('input[name=ValidLicense]').is(':checked')) { formError += "<li>Please select if you have a valid license</li>"; }
        if ($('#validlicense2').is(':checked')) {
            if (!$('#dlnumber').val()) { formError += "<li>Please enter your driver's license number</li>"; }
            if (!$('#dlstate').val()) { formError += "<li>Please select the state your driver's license was issued</li>"; }
            if (!$('#dlexpiration').val()) { formError += "<li>Please enter your driver's license expiration date</li>"; }
        }
        if (formError) {
            $('#errorList').append(formError);
            $('#errorListWrapper').show();
            formError = '';
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }
        //if ($('#tab1 .form-group.has-error')) {
        //    $("html, body").animate({ scrollTop: 0 }, "slow");
        //    return false;
        //}
        $('#errorListWrapper').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    },
    onTabShow: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;
        var $percent = ($current / $total) * 100;
        $('#rootwizard .progress-bar').css({ width: $percent + '%' });
    },
    onPrevious: function (tab, navigation, index) {
       
        if (index == 4) {
            var formError = '';
            $('#errorList').empty();
            if ($('#ref1phone').val() != '') {
                if (!$('#ref1phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #1</li>" }
            }
            if ($('#ref2phone').val() != '') {
                if (!$('#ref2phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #2</li>" }
            }
            if ($('#ref3phone').val() != '') {
                if (!$('#ref3phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #3</li>" }
            }

            if (formError) {
                $('#errorList').append(formError);
                $('#errorListWrapper').show();
                formError = '';
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            } else {
                $('#errorListWrapper').hide();
            }
        } else if (index == 5) {
            var formError = '';
            $('#errorList').empty();
            if ($('#company1phone').val() != '') {
                if (!$('#company1phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #1</li>" }
            }
            if ($('#company2phone').val() != '') {
                if (!$('#company2phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #2</li>" }
            }
            if ($('#company3phone').val() != '') {
                if (!$('#company3phone').val().match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) { formError += "<li>Please enter a valid phone number for Reference #3</li>" }
            }

            if (formError) {
                $('#errorList').append(formError);
                $('#errorListWrapper').show();
                formError = '';
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            } else {
                $('#errorListWrapper').hide();
            }
        }
        $('#errorListWrapper').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    },
    onFirst: function (tab, navigation, index) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
})

$('#careerApplicationForm').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        //form invalid
    } else {
        e.preventDefault();
        StartSubmitButtonSpinner();
        $('#errorListWrapper').hide();
        var referralValue = $('input[name=Referral]:checked').map(function () { return this.value; }).get().join(',');

        var formData = new FormData($('#careerApplicationForm')[0]);
        formData.set("Referral", referralValue);



        $.ajax({
            url: '/api/CareerApplication/',
            type: 'POST',
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                $('#careerApplicationForm').slideUp();
                $('#careerApplicationThankYou').show();
                $('#careerApplicationForm')[0].reset();

            },
            error: function (message) {
                if (message.responseText == "Invalid Captcha Response") {
                    StopSubmitButtonSpinner();

                    $("#captchaFormGroup").addClass("has-error");
                    var formError = '';
                    $('#errorList').empty();
                    formError += "<li>Please check the reCaptcha field</li>";
                    $('#errorList').append(formError);
                    $('#errorListWrapper').show();
                    formError = '';

                    return;
                }
                $('#errorListWrapper').hide();
                $('#careerApplicationForm').slideUp();
                $('#careerApplicationError').show();
                console.log('Error: ' + JSON.stringify(message));
                StopSubmitButtonSpinner();
            }
        });

        return false;
    }
})

var ladda_FormSubmit = $('#applicationSubmitButton').ladda();

function StartSubmitButtonSpinner() {
    ladda_FormSubmit.ladda('start');
}

function StopSubmitButtonSpinner() {
    ladda_FormSubmit.ladda('stop');
}