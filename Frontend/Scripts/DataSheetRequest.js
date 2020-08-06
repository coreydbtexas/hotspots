$('#country').change(function () {
    if ($(this).val() == "United States") {
        $('#state').attr("required", true);
        $('.staterequired').show();
    }
    else {
        $('.staterequired').hide();
        $('#state').attr("required", false);
        $('#state :nth(0)').prop("selected", "selected").change();
    }
});

$('#dataSheetRequestForm').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
        //form invalid
    } else {
        e.preventDefault();

        StartSubmitButtonSpinner();

        var requestFormData = {
            Name: $("#name").val(),
            Company: $("#company").val(),
            Email: $("#email").val(),
            Phone: $("#phone").val(),
            Country: $("#country").val(),
            State: $("#state").val(),
            Product: $("#requestedProduct").val(),
            CaptchaResponse: $("#g-recaptcha-response").val()
        }

        $.ajax({
            url: '/api/DataSheetRequest/',
            type: 'POST',
            data: JSON.stringify(requestFormData),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                $('#dataSheetRequestForm').slideUp();
                $("#requestFormThankYou").show();
            },
            error: function (message) {
                if (message.responseText == "Invalid Captcha Response") {
                    StopSubmitButtonSpinner();

                    $("#captchaFormGroup").addClass("has-error");

                    return;
                }

                $('#dataSheetRequestForm').slideUp();
                $("#requestFormError").show();
                console.log('Error: ' + JSON.stringify(message));
            }
        });

        return false;
    }
});

// Create a new instance of ladda for the specified button
var ladda_ContactFormSubmit = $('#dataSheetRequestSubmitButton').ladda();

function StartSubmitButtonSpinner() {
    // Start loading
    ladda_ContactFormSubmit.ladda('start');
}

function StopSubmitButtonSpinner() {
    ladda_ContactFormSubmit.ladda('stop');
}