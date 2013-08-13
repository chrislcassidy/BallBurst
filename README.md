BallBurst
=========

An EaselJS Physics Toy
--------------

This repository contains all the files necessary to recreate the BallBurst toy that you can view here: http://chriscassidy.net/easeljs/ballburst

No setup necessary, just download the files and open in a web browser.

Here are the variables you may be interested in playing with (in script.js):

    //The number of balls. The 50 in the for loop is the number of balls
    function drawBalls(x,y){
	    for(i=0;i<50;++i)
	
    //The starting ball color/size/alpha
    whiteball.graphics.beginFill("#FFFFFF").drawCircle(x,y,Math.floor((Math.random()*10)+1));
    whiteball.alpha = Math.random()*0.5+0.5;
  
    //The starting X an Y velocities of the balls
    whiteball.vX = (Math.random()*(-80))+40;
    whiteball.vY = (Math.random()*(-80))+40;
  
    //The gravity (vY) and friction (vX) change per frame
    ball.vY += 5;
    ball.vX *= 0.98;
  
