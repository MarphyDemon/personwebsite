<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017-06-07
 * Time: 09:12
 */

require_once("./fun.php");
	if(isset($_POST['sub'])){
        $name=$_POST['name'];
        $mail=$_POST['email'];
        $message = $_POST['message'];
        function isEmail($email){
            $mode = '/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/';
            if(preg_match($mode,$email)){
                return true;
            }
            else{
                return false;
            }
        }
        if($name!=null&&$mail!=null&&isEmail($mail)){
            $flag = sendMail('1907588771@qq.com',"email:".$mail,"姓名:".$name.",消息:".$message);
            if($flag){
                echo '<script language="javascript">window.alert("发送邮件成功！");</script>';
            }else{
                echo '<script language="javascript">window.alert("发送邮件失败！");</script>';
            }
        }else{
            echo '<script language="javascript">window.alert("发送邮件失败！");'.$str.'</script>';
        }
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="description" content="Marphy的个人网站"/>
    <meta name="description" content="李冬冬-前端工程师-黑龙江大学-1年">
    <meta name="keywords" content="marphy,李冬冬,lidongdong,Marphy,前端工程师,个人网站">

    <meta name="author" content="Marphy"/>
    <title>Marphy</title>
    <!-- 网站小图标-->
    <link rel="shortcut icon" href="image/favicon.png">
    <!--网站消除元素自带属性-->
    <link rel="stylesheet" href="css/resect.css"/>
    <!-- 换肤css设置-->
    <link href="css/skin_peeler.css" rel="stylesheet"/>
    <link href="css/font-awesome.min.css" rel="stylesheet"/>
    <!-- 顶部大图导航-->
    <link rel="stylesheet" href="css/header.css"/>
    <!--<link rel="stylesheet" href="css/top.css"/>-->
    <link rel="stylesheet" href="css/style.css"/>
    <!-- about页面css设置-->
    <link rel="stylesheet" href="css/about.css"/>
    <!-- skill模块css设置-->
    <link rel="stylesheet" href="css/skill.css"/>
    <!-- resume模块css设置-->
    <link rel="stylesheet" href="css/resume.css"/>
    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!-- device模块css设置-->
    <link rel="stylesheet" href="css/device.css"/>
    <!-- project模块css设置-->
    <link rel="stylesheet" href="css/project.css"/>
    <!-- contact模块css设置-->
    <link rel="stylesheet" href="css/contact.css"/>
</head>
<body>
<!-- 右侧换肤栏 -->
<div class="switcher">
    <a id="switch-panel" class="paner">
        <i class="fa fa-desktop"></i>
    </a>

    <p id="choose">换肤</p>
    <ul class="colors-list">
        <li><a title="Pink" id="pink" class="pink"></a></li>
        <li><a title="Green" id="green" class="green"></a></li>
        <li><a title="Blue" id="blue" class="blue"></a></li>
        <li><a title="Brown" id="brown" class="brown"></a></li>
    </ul>
</div>

<!-- backtop返回顶部按钮 -->
<div id="back-top">
    <i class="fa fa-chevron-up"></i>
</div>

<!-- 顶部设计 -->
<!--<div id="top">-->
<!--<div id="logo">-->
<!--<div id="left-logo">-->
<!--<img src="image/icon.png" alt=""/>-->
<!--</div>-->
<!--<div id="right-logo">-->
<!--<img src="image/name.png" alt=""/>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!-- 大图导航 -->

<div id="top-header">
    <div class="head">
        <div id="header">
            <!-- 左侧header -->
            <div id="left-head">
                <img id="smile" src="image/smile.jpg" alt=""/>

                <h1>前端工程师</h1>

                <h2>李冬冬</h2>
                <a href="#about-me" class="anchor">了解我</a>
            </div>
            <!-- 居中导航 -->
            <div id="nav">
                <ul>
                    <a href="#about-me" class="anchor">
                        <li><i class="fa fa-info icon-round icon-active"></i></li>
                        <h3>关于我</h3>
                    </a>
                    <a href="#skill" class="anchor">
                        <li><i class="fa fa-briefcase icon-round"></i></li>
                        <h3>简历</h3>
                    </a>
                    <a href="#project" class="anchor">
                        <li><i class="fa fa-recycle icon-round icon-active"></i></li>
                        <h3>项目实践</h3>
                    </a>
                    <a href="#contact" class="anchor">
                        <li><i class="fa fa-paper-plane-o icon-round"></i></li>
                        <h3>联系我</h3>
                    </a>
                </ul>
            </div>
            <!-- 右侧header -->
            <div id="right-head">
                <img id="sad" src="image/sad.jpg" alt=""/>

                <h1>经验</h1>

                <h2>一年</h2>
                <a href="#skill" class="anchor">下载简历</a>
            </div>
        </div>
    </div>
</div>

<!-- about me -->
<div id="about-me">
    <div id="about">
        <div id="left-about">
            <h1>WHAT TO KNOW</h1>

            <h1>ABOUT ME?</h1>

            <div class="css3-linear"></div>
            <div id="know">
                <a href="#ski" id="TXqq">
                    <img src="image/qq.png" alt=""/>
                </a>
                <a href="#ski" id="TXwei">
                    <img src="image/wechat.png" alt=""/>
                </a>
                <a href="https://github.com/MarphyDemon">
                    <img src="image/github.png" alt=""/>
                </a>
            </div>
        </div>
        <div id="right-about">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;精通Html、css、JavaScript，熟悉Html5、css3、Ajax、nodejs(express框架)，精通使用js/jQuery控制Html不见的各项属性(css、click)等。了解requirejs、es6、vuejs、sass等，熟悉php,mysql。
            </p>

            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;熟悉Html和css样式表，并能够熟练使用Div+css进行网页排版以及设计，擅长将网页原图模型转换为静态网页。</p>
        </div>

    </div>
</div>

<!-- 技能熟练度展示 -->
<div id="skill">
    <div id="perskill">
        <div id="left_skill">
            <div id="html" class="wave">
                <canvas id="canvas0" class="canvas"></canvas>
                <input type="range" value="92" id="input0" class="input" min="0" max="100" step="1"/>

                <h2>Html</h2>
            </div>
            <div id="css" class="wave">
                <canvas id="canvas1" class="canvas"></canvas>
                <input type="range" value="93" id="input1" class="input" min="0" max="100" step="1"/>

                <h2>Css</h2>
            </div>
            <div id="js" class="wave">
                <canvas id="canvas2" class="canvas"></canvas>
                <input type="range" value="94" id="input2" class="input" min="0" max="100" step="1"/>

                <h2>JavaScript</h2>
            </div>
            <div id="express" class="wave">
                <canvas id="canvas3" class="canvas"></canvas>
                <input type="range" value="70" id="input3" class="input" min="0" max="100" step="1"/>

                <h2>Express</h2>
            </div>
            <div id="nodejs" class="wave">
                <canvas id="canvas4" class="canvas"></canvas>
                <input type="range" value="80" id="input4" class="input" min="0" max="100" step="1"/>

                <h2>Nodejs</h2>
            </div>
            <div id="React" class="wave">
                <canvas id="canvas5" class="canvas"></canvas>
                <input type="range" value="90" id="input5" class="input" min="0" max="100" step="1"/>

                <h2>React</h2>
            </div>
        </div>
        <div id="right_skill">
            <div id="download_PDF">
                <h2>Checkout My </h2>

                <h2>Skills</h2>
                <a href="http://pan.baidu.com/s/1qXCflNY">下载简历(PDF文件)</a>
            </div>
        </div>
    </div>
</div>

<!-- resume 模块 -->
<div id="resume">
    <div id="container">
        <div id="resume_txt">
            <div id="download_txt">
                <h2>下载简历</h2>

                <div class="css3-linear"></div>
                <a href="http://pan.baidu.com/s/1jH8TD22">下载简历(Word)</a>
            </div>
            <div id="details">
                <div id="sel-skill">
                    <ul>
                        <li class="board"><a href="#ski"><span><i class="fa fa-home"></i></span></a></li>
                        <li><a href="#ski"><span><i class="fa fa-briefcase"></i></span></a></li>
                        <li><a href="#ski"><span><i class="fa fa-recycle"></i></span></a></li>
                        <li><a href="#ski"><span><i class="fa fa-paper-plane-o"></i></span></a></li>
                        <li><a href="#ski"><span><i class="fa fa-comments-o"></i></span></a></li>
                    </ul>
                </div>
                <div id="skill_det">
                    <div id="skill_one" class="ski">
                        <h4>个人资料</h4>
                        <span><i>姓名 : </i>李冬冬</span>
                        <span><i>年龄 : </i>21</span>
                        <span><i>工作经验 : </i>一年以上</span>
                    </div>
                    <div id="skill_two" class="ski">
                        <h4>教育简介</h4>
                        <span><i>学位 : </i>学士(计算机)</span>
                        <span><i>技能 : </i>Html、css、JavaScript、express</span>
                        <span><i>软件 : </i>webstrom、photoshop、sublime</span>
                    </div>
                    <div id="skill_three" class="ski">
                        <h4>经验</h4>
                        <span><i>天天有课 : </i>前端页面制作</span>
                        <!--<span><i>NAME:</i></span>-->
                        <!--<span><i>NAME:</i></span>-->
                    </div>
                    <div id="skill_four" class="ski">
                        <h4>现地址</h4>
                        <span><i>省 : </i>黑龙江省</span>
                        <span><i>市 : </i>哈尔滨市</span>
                        <span><i>详 : </i>南岗区黑龙江大学(150080)</span>
                    </div>
                    <div id="skill_five" class="ski">
                        <h4>联系我</h4>
                        <span><i>电话 : </i>18846183249</span>
                        <span><i>QQ : </i>1907588771</span>
                        <span><i>微信 : </i>lidongdong1829</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="device">
    <div id="device-me">
        <div id="client">
            <h2>格言</h2>

            <ul id="description">
                <li>
                    <p>"世上没有绝望的处境，只有对处境绝望的人。"</p>
                    <span>---乔布斯</span>
                </li>
                <li>
                    <p>"一个有信念者所开发出的力量，大于99个只有兴趣者。"</p>
                    <span>---乔布斯</span>
                </li>
                <li>
                    <p>" 世界上那些最容易的事情中，拖延时间最不费力。"</p>
                    <span>---乔布斯</span>
                </li>
            </ul>
            <ul id="circle">
                <div id="m-cir">
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </ul>
        </div>
    </div>
</div>

<div id="project">
    <div id="project-show">
        <div id="project-des">
            <h2>项目展示</h2>

            <p>此处为平常练习前端页面或特效展示。</p>
        </div>

        <div id="pic">
            <table>
                <tr>
                    <td><a href="specialeffects/magnifier.html">淘宝放大镜演示</a></td>
                    <td><a href="specialeffects/cube.html">旋转的立方体演示</a></td>
                    <td><a href="specialeffects/wfscroll.html">无缝滚动演示</a></td>
                    <td><a href="specialeffects/clock.html">时钟演示</a></td>
                </tr>
                <tr>
                    <td><a href="specialeffects/ball.html">旋转的球体演示</a></td>
                    <td><a href="specialeffects/defscroll.html">自定义滚动条演示</a></td>
                    <td><a href="specialeffects/pic-change.html">轮播图演示</a></td>
                    <td><a href="specialeffects/flash.html">仿flash动画演示</a></td>

                </tr>
                <tr>
                    <td><a href="specialeffects/fivecircle.html">after练习之奥运五环</a></td>
                    <td><a href="specialeffects/menu-css.html">纯css实现多级菜单</a></td>
                    <td><a href="specialeffects/menujs.html">js实现多级菜单</a></td>
                    <td><a href="specialeffects/defmenu.html">响应式导航菜单</a></td>
                </tr>
                <tr>
                    <td><a href="specialeffects/internetshop/index.html">jQuery网上商城主页</a></td>
                    <td><a href="specialeffects/internetshop/detail.html">jQuery网上商城详情页</a></td>
                    <td><a href="specialeffects/class/05-teacher-01.html">天天有课教师页面(移动端)</a></td>
                    <td><a href="specialeffects/intersite/index.html">仿站首页演示</a></td>
                </tr>
            </table>
        </div>
    </div>
</div>

<div id="contact">
    <div id="contact_me">
        <div id="hire-me">
            <h1>CONTACT ME</h1>
            <p>每个人心中都有一个北京梦</p>
        </div>
        <div id="sendnew">
            <div id="news">
                <form action="" method="post">
                    <input type="text" name="name" placeholder="Your Name"/>
                    <span id="name"></span>
                    <input type="text" name="email" placeholder="Your Email"/>
                    <span id="email"></span>
                    <textarea type="text" name="message" placeholder="Message"></textarea>
                    <span id="message"></span>
                    <button name="sub">contact me</button>
                </form>

            </div>
            <div id="IDnews">
                <h3>我的地址</h3>

                <p>黑龙江省哈尔滨市南岗区黑龙江大学(150080)</p>

                <p>陇ICP备17002990号</p>

                <p>Developed by Dandy Weng.</p>

                <p>Copyright marphy.com. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</div>

<!--陇ICP备17002990号
Developed by Dandy Weng.
Copyright marphy.com. All Rights Reserved.-->

<!--  JQUERY CORE SCRIPTS -->
<script src="js/jquery-1.10.2.js"></script>
<!--实现换肤以及锚点滑动实现-->
<script src="js/switch.js"></script>
<!-- canvas实现圆形水波进度条 -->
<script src="js/skill_canvas.js"></script>
<!-- 加载bootstrap -->
<script src="js/bootstrap.js"></script>
<!--加载resume，实现选项卡动画,实现评价界面轮播图,about模块QQ，微信二维码展现-->
<script src="js/resume.js"></script>


</body>
</html>