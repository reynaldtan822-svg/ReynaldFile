const btn = document.getElementById("downloadBtn");
const status = document.getElementById("status");

btn.onclick = function(){

status.innerHTML = "Preparing download...";

btn.disabled = true;

setTimeout(function(){

window.location.href = "files/ReytexInjector.apk";

status.innerHTML = "Download started.";

btn.disabled = false;

},2000);

};
