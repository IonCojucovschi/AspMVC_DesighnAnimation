﻿function MoveDivHaos(){
   var x1,y1;
   var randomY=$("#containerAnm").height();
   var randomX=$("#containerAnm").width();
   var salter=true;

   console.log('starting infinite loop');

     x1=Math.floor((Math.random() * randomX) + 1);
     y1=Math.floor((Math.random() * randomY) + 1);
     $("#myobject").animate({marginTop:y1,marginLeft:x1},3000,MoveDivHaos);

 }

