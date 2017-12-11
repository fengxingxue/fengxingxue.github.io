function w1Focus(w1ID, w1class, w1innerHTML) {
            switch (w1ID.value) { //switch 判断
            case "":
                w1class.className = "bl";
                w1class.innerHTML = w1innerHTML;
                break;
            }
        }

        function w2Blur(w2Id, w2Text, w2innerHTML, w2Reg, w2RegHTML, w2elseHTML) {
            if (w2Id.value == "") {
                w2Text.style.color = "#f00";
                w2Text.innerHTML = w2innerHTML;
                return false;
            }
            else if (w2Reg) {
                w2Text.style.color = "#f00";
                w2Text.innerHTML = w2RegHTML;
                return false;
            }
            else {
                w2Text.style.color = "#0cf";
                w2Text.innerHTML = w2elseHTML;
                return true;
            }
        }
        var user = document.getElementById("user");
        var userText = document.getElementById("userText");
        var userReg = /^[0-9a-zA-Z]{6,18}$/;
        user.onfocus = function () {
            var a = user;
            var b = userText;
            var a1 = "请输入用户名！";
            w1Focus(a, b, a1);
        }

        function xuser() {
            var a = user;
            var b = userText;
            var t1 = "不能为空！";
            var Reg = userReg.test(user.value) != true;
            var t2 = "请输入6-18位的英文或数字。";
            var t3 = "通过！";
            var x = w2Blur(a, b, t1, Reg, t2, t3);
            return x;
        }
        user.onblur = function () {
            xuser();
        }
        var password = document.getElementById("password");
        var passwordText = document.getElementById("passwordText");
        var passwordReg = /^[0-9a-zA-Z]{6,18}$/;
        password.onfocus = function () {
            var a = password;
            var b = passwordText;
            var a1 = "请输入密码！";
            w1Focus(a, b, a1);
        }

        function xpassword() {
            var a = password;
            var b = passwordText;
            var t1 = "密码不能为空！";
            var Reg = passwordReg.test(password.value) == false;
            var t2 = "请输入6-18位的英文或数字。";
            var t3 = "输入正确！";
            return w2Blur(a, b, t1, Reg, t2, t3);
        }
        password.onblur = function () {
            xpassword();
        }
        var password1 = document.getElementById("password1");
        var password1Text = document.getElementById("password1Text");
        password1.onfocus = function () { //在输入框的时候
            var a = password1;
            var b = password1Text;
            var a1 = "确认密码！";
            w1Focus(a, b, a1);
        }

        function xpassword1() {
            var a = password1;
            var b = password1Text;
            var t1 = "确认密码不能为空！";
            var Reg = password.value != password1.value;
            var t2 = "密码不一致。";
            var t3 = "密码通过！";
            return w2Blur(a, b, t1, Reg, t2, t3);
        }
        password1.onblur = function () { //离开输入框的时候
            xpassword1();
        }
        var tel = document.getElementById("tel");
        var tellText = document.getElementById("telText");
        var telReg = /1\d{10}$/;;
        tel.onfocus = function () { //在输入框的时候
            var a = tel;
            var b = tellText;
            var a1 = "请输入手机号!";
            w1Focus(a, b, a1);
        }

        function xtel() {
            var a = tel;
            var b = tellText;
            var t1 = "手机号不能为空！";
            var Reg = telReg.test(tel.value) == false;
            var t2 = "手机号格式有误！";
            var t3 = "输入正确！";
            return w2Blur(a, b, t1, Reg, t2, t3);
        }
        tel.onblur = function () { //离开输入框的时候
                xtel();
            }
        var code = document.getElementById("code");
        var codeText = document.getElementById("codeText");
        var codeRandom = Math.floor(Math.random() * 9000) + 1000;
        code.onfocus = function () {
            codeText.innerHTML = "验证码为：" + codeRandom;
            codeText.style.color = "#494747";
        }
        code.onblur = function () {
            if (code.value === "") {
                codeText.innerHTML = "请输入验证码 ： " + codeRandom;
                codeText.style.color = "#f00";
            }
            else if (code.value != codeRandom) {
                codeText.innerHTML = "请确认验证码是否为：" + codeRandom;
                codeText.style.color = "#f00";
            }
            else {
                codeText.innerHTML = "通过!";
                codeText.style.color = "#0cf";
            }
        }
            //重置
        function w1reset() {
            var formButton = document.getElementById("form");
            var formAllspan = formButton.getElementsByTagName("span");
            var formAllInput = formButton.getElementsByTagName("input");
            for (var i = 0; i < formAllspan.length; i++) {
                formAllspan[i].style.color = "#494747";
                formAllspan[i].innerHTML = "请输入内容！！！";
            }
        }
        onkeyup = function () {
                if (xuser() && xpassword() && xpassword1() && xtel()) {
                    var subimt = document.getElementById("sub");
                    subimt.disabled = "";
                }
            }
            //提交
        function xsubmit() {
            if (xuser() && xpassword() && xpassword1() && xtel()) {
                alert("恭喜你！注册成功！！！");
                return true;
            }
            return false;
        }
