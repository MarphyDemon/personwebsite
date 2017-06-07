/**
 * Created by Administrator on 2017-05-15.
 */
//    �Ҳ໻����
var flag = true;
$('#switch-panel').on('click', function () {
    if (flag) {
        $(".switcher").css("left", "0");
    } else {
        $(".switcher").css("left", "-50px");
    }
    flag = !flag;
});
//��̬����css�ļ�
var dynamicLoading = {
    css: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
};
//�ж�css�ļ��Ƿ����
function isload(fname){
    var isload = false;
    var tags = { "css":"link"};
    var tagname = tags[fname.split(".").pop()];
    if(tagname != undefined){
        var elts = document.getElementsByTagName(tagname);
        for(i in elts){
            if(elts[i].href && elts[i].href.toString().indexOf(fname)!="-1"){
                isload = true;
            }
        }
    }
    return isload;
}
//�Ƴ�css����js�ļ�
function removejscssfile(filename, filetype){
    //�ж��ļ�����
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
    //�ж��ļ���
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
    var allsuspects=document.getElementsByTagName(targetelement);
    //����Ԫ�أ� ��ɾ��ƥ���Ԫ��
    for (var i=allsuspects.length; i>=0; i--){
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
}

function removeCss(){
    if(isload("pink.css")||isload("blue.css")||isload("green.css")||isload("brown.css")){
        removejscssfile("css/themes/pink.css", "css");
        removejscssfile("css/themes/green.css", "css");
        removejscssfile("css/themes/blue.css", "css");
        removejscssfile("css/themes/brown.css", "css");
    }
}

$('#pink').on('click', function () {
    removeCss();
    dynamicLoading.css("css/themes/pink.css");
});
$('#green').on('click', function () {
    removeCss();
    dynamicLoading.css("css/themes/green.css");
});
$('#blue').on('click', function () {
    removeCss();
    dynamicLoading.css("css/themes/blue.css");
});
$('#brown').on('click', function () {
    removeCss();
    dynamicLoading.css("css/themes/brown.css");
});

//�м�Ц��ͷ���л�
$('#smile').on('mouseover', function () {
    this.src = "image/sad.jpg";
}).on('mouseout', function () {
    this.src = "image/smile.jpg";
});

//�м����ͷ���л�
$('#sad').on('mouseover', function () {
    this.src = "image/smile.jpg";
}).on('mouseout', function () {
    this.src = "image/sad.jpg";
});

//���ض�����ť
$("#back-top").on('click', function () {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
});

//ê��a�Ļ���Ч��
$('.anchor').click(function () {
    //console.log(this.pathname)
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top - 50;
            $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
            return false;
        }
    }
});