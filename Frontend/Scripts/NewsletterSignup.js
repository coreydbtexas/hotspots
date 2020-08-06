

$('#newsletterForm').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        //form invalid
    } else {
        e.preventDefault();

        StartSubmitButtonSpinner();

        var requestFormData = {
            Email: $("#email").val(),
            OptIn: $("#optin").prop("checked"),
            CaptchaResponse: $("#g-recaptcha-response").val()
        }

        $.ajax({
            url: '/api/Newsletter/',
            type: 'POST',
            data: JSON.stringify(requestFormData),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                $('#newsletterForm').slideUp();
                $("#newsletterSuccess").show();
            },
            error: function (message) {
                if (message.responseText == "Invalid Captcha Response") {
                    StopSubmitButtonSpinner();

                    $("#captchaFormGroup").addClass("has-error");
                    var formError = '';
                    $('#errorList').empty();
                    formError += "<li>Please check the reCAPTCHA checkbox</li>";
                    $('#errorList').append(formError);
                    $('#errorListWrapper').show();
                    formError = '';

                    return;
                }
                $('#errorListWrapper').hide();
                $('#newsletterForm').slideUp();
                $("#newsletterError").show();
                console.log('Error: ' + JSON.stringify(message));
            }
        });

        return false;
    }
})

// Create a new instance of ladda for the specified button
var ladda_ContactFormSubmit = $('#newsletterFormSubmitButton').ladda();

function StartSubmitButtonSpinner() {
    // Start loading
    ladda_ContactFormSubmit.ladda('start');
}

function StopSubmitButtonSpinner() {
    ladda_ContactFormSubmit.ladda('stop');
}