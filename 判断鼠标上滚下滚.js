function scrollFunc(e) {
    e = e || window.event;
    if (e.wheelDelta) {              //判断浏览器ie,谷歌滚轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
        } else if (e.wheelDelta < 0) {
            console.log("滑轮向下滚动");
        }
    } else if (e.detail) {          //Firefox滚轮事件
        if (e.detail > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
        }else if(e.detail < 0){
            console.log("滑轮向下滚动");
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {//firefox
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法  //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;