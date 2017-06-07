/**
 * Created by Administrator on 2017-05-19.
 */

//canvasʵ��ˮ������������
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

//      input�ؼ���Ϣ
    var inputValue = oInput.value;
    var nowRange = 0; //������һ����ʱ��input

//      ��������
    var mW = oCanvas.width = 120;
    var mH = oCanvas.height = 120;
    var lineWidth = 1;

//      Բ����
    var r = mH / 2; //Բ��
    var cR = r - 16 * lineWidth; //Բ�뾶

//      Sin ��������
    var sX = 0;
    var sY = mH / 2;
    var axisLength = mW;//�᳤
    var waveWidth = 0.015;//���˿�ȣ���ԽСԽ��
    var waveHeight = 6;//���˸߶ȣ���ԽСԽ��
    var speed = 0.09;//�����ٶȣ���Խ���ٶ�Խ��
    var xOffset = 0;//����xƫ����

    ctx.lineWidth = lineWidth;


//      ��Ȧ����
    var IsdrawCircled = false;
    var drawCircle = function(){
        ctx.beginPath();
//            ������÷�
//            beginPath() ������ʼһ��·���������õ�ǰ��·����
//            ��ʾ����ʹ����Щ����������·����moveTo()��lineTo()��quadricCurveTo()��bezierCurveTo()��arcTo() �Լ� arc()��
//            ��ʾ����ʹ�� stroke() �����ڻ����ϻ���ȷ�е�·����
        ctx.strokeStyle = '#1080d0';
//            ���û򷵻����ڱʴ�����ɫ�������ģʽ��
        ctx.arc(r,r,cR+5,0,2*Math.PI);
//            arc() ����������/���ߣ����ڴ���Բ�򲿷�Բ����
//            ��ʾ������ͨ�� arc() ������Բ�������ʼ������Ϊ 0������������Ϊ 2*Math.PI��
//            ��ʾ����ʹ�� stroke() �� fill() �����ڻ����ϻ���ʵ�ʵĻ���
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r,r,cR,0,2*Math.PI);
        ctx.clip();
//            clip() ������ԭʼ�����м���������״�ͳߴ硣
//            ��ʾ��һ��������ĳ������������֮��Ļ�ͼ���ᱻ�����ڱ����е�������
//           �����ܷ��ʻ����ϵ��������򣩡�
//            ��Ҳ������ʹ�� clip() ����ǰͨ��ʹ�� save() �����Ե�ǰ����������б��棬
//            �����Ժ������ʱ�������лָ���ͨ�� restore() ��������

    };
//      ��sin���ߺ���
    var drawSin = function(xOffset){
//            ���浱ǰ������״̬
        ctx.save();

        var points = []; //���ڴ�Ż�ִSin���ߵĵ�

        ctx.beginPath();
        //�������᳤��ȡ��
        for(var x = sX; x < sX + axisLength; x +=20 / axisLength){
            //�˴�����(x,y)��ȡ�㣬������ʽ �������*sin(x*����� + ���ƫ����)��
            var y = -Math.sin((sX + x) * waveWidth + xOffset);

            var dY = mH * (1 - nowRange / 100);

            points.push([x, dY + y * waveHeight]);
            ctx.lineTo(x, dY + y * waveHeight);
        }

        //���·��
        ctx.lineTo(axisLength, mH);
        ctx.lineTo(sX, mH);
        ctx.lineTo(points[0][0],points[0][1]);
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.restore();
    };
//д�ٷֱ��ı�����
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