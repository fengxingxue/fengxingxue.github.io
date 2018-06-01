var snav=document.querySelectorAll('.snav li');
var sspan=document.querySelector('h1 span');
var sspan1=document.querySelectorAll('.snav li');
var sdiv=document.querySelectorAll('.ske>div');
for(var i=0;i<snav.length;i++){
    snav[i].index=i;
    snav[i].onclick=function(){
        for(var i=0;i<snav.length;i++){
            snav[i].style.color='#000';
            snav[i].style.borderBottom='none';
            sdiv[i].style.display='none';
        }
        this.style.color='#0ec97a';
        this.style.borderBottom='solid 3px #0ec97a';
        sdiv[this.index].style.display='block';
        var a=this.children;
        sspan.innerHTML=a[0].innerHTML;
    }
}
var sa=document.querySelectorAll('.shi');
var sv=document.querySelectorAll('.v');
for(var i=0;i<sv.length;i++){
    var s=sv[i].children;
    s[0].onclick=function(){
        var c=this.parentNode;
        c.style.display='none';
    }
}
for(var i=0;i<sa.length;i++){
    var s=sa[i].children;
    s[0].onclick=function(){
            var aa=this.nextSibling.nextSibling;
            aa.style.display='block';
    }
}
var zone=document.querySelectorAll('.one');
var zone1=document.querySelector('.zone');
zone[0].onclick=function(){
    zone1.style.display='block';
}
var zone2=document.querySelectorAll('.zone1');
for(var i=0;i<zone2.length;i++){
    zone2[i].onclick=function(){
        var z=this.children;
        z[3].style.display='block';
    }
}
var n=document.querySelectorAll('.nextti');
var nn=document.querySelectorAll('.sti');
for(var i=0;i<n.length;i++){
    n[i].onclick=function(){
        var n1=this.parentNode;
        var n2=n1.nextElementSibling;
        n1.style.display='none';
        n2.style.display='block';
    }
    nn[i].onclick=function(){
        var nn1=this.parentNode;
        var nn2=nn1.previousSibling;
        var nn3=nn2.previousElementSibling;
        nn1.style.display='none';
        nn3.style.display='block';
    }
}
var zone3=document.querySelectorAll('.zone3');
var zlian=document.querySelector('.zl');
var one1=document.querySelector('.one1');
  for(var i=1;i<zone.length;i++){
      zone[i].onclick=function () {
          alert('正在进入，请稍等');
          for(var i=0;i<zone.length;i++){
              zone3[i].style.display='block';
          }
      }
  }
  one1.onclick=function(){
      zlian.style.display='block';
  }