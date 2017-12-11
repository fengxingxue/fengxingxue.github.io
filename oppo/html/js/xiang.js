var a1=document.getElementsByClassName("a1");
var a2=document.getElementsByClassName("a2");
var a3=document.getElementsByClassName("a3");
var a4=document.getElementsByClassName("a4");
var b1=document.getElementsByClassName("b1");
var b2=document.getElementsByClassName("b2");
var b3=document.getElementsByClassName("b3");
var b4=document.getElementsByClassName("b4");

b1.onclick=function(){
    a1.style.display="block";
    a2.style.display="none";
    a3.style.display="none";
    a4.style.display="none";  
}
b2.onclick=function(){
    a2.style.display="block";
    a1.style.display="none";
    a3.style.display="none";
    a4.style.display="none";  
}
b3.onclick=function(){
    a3.style.display="block";
    a2.style.display="none";
    a1.style.display="none";
    a4.style.display="none";  
}
b4.onclick=function(){
    a4.style.display="block";
    a2.style.display="none";
    a3.style.display="none";
    a1.style.display="none";  
}