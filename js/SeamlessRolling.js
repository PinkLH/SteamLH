$(function() {
    var _boxa1 = document.getElementById("boxa1");
    var _boxa2 = document.getElementById("boxa2");
    var x = 0;
    var fun = function() {
        _boxa1.style.left = x + 'px';
        _boxa2.style.left = (x + 1000) + 'px';
        x--;
        if ((x + 1000) == 0) {
            x = 0;
        }
    }
    setInterval(fun, 8);

    var area = document.getElementById('moocBox');
    var iliHeight = 24; //单行滚动的高度
    var speed = 50; //滚动的速度
    var time;
    var delay = 0;
    area.scrollTop = 0;
    area.innerHTML += area.innerHTML; //克隆一份一样的内容
    function startScroll() {
        time = setInterval(scrollUp, speed);
        area.scrollTop++;
    }

    function scrollUp() {
        if (area.scrollTop % iliHeight == 0) {
            clearInterval(time);
            setTimeout(startScroll, delay);
        } else {
            area.scrollTop++;
            if (area.scrollTop >= area.scrollHeight / 2) {
                area.scrollTop = 0;
            }
        }
    }

    setTimeout(startScroll, delay);
});