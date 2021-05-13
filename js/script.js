$(document).ready(function(){

  function custom(event){
  var el = document.getElementById("hov");
  el.style.top = event.clientY + "px";
  el.style.left = event.clientX + "px";
    }

document.getElementById("main").addEventListener('mousemove', custom);


})
