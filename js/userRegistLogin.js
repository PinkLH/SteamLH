$(function() {
    var user = {
        username: '',
        password: ''
    };

    $('#regist').click(function() {
        // console.log(IsProvince($('#province').val()));
        if (IsProvince($('#province').val()) && IsPassword($('#regist_password').val()) && IsName($('#name').val()) && IsNickname($('#nickname').val()) && IsTel($('#tel').val()) && IsMail($('#mail').val()) && IsSex($('input:radio[name="sex"]:checked').val()) && IsUser($('#regist_username').val()) && $('#regist_password').val() == $('#regist_rpassword').val()) {
            user.username = $('#regist_username').val();
            user.password = $('#regist_password').val();
            alert("注册成功！");
            Login();
            // console.log(user.username);
        } else {
            alert("注册失败！请确认是否都输入正确");
            Register();
        }
    });
    $('.login_btn').click(function() {
        var name = $('#login_username').val();
        var pwd = $('#login_password').val();
        // console.log(user.username);
        if (name == user.username && pwd == user.password && name != "" && pwd != "") {
            alert("登陆成功！");
            $('.r_main').hide();
            $('.login_main_box').hide();
            $('.login_bg').hide();
            $('.login_close').hide();
            $('.rt2,.rt3').hide();
            $('.f-t').hide();
            $('.rt5,.rt6').show();
            $('.rt6 span').html(user.username);
        } else {
            alert("登陆失败！请检查用户名密码是否正确");
        }
    });

})