(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();

var flakes = [],
    canvas = $("#canvas")[0],
    ctx = canvas.getContext("2d"),
    flakeCount = 400,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

/// dont forget to call this function to inialize canvas 
function InializeCanvas2()
{
    canvas = $("#canvas")[0];
    ctx = canvas.getContext("2d");
}




function Rotate()
{
   var flake={
    x:0,
    y:0,
    r:2,
    pi1:0,
    pi2:2 * Math.PI
   }   
   for(var i=0;1<800;i++)
   {
     var x=i;
     var y =50;
        ctx.beginPath();
        ctx.arc(x, y,20, 0, Math.PI * 2);
        ctx.fillStyle = "#cdcdcd";
        ctx.fill();
   }



}

//// requestAnimationFrame(snow);
function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}


canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
