var code = "window.ActiveXObject = true;";
var script = document.createElement('script');
script.appendChild(document.createTextNode(code));
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);


const table = document.getElementsByTagName("table");

window.onload = function(){
    table[0].style.width = "1000px";
    table[0].style.margin = "0 auto";
    table[0].style.textAlign = "left";
    table[0].style.left = "50%";
};