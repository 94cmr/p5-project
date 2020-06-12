//Carlos Iván Mata Rodríguez
//A01420165

var monoSynth;
var them = [];
var je , be;
var attackKnob, decayKnob;
var frameCounter = 0;
var boton1, boton2;

function setup() {

  createCanvas(windowWidth,windowHeight);

  attackKnob = new MakeKnob(60,width/18,170,10,1400,2020,0,"Attack",[255,0,0]);
  decayKnob = new MakeKnob(60,(width/18)*2,170,10,1400,2020,0,"Decay",[120,70,0]);
  distknob1 = new MakeKnob(60,(width/18)*14,170,10,1400,2020,0,"Parameter 1",[120,150,0]);
  distknob2 = new MakeKnob(60,(width/18)*16,170,10,1400,2020,0,"Parameter 2",[80,190,0]);

  distortion = new p5.Distortion();



  monoSynth = new p5.MonoSynth();


  buton2 = createButton('Distortion Off');
  buton1 = createButton('Distorsion On');
  buton1.position((width/5)*4,80);
  buton2.position((width/5)*4,100);

buton1.mousePressed(dist1);
buton2.mousePressed(dist2);

monoSynth.amp(0.85);
distortion.amp(0.35);


}

function draw() {

  fill(120,0,20);
  background(120, je, be);
  attackKnob.update();
  decayKnob.update();
  distknob1.update();
  distknob2.update();

  textSize(32);
  fill(0);
  text('Distortion', (width/18)*15,30);

  textSize(32);
  fill(0);
  text('Envelope', (width/18)*1.5,30);


  attackKnob.displayValue = attackKnob.knobValue/300;
  decayKnob.displayValue = decayKnob.knobValue/300;
  distknob1.displayValue = distknob1.knobValue/550;
  distknob2.displayValue = distknob2.knobValue/750;



	for(var i = 0; i < them.length; i++){
		them[i].draw();
		if(them[i].isDead){
			them.splice(i, 1);
		}

	}

  monoSynth.setADSR(attackKnob.knobValue/300,
    decayKnob.knobValue/300,1,1);
    distortion.drywet(sin(frameCount*(distknob1.knobValue/550))*0.1+(distknob2.knobValue/950))



	}

  function dist1(){

    monoSynth.connect(distortion);
  }

  function dist2(){
    monoSynth.disconnect(distortion);
    monoSynth.connect();

  }

  function mousePressed(){
  attackKnob.active();
  decayKnob.active();
  distknob1.active();
  distknob2.active();


  attackKnob.myY=mouseY;
  decayKnob.myY=mouseY;
  distknob1.myY=mouseY;
  distknob2.myY=mouseY;


  }

  function mouseReleased(){
  attackKnob.currentRot = attackKnob.rotateMe;
  decayKnob.currentRot = decayKnob.rotateMe;
  distknob1.currentRot = distknob1.rotateMe;
  distknob2.currentRot = distknob2.rotateMe;


  }


