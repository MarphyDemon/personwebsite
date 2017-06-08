/**
 * Created by Administrator on 2017-06-04.
 */
$("#skill_det>div")
    .eq(0).show()
    .siblings().hide();
//resumeѡ��ϲ����л���ͷ
$("#sel-skill>ul li").on('click', function () {
    $("#sel-skill>ul li").removeClass();
    $(this).addClass('board');
    //resumeѡ��²����л�
    //$('.ski').removeClass("show");
    //console.log($(this).index());
    $("#skill_det>div")
        .eq($(this).index()).show()
        .siblings().hide();
});

//���۽����ֲ�ͼչʾ
$("#description>li")
    .eq(0).show()
    .siblings().hide();
$("#m-cir>li")
    .eq(0).addClass('act');

$('#m-cir li').on('click', function () {
    $("#m-cir li").removeClass();
    $(this).addClass('act');
    $('#description>li')
        .eq($(this).index()).show()
        .siblings().hide();
});

//aboutģ��QQ΢�Ŷ�ά��չʾ
$('#TXqq').on('click', function () {
    $('body').append("<div id='app'><img src='image/TXqq.png' alt=''/><span id='close'>X</span></div>");
    $("#close").on('click', function () {
        $('#app').remove();
    });
});

$('#TXwei').on('click', function () {
    $('body').append("<div id='app'><img src='image/TXwei.png' alt=''/><span id='close'>X</div>");
    $("#close").on('click', function () {
        $('#app').remove();
    });
});


//发邮件判断  此处主要用来判断是否输入信息和邮箱是否正确

$("input[name='name']").blur(function () {
    if ($(this).val() == null || $(this).val() == "") {
        $("#name").html(" <font color=red>输入为空!</font>");
        $(this).focus();
    } else {
        $("#name").html("");
    }
});
$("input[name='email']").blur(function () {
    if ($(this).val() == null || $(this).val() == "") {
        $("#email").html(" <font color=red>输入为空!</font>");
        $(this).focus();
    } else {
        var email=$(this).val();
        if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
        {
            $("#email").html(" <font color=red>格式错误!</font>");
            $(this).focus();
        }
    }
});

$("textarea[name='message']").blur(function () {
    if ($(this).val() == null || $(this).val() == "") {
        $("#message").html(" <font color=red>输入为空!</font>");
        $(this).focus();
    } else {
        $("#message").html("");
    }
});

$("button[name='sub']").on('click',function(){
    $("input[name='name']").blur();
    $("input[name='email']").blur();
    $("textarea[name='message']").blur();
});