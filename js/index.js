/**
 * Created by grace on 16-12-20.
 */
window.onload=function() {
    var music = document.getElementById("music");
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
};
