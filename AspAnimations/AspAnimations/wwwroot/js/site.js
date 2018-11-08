// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$(function(){
   $("#loadAnim1").on("click",function(){

     $("#anim_container").empty();
     $(`<div id="startAnim1">Start</div>
        <div id="containerAnm" style="background:#d0f0f8;height:90%;width:90%;position:absolute;">
         <div id="myobject" style="border-radius: 50%;background:#000000;color:#ffffff;height:10px;width:10px;margin:0px;"><div>
        </div>`).appendTo("#anim_container");
        MoveDivHaos();
   });
   $("#loadAnim2").on("click",function(){

     $("#anim_container").empty();
     $(`<div id="startAnim1">Start</div>
        <div id="containerAnm" style="background:#d0f0f8;height:90%;width:90%;position:absolute;">
         <div id="myobject1" style="position:absolute;border-radius: 50%;background:#000000;color:#ffffff;height:10px;width:10px;margin:0px;"></div>
         <div id="myobject2" style="position:absolute;border-radius: 50%;background:#000000;color:#ffffff;height:10px;width:10px;margin:0px;"></div>
        </div>`).appendTo("#anim_container");
        MoveTwoPointHaos();
   });

    $("#loadAnim3").on("click",function(){
      init();
    });
});


///// animation for background content
$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#mainContent").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 65;
          var newvalueY = height * pageY * -1 - 100;
          $('#backgroundImage').css("background-position", newvalueX+"px     "+newvalueY+"px");
});

var flakes1 = [],
    canvas1 = $("#backgroundCanvas")[0],
    ctx1 = canvas1.getContext("2d"),
    flakeCount1 = 400,
    mX1 = -100,
    mY1 = -100

    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
debugger;
  for (var i = 0; i < flakeCount1; i++) {
        var x = Math.floor(Math.random() * canvas1.width),
            y = Math.floor(Math.random() * canvas1.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes1.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

function snow1() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

    for (var i = 0; i < flakeCount1; i++) {
        var flake = flakes1[i],
            x = mX1,
            y = mY1,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx1.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas1.height || flake.y <= 0) {
            reset1(flake);
        }


        if (flake.x >= canvas1.width || flake.x <= 0) {
            reset1(flake);
        }

        ctx1.beginPath();
        ctx1.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx1.fill();
    }
    requestAnimationFrame(snow1);
}

function reset1(flake) {
    flake.x = Math.floor(Math.random() * canvas1.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}


snow1();







});






