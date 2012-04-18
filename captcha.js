document.write('<script type="text/javascript" src="http://crypto-js.googlecode.com/files/2.5.3-crypto-md5.js"></script>');


function get_randomColor() {
    var hex = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += hex[Math.round(Math.random() * 15)];
    }
	return color;
}

function get_randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var random_string = '';
	for (var i=0; i<string_length; i++) {
		var r_num = Math.floor(Math.random() * chars.length);
		random_string += chars.substring(r_num,r_num+1);
	}
	return random_string;
}

function drawString(cpcanvas, text, posX, posY, textColor, rotation, font, fontSize) {
	var lines = text.split("\n");
	if (!rotation) rotation = 0;
	if (!font) font = "'serif'";
	if (!fontSize) fontSize = 16;
	if (!textColor) textColor = '#000000';
	cpcanvas.save();
	cpcanvas.font = fontSize + "px " + font;
	cpcanvas.fillStyle = textColor;
	cpcanvas.translate(posX, posY);
	cpcanvas.rotate(rotation * Math.PI / 180);
	cpcanvas.shadowOffsetX=Math.random() *4;
	cpcanvas.shadowOffsetY=Math.random() *4;
	cpcanvas.shadowColor = get_randomColor();
	cpcanvas.shadowBlur=Math.random() *6;
		
	cpcanvas.fillText(lines[0],posX, posY);
		
//		for (i = 0; i < lines.length; i++) {
//			cpcanvas.fillText(lines[i],0, i*fontSize);
//		}
	cpcanvas.restore();

}

function drawArc(context,startX,startY,radius) {
	context.beginPath();
	context.arc(startX, startY, radius, 0, 2 * Math.PI, false);
	context.lineWidth = 1;
	context.strokeStyle = get_randomColor();
	context.stroke();
}

function drawSemiArc(context,startX,startY,radius) {
	context.beginPath();
	context.arc(startX, startY, radius, 0, Math.PI, false);
	context.closePath();
	context.lineWidth = 2;
	context.strokeStyle = get_randomColor();
	context.stroke();
}

function drawStrokeRect(context,startX,startY,width,height) {
	context.strokeStyle = get_randomColor();
	context.strokeRect(startX,startY,width,height);

}

function drawFillRect(context,startX,startY,width,height) {
	var randC= Math.ceil(Math.random()*255) ;
	context.fillStyle = "rgba(" + Math.ceil(Math.random()*255) + ", " + Math.ceil(Math.random()*255) + ", " + Math.ceil(Math.random()*255) + ", .2)";
	context.fillRect(startX,startY,width,height);
}


var digest;

function createCaptcha() {
	var canvas = document.getElementById("nb");
	var context = canvas.getContext("2d");
	
	var randstring=get_randomString();
	digest = Crypto.MD5(randstring);
	var stringX = 10 + Math.random() *30;
	var stringY = 20 + Math.random() *40;
	var rotation = Math.random() *30 ;
	
	drawString(context, randstring, stringX ,stringY, '#444',rotation,"Chalkduster",24);
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = Math.random() * 20 +50;
	
	
	
	var range = 200 ;
	
    for (var i = 0; i < 6; i++) {
    	var getShape=Math.ceil((Math.random() * 5));
    	if(getShape==1){
    		drawArc(context,Math.random() * stringX + radius, Math.random() * stringY + radius, radius);
    	}
    	else if (getShape==2) {
    		drawSemiArc(context,Math.random() * stringX + radius, Math.random() * stringY + radius, radius);
    	}
    	else if (getShape==3) {
    		drawStrokeRect(context,Math.random() * 10+ stringX, Math.random() * 20+ stringY, Math.random() * 100 +rotation, Math.random() * 100 + stringY);
    	}
    	else {
			drawFillRect(context,Math.random() * 10+ stringX, Math.random() * 20+ stringY, Math.random() * 100 +rotation, Math.random() * 100 + stringY);
    	}
	}
}

function compareCaptcha() {
	var captchaString = document.getElementById('captchaInput').value;
		
	var inputHash = Crypto.MD5(captchaString);
	if(inputHash == digest){
		alert("u got it buddy..");
	}
	else {
		alert("try another word");
	}
}

window.addEventListener("load", createCaptcha, false);