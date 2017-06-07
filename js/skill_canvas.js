/**
 * Created by Administrator on 2017-05-19.
 */

//canvas实现水波进度条动画
var a = [];
var b = [];
var aInput = document.getElementsByClassName('input');
for(var i=0;i<aInput.length;i++){
    a[i] = "canvas"+i;
    b[i] = "input"+i;
    water(a[i],b[i]);
}
function water(id1,id2){
    var oCanvas = document.getElementById(id1);
    var oInput = document.getElementById(id2);
    var ctx = oCanvas.getContext('2d');

//      input控件信息
    var inputValue = oInput.value;
    var nowRange = 0; //用于做一个临时的input

//      画布属性
    var mW = oCanvas.width = 120;
    var mH = oCanvas.height = 120;
    var lineWidth = 1;

//      圆属性
    var r = mH / 2; //圆心
    var cR = r - 16 * lineWidth; //圆半径

//      Sin 曲线属性
    var sX = 0;
    var sY = mH / 2;
    var axisLength = mW;//轴长
    var waveWidth = 0.015;//波浪宽度，数越小越宽
    var waveHeight = 6;//波浪高度，数越小越高
    var speed = 0.09;//波浪速度，数越大速度越快
    var xOffset = 0;//波浪x偏移量

    ctx.lineWidth = lineWidth;


//      画圈函数
    var IsdrawCircled = false;
    var drawCircle = function(){
        ctx.beginPath();
//            定义和用法
//            beginPath() 方法开始一条路径，或重置当前的路径。
//            提示：请使用这些方法来创建路径：moveTo()、lineTo()、quadricCurveTo()、bezierCurveTo()、arcTo() 以及 arc()。
//            提示：请使用 stroke() 方法在画布上绘制确切的路径。
        ctx.strokeStyle = '#1080d0';
//            设置或返回用于笔触的颜色、渐变或模式。
        ctx.arc(r,r,cR+5,0,2*Math.PI);
//            arc() 方法创建弧/曲线（用于创建圆或部分圆）。
//            提示：如需通过 arc() 来创建圆，请把起始角设置为 0，结束角设置为 2*Math.PI。
//            提示：请使用 stroke() 或 fill() 方法在画布上绘制实际的弧。
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r,r,cR,0,2*Math.PI);
        ctx.clip();
//            clip() 方法从原始画布中剪切任意形状和尺寸。
//            提示：一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
//           （不能访问画布上的其他区域）。
//            您也可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，
//            并在以后的任意时间对其进行恢复（通过 restore() 方法）。

    };
//      画sin曲线函数
    var drawSin = function(xOffset){
//            保存当前环境的状态
        ctx.save();

        var points = []; //用于存放回执Sin曲线的点

        ctx.beginPath();
        //在整个轴长上取点
        for(var x = sX; x < sX + axisLength; x +=20 / axisLength){
            //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅款 + 振幅偏移量)”
            var y = -Math.sin((sX + x) * waveWidth + xOffset);

            var dY = mH * (1 - nowRange / 100);

            points.push([x, dY + y * waveHeight]);
            ctx.lineTo(x, dY + y * waveHeight);
        }

        //封闭路径
        ctx.lineTo(axisLength, mH);
        ctx.lineTo(sX, mH);
        ctx.lineTo(points[0][0],points[0][1]);
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.restore();
    };
//写百分比文本函数
    var drawText = function(){
        ctx.save();

        var size = 0.4*cR;
        ctx.font = size +'px Microsoft Yahei';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'blue';
        ctx.fillText(~~nowRange + '%',r,r + size / 2);

        ctx.restore();
    };

    var render = function(){
        ctx.clearRect(0,0,mW,mH);

        inputValue = oInput.value;
        if(IsdrawCircled == false){
            drawCircle();
        }
        if(nowRange <= inputValue){
            var tmp = 1;
            nowRange +=tmp;
        }
        if(nowRange > inputValue){
            var tmp = 1;
            nowRange -=tmp;
        }
        drawSin(xOffset);
        drawText();

        xOffset +=speed;
        requestAnimationFrame(render);
    };
    render();
}