// require('slider-pro');
// $ = require('jquery');
// require('./plugins/single-page-nav');
// //require('./plugins/ytbg')
// require('./plugins/ytbg-style.css')
// require('./node_modules/slider-pro/dist/css/slider-pro.min.css');
//
$(function() {
    $('#main').sliderPro({
        arrows: true,
        //autoplay: false,
        width: '100%',
        autoHeight: true
    });
    $('#video').YTPlayer();
    $('#navbar-menu').singlePageNav({
        offset: 52,
        currentClass: 'current-section',
    });

    var navMain = $('#navbar-menu-collapse');
    navMain.on('click', 'a', null, function () {
        navMain.collapse('hide');
    });
});