var lv=document.getElementById("lv");
var le=document.getElementById("le");
var main1=document.getElementById("main1");
var main2=document.getElementById("main2");
var f1=document.getElementById("f1");
var f2=document.getElementById("f2");
var f3=document.getElementById("f3");
var f4=document.getElementById("f4");
var freg = /^[0-9a-zA-Z]{6,18}$/;


function w4Focus(w3ID, w3class, w3innerHTML) {
            switch (w3ID.value) { //switch 判断
            case "":
                w3class.style.color = "#494747";
                w3class.innerHTML = w3innerHTML;
                break;
            }
        }

        function w4Blur(w4Id, w4Text, w4innerHTML, w4Reg, w4RegHTML, w4elseHTML) {
            if (w4Id.value == "") {
                w4Text.style.color = "#f00";
                w4Text.innerHTML = w4innerHTML;
                return false;
            }
            else if (w4Reg) {
                w4Text.style.color = "#f00";
                w4Text.innerHTML = w4RegHTML;
                return false;
            }
            else {
                w4Text.style.color = "#0cf";
                w4Text.innerHTML = w4elseHTML;
                return true;
            }
        }

f1.onfocus=function(){
    var x=f1;
    var x1=f2;
    var x2="请输入用户名！";
    w4Focus(x,x1,x2);
}
function two(){
    var x=f1;
    var x1=f2;
    var x2="不能为空！";
    var x3=f1.value.length>18 || f1.value.length<6;
    var x4="请输入6-18位数字或英文！";
    var x5="通过！";
    w4Blur(x,x1,x2,x3,x4,x5);
    return true;
}
f1.onblur=function(){
    two();
}
f3.onfocus=function(){
    var x=f3;
    var x1=f4;
    var x2="请输入用户名！";
    w4Focus(x,x1,x2);
}
function three(){
    var x=f3;
    var x1=f4;
    var x2="不能为空！";
    var x3=f3.value.length>18 || f3.value.length<6;
    var x4="请输入6-18位数字或英文！";
    var x5="通过！";
    w4Blur(x,x1,x2,x3,x4,x5);  
    return true;
}
f3.onblur=function(){
    three();
}
onkeydown = function () {
                if (two() && three()) {
                    var first = document.getElementById("first");
                    first.disabled = "";
                }
            }
function asubmit() {
            if (f1.value!="" && f3.value!="" ){
                alert("恭喜你！登录成功！！！");
                return true;
            }
            return false;
        }

le.onclick=function(){
    main1.style.display="block";
    main2.style.display="none";
    this.style.color="#c8e096";
    lv.style.color="#494747";
}
lv.onclick=function(){
    main2.style.display="block";
    main1.style.display="none";
    this.style.color="#c8e096";
    le.style.color="#494747";
}



