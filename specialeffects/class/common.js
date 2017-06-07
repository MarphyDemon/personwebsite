/**
 * Created by Administrator on 2017-03-08.
 */
var oAttention = document.getElementById("attention");
var oFocus = document.getElementById("focus");
var flag = true;
oAttention.onclick = function () {
    if (flag) {
        oFocus.style.background = 'url("img/27_02已关注.png") no-repeat center center';
        oFocus.style.backgroundSize='cover';
    } else {
        oFocus.style.background = 'url("img/27_01关注-.png") no-repeat center center';
        oFocus.style.backgroundSize = 'cover';
    }
    flag = !flag;
    return false;
};