// Miles DeCoster - codeforartists.com
// MakeKnob function to create turning knobs with different number ranges
// Each instance can be located on the canvas with the first two attributes
// The second two attributes set the hi and low range of the knob
// The last attribute sets the initial/default knob value
// To retrieve the current value use instanceName.knobValue
// There is also a display value which need not be the same as the knob value
// If you set up a button to return a value between 0 and 10 you could divide the result by 10 to 
// get a value between 0 and 1 and display that computed value. 
// The numPlaces attribute sets the number of decimal places in the display value - it does not affect the knobValue
// The Label will go below the value display
// Each knob instance will also need to be connected to some mouse or keyboard events in the main sketch
// using the "active" method below or some variation on it for keypresses
// Change knob size with the first paramater -- actually diameter but i called it radius
// (radius, location x, location y, lowest number, highest number, default setting, number of decimal places to display, text label)

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