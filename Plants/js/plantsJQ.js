$(function() {
    //JQ特效一
    $('.list1 li').click(function() {
        var i = $(this).index();
        // console.log(i);
        if (i == 0) {
            $('.movie_img').eq(0).trigger('play');
            $('.movie_img').eq(1).trigger('pause');
        } else {
            $('.movie_img').eq(0).trigger('pause');
        }
        if (i == 1) {
            $('.movie_img').eq(1).trigger('play');
            $('.movie_img').eq(0).trigger('pause');
        } else {
            $('.movie_img').eq(1).trigger('pause');
        }
        $('.movie_img').hide();
        $('.list1 li').removeClass('list1_li');
        $('.list1 li').eq(i).addClass('list1_li');
        $('.movie_img').eq(i).show();

    });

    //JQ特效二
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
})