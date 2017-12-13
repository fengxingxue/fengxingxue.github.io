window.onload=function(){//当页面完全加载成功后才执行js代码 js写在footer底部  html css img js 
    
    imgLocation();
    
    // var boxDate=["21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg"];
    var boxJson=[
        {"img":"1.jpg"},
        {"img":"2.jpg"},
        {"img":"3.jpg"},
        {"img":"4.jpg"},
        {"img":"5.jpg"},
        {"img":"6.jpg"},
        {"img":"7.jpg"},
        {"img":"8.jpg"},
        {"img":"9.jpg"},
        {"img":"10.jpg"},
        {"img":"11.jpg"},
        {"img":"12.jpg"},
        {"img":"13.jpg"},
        {"img":"14.jpg"},
        {"img":"15.jpg"},
        {"img":"16.jpg"},
        {"img":"17.jpg"},
        {"img":"18.jpg"},
        {"img":"19.jpg"},
        {"img":"20.jpg"}
    ]
    window.onscroll=function(){
        // 判断只有当浏览器滚动到一定的位置后才执行代码
        if(getScroll()){// 如果滚动条滚动最后一张图片高度
            for(var i=0;i<boxJson.length;i++){
                var container=document.querySelector(".container");
                var createBox=document.createElement("div");
                createBox.className="box";
                container.appendChild(createBox);
                var createimg=document.createElement("img");
                createimg.src="img/"+boxJson[i].img;
                createBox.appendChild(createimg);
            }
            
         }
        imgLocation();
    }

}

// 判断滚动条是否滚动到最后一张图片
function getScroll(){
    // 如果最后一张图片距离顶部的高度 < 当前窗口浏览器的高度 + 滚动条距离顶部的高度 那么返回 true
    var box=document.querySelectorAll(".box");
    var lastBox=box.length-1;// 获取最后一张图片
    
    var lsatBoxTop=box[lastBox].offsetTop;// 最后一张图片的高度
//    console.log(lastBox);
    var ieHeight=document.documentElement.clientHeight ||  document.body.clientHeight;
    // 浏览器的高度
    var scrollTop=document.body.scrollTop; // 滚动条的高度
    if(lsatBoxTop<ieHeight+scrollTop){ // 最后图片的高度 < 浏览器的高度 + 滚动条的高度
        return true;
    }
}








function imgLocation(){
    var container=document.querySelector(".container");
    var box=document.querySelectorAll(".box");
    var boxwidth=box[0].offsetWidth;// box的宽度
    var iewidth=document.body.clientWidth;// 浏览器的宽度
    console.log(box[0]);
    var num=Math.floor(iewidth/boxwidth);// 一排图片的个数 = 浏览器的宽度 / box的宽度
//    console.log(num);
    var containerwidth=num*boxwidth;// 主题内容的宽度 = 一排图片的个数 * 单个box的宽度
//    console.log(containerwidth);
    container.style.width=containerwidth+"px"; //最大盒子的宽度 = 主题内容的宽度
//    console.log(container);
    
    

    var boxHeightAll=[];// 创建盒子高度的数组
    for(var i=0;i<box.length;i++){ // i< 盒子的个数
        if(i<num){ // 如果 i < 一拍图片的个数
            boxHeightAll[i]=box[i].offsetHeight; // 盒子高度的数组 = 第几张图片的高度
        }else{// 大于一排图片的个数时
            var minHeight=Math.min.apply(null,boxHeightAll);// 获取数组最小值
//            console.log(minHeight);
            box[i].style.position="absolute";// 给盒子绝对定位
            box[i].style.top=minHeight+"px"; //盒子的高度 = 最小图片高度
            var minIndex=getMinHieghtLocation(boxHeightAll,minHeight);// 最矮图片位置
            box[i].style.left=box[minIndex].offsetLeft+"px";// 盒子的左边距 = 最爱图片位置的左边距
            // 重新获取3个arr的数组
            boxHeightAll[minIndex]=boxHeightAll[minIndex]+box[i].offsetHeight;
            // 最矮图片的高度位置 = 最矮图片高度 + 第几个图片的高度
        }
    }
//    console.log(boxHeightAll);
    
}
// 获取最矮图片的位置
function getMinHieghtLocation(boxHeightArr,minHeight){// 盒子高度数组 ， 数组最小值
  for(var i in boxHeightArr){
      if(boxHeightArr[i]===minHeight){// 盒子高度数组 = 数组最小值
          return i;
      }
  }  
}
