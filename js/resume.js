/**
 * Created by Administrator on 2017-06-04.
 */
$("#skill_det>div")
    .eq(0).show()
    .siblings().hide();
//resumeѡ��ϲ����л���ͷ
$("#sel-skill>ul li").on('click',function(){
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

$('#m-cir li').on('click',function(){
    $("#m-cir li").removeClass();
    $(this).addClass('act');
    $('#description>li')
        .eq($(this).index()).show()
        .siblings().hide();
});

//aboutģ��QQ΢�Ŷ�ά��չʾ
$('#TXqq').on('click',function(){
    $('body').append("<div id='app'><img src='image/TXqq.png' alt=''/><span id='close'>X</span></div>");
    $("#close").on('click',function(){
        $('#app').remove();
    });
});

$('#TXwei').on('click',function(){
    $('body').append("<div id='app'><img src='image/TXwei.png' alt=''/><span id='close'>X</div>");
    $("#close").on('click',function(){
        $('#app').remove();
    });
});


