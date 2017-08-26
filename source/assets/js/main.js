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
$('#download').on('click',function () {
    yaCounter37747250.reachGoal('catalog');
    console.log('downloaded');
});

for(var i= 1; i <= 7; i++) {
    var loader = document.createElement("img");
    loader.addEventListener('load', (function (i) {
        var img = document.getElementById("slide-" + i);
        img.src = "/assets/images/slide-" + i + ".jpg";
    }).bind(null, i));
    loader.src = "/assets/images/slide-" + i + ".jpg"
}