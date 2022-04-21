var LastDate = "2022-08-01 14:00:00"; //促销结束时间

function Login() {
    $('.login_main_box').show();
    $('.r_main').hide();
    $('.login_bg').css("transition", "3s ease-in");
    $('.login_bg').show();
    $('.login_close').show();
}

function Register() {
    $('.r_main').show();
    $('.login_main_box').hide();
    $('.login_bg').css("transition", "3s ease-in");
    $('.login_bg').show();
    $('.login_close').show();
}

function RemainTime(dateTime) {
    // 指定日期和时间
    var EndTime = new Date(dateTime);
    // 当前系统时间
    var NowTime = new Date();;
    var t = EndTime.getTime() - NowTime.getTime();
    var h = Math.floor(t / 1000 / 60 / 60);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
    if (s <= 9) {
        s = "0" + s;
    }
    if (m <= 9) {
        m = "0" + m;
    }
    var html = h + ":" + m + ":" + s;
    return html;
}

$(function() {
    var a = 0;
    $('.rt4').click(function() {
        if (a == 0) {
            $('.rt4_menu').show();
            a = 1;
        } else {
            $('.rt4_menu').hide();
            a = 0;
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("#login1").fadeIn(200);
        } else {
            $("#login1").fadeOut(200);
        }
    });
    $("#login,#login1,#login2,#login3,#goto_regist,#goto_login").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            400);
        // return false;
    });
    $('.login_close').click(function() {
        $('.r_main').hide();
        $('.login_main_box').hide();
        $('.login_bg').hide();
        $(this).hide();
    });


    setInterval(function() {
        $(".dailydeal_countdown").html(RemainTime(LastDate))
    }, 1000);
    // setInterval(function() { RemainTime(LastDate) }, 1000);

    $('.m-m1-h2-3-1').click(function() {
        $('.m-m1-h2-3-2').css("background-color", "transparent");
        $(this).css("background-color", "#4c9acc");
        $('.Carousel3-1').css("display", "block");
        $('.Carousel3-2').css("display", "none");
    });
    $('.m-m1-h2-3-2').click(function() {
        $('.m-m1-h2-3-1').css("background-color", "transparent");
        $(this).css("background-color", "#4c9acc");
        $('.Carousel3-1').css("display", "none");
        $('.Carousel3-2').css("display", "block");
    });

    carousel1();
    carousel2();


    function carousel1() {
        var b = 0;
        var nex = 0;
        var perv = 0;
        var timer = null;

        function autoPlay() {
            timer = setInterval(function() {
                rt();
            }, 4000);
        }

        function dt() {
            $(".thumbs1 div").click(function() {
                perv = b;
                b = $(this).index();
                if (perv != b) {
                    $(".item1").hide();
                    $(".item1").eq(perv).show();
                    $(".item1").eq(b).show();
                    if (perv > b) {
                        $(".Carousel1").css("left", -940);
                        $(".Carousel1").animate({
                            left: 0
                        }, 700);
                    } else {
                        $(".carousel1").css("left", 0);
                        $(".Carousel1").animate({
                            left: -940
                        }, 700);
                    }
                }
                dot();
            })
        }

        function rt() {

            b = $(".thumbs1>.activethumb").index();
            // console.log(b)
            nex = b + 1;
            if (nex == 3) {
                nex = 0;
            }
            // console.log(nex)
            $(".thumbs1 div").removeClass("activethumb");
            $(".thumbs1 div").eq(nex).addClass("activethumb");
            $(".item1").hide();
            $(".item1").eq(nex).show();
            $(".item1").eq(b).show();
            if (b == 2) {
                $(".Carousel1").css("left", -940);
                $(".Carousel1").animate({
                    left: 0
                }, 1000);
            } else {
                $(".Carousel1").css("left", 0);
                $(".Carousel1").animate({
                    left: -940
                }, 1000);
            }
            b = b + 1;
        }

        function lt() {
            b = $(".thumbs1>.activethumb").index();
            // console.log(b)
            perv = b - 1;
            if (perv < 0 || b == 0) {
                perv = 2;
            }
            // console.log(perv)
            $(".thumbs1 div").removeClass("activethumb");
            $(".thumbs1 div").eq(perv).addClass("activethumb");
            $(".item1").hide();
            $(".item1").eq(perv).show();
            $(".item1").eq(b).show();
            if (b == 0) {
                $(".Carousel1").css("left", 0);
                $(".Carousel1").animate({
                    left: -940
                }, 1000);
            } else {
                $(".Carousel1").css("left", -940);
                $(".Carousel1").animate({
                    left: 0
                }, 1000);
            }
            b = b - 1;
        }

        function dot() {
            $(".thumbs1 div").removeClass("activethumb");
            $(".thumbs1 div").eq(b).addClass("activethumb");
        }
        dt();
        $(".Carousel1,.c1r,.c1l,.thumbs1").mouseenter(function() {
            clearInterval(timer);
            // console.log("a");
        }).mouseleave(function() {
            autoPlay();
        });
        $(".c1r").click(function() {
            rt();
        })
        $(".c1l").click(function() {
            lt();
        });
        autoPlay();
    }



    function carousel2() {
        var unslider04 = $('#b04').unslider({
                dots: true
            }),
            data04 = unslider04.data('unslider');
        $('.Carousel2-nav').click(function() {
            var fn = this.className.split(' ')[1];
            data04[fn]();
        });
    }


})