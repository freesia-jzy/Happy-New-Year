/**
 * Created by grace on 16-12-20.
 */
window.onload=function() {
    var music = document.getElementById("music");
    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");
    var audio=document.getElementsByTagName("audio")[0];
    //当音乐播放完停止时，自动停止光盘旋转
    audio.addEventListener("ended",function (event) {
        music.setAttribute("class","");
        //music.style.animationPlayState="paused";
        //music.style.webkitAnimationPlayState="paused";
    },false);

    //点击音乐图标，控制音乐播放效果
    music.addEventListener("touchstart",function (event) {
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
            //不够兼容，手机版本太低就不可以
            //this.style.animationPlayState="running";
            //this.style.webkitAnimationPlayState="running";
        }
        else {
            audio.pause();
            this.setAttribute("class","");
            //this.style.animationPlayState="paused";
            //this.style.webkitAnimationPlayState="paused";
        }
    },false);
    page1.addEventListener("touchstart",function (event) {
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";
        setTimeout(function () {
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500)
    },false)
};
