$('.horizon-slider-controls a')
    .mouseenter(function () {
        $('.horizon-slider-controls a').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('data-slide');
        showSlide(id);
    })
    .mouseleave(function () {
        $('.horizon-slider-wrapper > .horizon-slide').hide();
        $('.horizon-slider-wrapper > .slider-wrapper').show();
    });

function showSlide(id) { // id is the variable name of what we will be calling which will be passed
    // call function that we have declared above so that the interval is cleared and restarted

    $('.horizon-slider-wrapper > .horizon-slide').hide(); // fadeout all images
    $('.horizon-slider-wrapper > .slider-wrapper').hide();

    $('.horizon-slider-wrapper > div#' + id).show(); // use sliderNext to calculate the next slider id

    //$('.horizon-slider-controls > a#' + id).addClass('active');

    //sliderInt = id; // update so that the current slide = 2 as set globally
    //sliderNext = id + 1; // calculate the next image
    //startSlider(); // start the slider process again, as it was stopped before
}