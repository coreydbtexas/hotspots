$('#SSRStateSelector').on('change', function () {

    var filterValue = $('#SSRStateSelector').val();
    var filterSelector = '.ssrList .ssrItem.' + filterValue;

    $('.ssrList .ssrItem').hide();
    if (filterValue == '') {
        $('.listDescription').hide();
    } else {
        $('.listDescription').show();
    }
    $(filterSelector).show();

});