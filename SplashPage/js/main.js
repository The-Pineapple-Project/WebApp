var $pineapple = $('#logo-left');
var start_angle = 0;
var global_timer;

$('#logo').mouseenter(function () {
    rotate($pineapple, start_angle);
}).mouseleave(function () {
    stop_rotation();
});


function rotate (el, angle) {
    el.css({
        transform: 'rotate(' + angle + 'deg)'
    });

    global_timer = setTimeout(function () {
        start_angle = ++angle;
        rotate(el, angle, global_timer);
    },25);
}

function stop_rotation () {
    window.clearInterval(global_timer);
}