count = 0;

function init(){
	stage = new createjs.Stage("canvas");
	createjs.Ticker.addListener(this);
	createjs.Ticker.setFPS(30);
	resize();
	stage.addEventListener("stagemousedown", mouseDown);
	createjs.Touch.enable(stage,[singleTouch=true],[allowDefault=false]);
}

function tick(){
	animateBalls();
	stage.update();
	++count;
}

function animateBalls(){
	var balls = stage.getNumChildren();
	for(var i=balls-1;i>=0;i--){
		var ball = stage.getChildAt(i);
		
		ball.vY += 5;
		ball.vX *= 0.98;
		
		ball.x += ball.vX;
		ball.y += ball.vY;
		
		if(ball.y>ball.osby){
			ball.vY *= -0.8	;
			ball.y = ball.osby;
		}
		if(ball.x>=ball.osrx || ball.x<=ball.oslx){
			ball.vX *= -1;
		}
		if(count%5 === 0){
			ball.alpha -= 0.05;
		}
		if(ball.alpha < -0.1){
			stage.removeChildAt(i);
		}
	}
}

function drawBalls(x,y){
	for(i=0;i<50;++i){
		whiteball = new createjs.Shape();
		whiteball.graphics.beginFill("#FFFFFF").drawCircle(x,y,Math.floor((Math.random()*10)+1));
		whiteball.alpha = Math.random()*0.5+0.5;
		whiteball.compositeOperation = "lighter";
		
		whiteball.vX = (Math.random()*(-80))+40;
		whiteball.vY = (Math.random()*(-80))+40;
		
		whiteball.oslx = -x;
		whiteball.osrx = w-x;
		whiteball.osby = h-y;
		
		stage.addChild(whiteball);
	}
}

function mouseDown(evt){
	var x = evt.rawX;
	var y = evt.rawY;
	drawBalls(x,y);
}

function resize(){
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.width = w;
	canvas.height = h;
}

window.onresize = function(){
	resize();
}