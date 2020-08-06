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

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip(); 


    var industry = getUrlVars()["industry"];
    var application = getUrlVars()["application"];

    if (industry) {

        $('#industry-select option').filter(function () {
            return this.value == industry;
        }).prop('selected', true);
        var filterValue = $('#industry-select').val();
        var filterSelector = '.category-product-list .product-wrapper.' + filterValue;

        $('.category-product-list .product-wrapper').hide();
        $(filterSelector).show();
    }

    if (application) {

        $('#filter-select option').filter(function () {
            return this.value == application;
        }).prop('selected', true);
            var filterValue = $('#filter-select').val();
            var filterSelector = '.category-product-list .product-wrapper.' + filterValue;

            $('.category-product-list .product-wrapper').hide();
            $(filterSelector).show();
    }
});

var filterValue = null;
var industryValue = null;

$('#filter-select').on('change', function () {
    filterValue = null;
    industryValue = null;
    filterValue = $('#filter-select').val();
    industryValue = $('#industry-select').val();
    if (industryValue != null && industryValue != "item") {
        filterValue += "." + industryValue;
    }
    var filterSelector = '.category-product-list .product-wrapper.' + filterValue;

    $('.category-product-list .product-wrapper').hide();
    $('.featured-product-list').hide();
    if ((filterValue == "item" && industryValue == "item") || (filterValue == null && industryValue == null)) {
        $('.featured-product-list').fadeIn(300);
    }
    $(filterSelector).fadeIn(300);
});

$('#industry-select').on('change', function () {
    industryValue = null;
    filterValue = null;
    filterValue = $('#filter-select').val();
    industryValue = $('#industry-select').val();
    if (filterValue != null && filterValue != "item") {
        industryValue += "." + filterValue;
    }
    var industrySelector = '.category-product-list .product-wrapper.' + industryValue;

    $('.category-product-list .product-wrapper').hide();
    $('.featured-product-list').hide();
    if ((filterValue == "item" && industryValue == "item") || (filterValue == null && industryValue == null)) {
        $('.featured-product-list').fadeIn(300);
    }
    $(industrySelector).fadeIn(300);
})







