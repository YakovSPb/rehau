function flipTo(digit, n){
    var current = digit.attr('data-num');
    digit.attr('data-num', n);
    digit.find('.front').attr('data-content', current);
    digit.find('.back, .under').attr('data-content', n);
    digit.find('.flap').css('display', 'block');
    setTimeout(function(){
        digit.find('.base').text(n);
        digit.find('.flap').css('display', 'none');
    }, 350);
}

function jumpTo(digit, n){
    digit.attr('data-num', n);
    digit.find('.base').text(n);
}

function updateGroup(group, n, flip){
    var digit1 = $('.ten'+group);
    var digit2 = $('.'+group);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.attr('data-num') != num1){
        if(flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if(digit2.attr('data-num') != num2){
        if(flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function setTime(flip){
    secundsClock = Math.max(1,secundsClock);
    secundsClock--;
    var hour = Math.floor(secundsClock/3600);
    var min = Math.floor((secundsClock-hour*3600)/60);
    var sec = Math.floor((secundsClock-hour*3600 - min*60));
    updateGroup('hour',hour, flip);
    updateGroup('min', min, flip);
    updateGroup('sec',sec, flip);
}

var secundsClock;
$(document).ready(function() {
    secundsClock = +$(".clock-block")[0].getAttribute("clock-time");
    setInterval(function () {
        setTime(true);
    }, 1000);

});




