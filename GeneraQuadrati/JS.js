window.onload=function () {
    var ref=document.getElementById("btnGenera");
    ref.setAttribute("onclick", "generaQuadrati()");
}
var zindex=0;
function generaQuadrati() {
    var wrapper = document.getElementById("wrapper");
    var max=Math.floor((25) * Math.random())+1;
    var btn =document.getElementById("btnGenera");
    zindex++;
    for(var i=0; i<max;i++) {
        var div = document.createElement("div");
        div.style.zIndex=zindex;
        div.style.position="absolute";
        div.style.width = (Math.floor((150 - 50 + 1) * Math.random()) + 50).toString()+"px";
        div.style.height = (Math.floor((150 - 50 + 1) * Math.random()) + 50).toString()+"px";
        var posx = Math.floor((450 + 1) * Math.random());
        var posy = Math.floor((250 + 1) * Math.random());
        div.style.marginLeft = posx.toString()+"px";
        div.style.marginTop = posy.toString()+"px";
        var rosso = Math.floor((255 + 1) * Math.random());
        var verde = Math.floor((255 + 1) * Math.random());
        var blu = Math.floor((255 + 1) * Math.random());
        div.style.backgroundColor = "rgb(" + rosso.toString() + "," + verde.toString() + "," + blu.toString() + ")";
        btn.style.backgroundColor="rgb(" + rosso.toString() + "," + verde.toString() + "," + blu.toString() + ")";
        btn.style.fontSize=zindex+"px";
        wrapper.appendChild(div);
    }
}