function keyPressed(){
if (key === 'a'){

monoSynth.triggerAttack("C4");


var temp = new Pakito(width/17, 20,
  (mouseX-pmouseX), (mouseY-pmouseY))

them.push(temp);
je = random(240,255);
be = random(240,255);

}

if (key === 's'){

  var temp = new Pakito((width/17)*2, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);

  je = random(225,240);
  be = random(225,240);


monoSynth.triggerAttack("D4");

}

if (key === 'd'){
  var temp = new Pakito((width/17)*3, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(210,225);
  be = random(210,225);

monoSynth.triggerAttack("E4");
}

if (key === 'w'){
  var temp = new Pakito((width/17)*3, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(195,210);
  be = random(195,210);

monoSynth.triggerAttack("C#4");
}
if (key === 'e'){
  var temp = new Pakito((width/17)*4, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(180,195);
  be = random(180,195);

monoSynth.triggerAttack("D#4");
}
if (key === 'f'){

  var temp = new Pakito((width/17)*5, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(165,180);
  be = random(165,180);

monoSynth.triggerAttack("F4");
}
if (key === 't'){

  var temp = new Pakito((width/17)*6, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(150,165);
  be = random(150,165);

monoSynth.triggerAttack("F#4");
}
if (key === 'g'){

  var temp = new Pakito((width/17)*7, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(135,150);
  be = random(135,150);
monoSynth.triggerAttack("G4");
}
if (key === 'y'){
  var temp = new Pakito((width/17)*8, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(120,135);
  be = random(120,135);

monoSynth.triggerAttack("G#4");
}
if (key === 'h'){
  var temp = new Pakito((width/17)*9, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(105,120);
  be = random(105,120);
monoSynth.triggerAttack("A5");
}
if (key === 'u'){
  var temp = new Pakito((width/17)*10, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(90,105);
monoSynth.triggerAttack("A#5");
}
if (key === 'j'){
  var temp = new Pakito((width/17)*11, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(75,90);
  be = random(75,90);
monoSynth.triggerAttack("B5");
}
if (key === 'k'){
  var temp = new Pakito((width/17)*12, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(60,75);
  be = random(60,75);
monoSynth.triggerAttack("C5");
}
if (key === 'l'){
  var temp = new Pakito((width/17)*13, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(45,60);
  be = random(45,60);

monoSynth.triggerAttack("D5");
}
if (key === 'o'){
  var temp = new Pakito((width/17)*14, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(30,45);
  be = random(30,45);

monoSynth.triggerAttack("C#5");
}
if (key === 'p'){
  var temp = new Pakito((width/17)*15, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);
  je = random(15,30);
  be = random(15,30);
monoSynth.triggerAttack("D#5");
}
if (key === 'ñ'){
  var temp = new Pakito((width/17)*16, 20,
    (mouseX-pmouseX), (mouseY-pmouseY))

  them.push(temp);

  je = random(0,15);
  be = random(0,15);
monoSynth.triggerAttack("E5");
}


}

function keyReleased(){
  if (key === 'a'){
  monoSynth.triggerRelease();

  }
  if (key === 's'){
  monoSynth.triggerRelease();

  }
  if (key === 'w'){
  monoSynth.triggerRelease();

  }
  if (key === 'e'){
  monoSynth.triggerRelease();

  }
  if (key === 'd'){
  monoSynth.triggerRelease();

  }
  if (key === 'f'){
  monoSynth.triggerRelease();

  }

  if (key === 't'){
  monoSynth.triggerRelease();

  }
  if (key === 'g'){
  monoSynth.triggerRelease();

  }
  if (key === 'y'){
  monoSynth.triggerRelease();

  }
  if (key === 'h'){
  monoSynth.triggerRelease();

  }
  if (key === 'u'){
  monoSynth.triggerRelease();

  }
  if (key === 'j'){
  monoSynth.triggerRelease();

  }
  if (key === 'k'){
  monoSynth.triggerRelease();

  }
  if (key === 'o'){
  monoSynth.triggerRelease();

  }
  if (key === 'l'){
  monoSynth.triggerRelease();

  }
  if (key === 'p'){
  monoSynth.triggerRelease();

  }
  if (key === 'ñ'){
  monoSynth.triggerRelease();

  }
}


class Pakito{
	//-------------------------------------------
	constructor(_x, _y, ivx, ivy, _freq){
		this.px = _x;
		this.py = _y;
		this.radio = random(10,60);
		this.r = 105;
		this.g = random(50,255);
		this.b = random(25,255);
		this.velx = ivx;
		this.vely = ivy;
		this.accx = 0;
		this.accy = -0.98;
		this.friction = 0.98;

	}


	//-------------------------------------------
	draw(){
		fill(this.r, this.g, this.b);
		noStroke();
		ellipse(this.px, (windowHeight/1.05)+this.py, this.radio+this.py);
		this.update();
	}
	//-------------------------------------------
	update(){
		this.velx += this.accx;
		this.vely += this.accy;
		this.velx *= this.friction;
		this.vely *= this.friction;
		this.px += this.velx;
		this.py += this.vely;
		this.trumpsWall();
	}

	//-------------------------------------------
	trumpsWall(){
		if((this.px+this.radio) > width){
			this.px = width-this.radio;
			this.velx *= -1;
			if(abs(this.velx) > 1){

			} else {
        this.isDead = true;
      }
		}
		if((this.px-this.radio) < 0){
			this.px = this.radio;
			this.velx *= -1;
			if(abs(this.velx) > 1){

			}else {
        this.isDead = true;
      }
		}




	}

}






function MakeKnob(radius, locx, locy, lowNum, hiNum, defaultNum, numPlaces, label, knobcolor) {
  this.pos = createVector(0,0);
  this.pos.x = locx;
  this.pos.y = locy;
  this.lowNum = lowNum;
  this.hiNum = hiNum;
  this.rotateMe = map(defaultNum, lowNum, hiNum, 145, -145);
  this.currentRot = map(defaultNum, lowNum, hiNum, 145, -145);
  this.radius = radius;
  this.knobValue = defaultNum;
  this.displayValue=0;
  this.isClickedOn = false;
  this.myY;
  this.label=label;
  this.numPlaces = numPlaces;
  this.knobColor=knobcolor;

  this.update = function() {
   push();

	// move the origin to the pivot point
	translate(this.pos.x, this.pos.y);

	// then rotate the grid around the pivot point by a
	// number of degrees based on drag on button
	if (mouseIsPressed && this.isClickedOn) {

	  this.rotateMe=this.currentRot+map(mouseY, this.myY, 600, 0, 360);
	  this.rotateMe=int(this.rotateMe);
	    if (-this.rotateMe > 145 && this.rotateMe < 0) {
	      this.rotateMe = -145;
	    }
	    if (this.rotateMe > 145 && this.rotateMe > 0) {
	      this.rotateMe = 145;
	    }

	  rotate(radians(-this.rotateMe));
	  //console.log(rotateMe);

	} else {
	  rotate(radians(-this.rotateMe));
	}

	//
	fill(200);
	ellipse(0, 0, this.radius, this.radius);
	fill(this.knobColor);
	ellipse(0, 0, this.radius-5, this.radius-5);
	fill(100);
	ellipse(0,0,this.radius/2,this.radius/2);
	fill(180);
	ellipse(0,0,(this.radius/2)-5,(this.radius/2)-5);
	fill(255);
	ellipse(0, -this.radius*.4, this.radius/10,this.radius/10);
	fill(0);
	pop();
	rotate(0);
	textAlign(CENTER);
	this.knobValue=map(this.rotateMe, -145, 145, hiNum, lowNum);
	textSize(18);
	//text(""+this.knobValue, this.pos.x, this.pos.y+70); // this would show the actual value for testing purposes
	fill(200);
	text(""+ nfc(this.displayValue, numPlaces), this.pos.x, this.pos.y+75); // display value to 2 decimal places
	fill(0);
	text(this.label, this.pos.x, this.pos.y+100)
  }

  this.active = function() {
    if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < this.radius){
      this.isClickedOn = true;
    } else {
      this.isClickedOn = false;
    }
  }


}
