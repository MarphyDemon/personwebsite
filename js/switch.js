/**
 * Created by Administrator on 2017-05-15.
 */
//    右侧换肤栏
var flag = true;
$('#switch-panel').on('click', function () {
    if (flag) {
        $(".switcher").css("left", "0");
    } else {
        $(".switcher").css("left", "-50px");
    }
    flag = !flag;
});
//动态加载css文件
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
//判断css文件是否加载
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
//移除css或者js文件
function removejscssfile(filename, filetype){
    //判断文件类型
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
    //判断文件名
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
    var allsuspects=document.getElementsByTagName(targetelement);
    //遍历元素， 并删除匹配的元素
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

//中间笑脸头像切换
$('#smile').on('mouseover', function () {
    this.src = "image/sad.jpg";
}).on('mouseout', function () {
    this.src = "image/smile.jpg";
});

//中间哭脸头像切换
$('#sad').on('mouseover', function () {
    this.src = "image/smile.jpg";
}).on('mouseout', function () {
    this.src = "image/sad.jpg";
});

//返回顶部按钮
$("#back-top").on('click', function () {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
});

//锚点a的滑动效果
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