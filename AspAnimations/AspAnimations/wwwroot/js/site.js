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