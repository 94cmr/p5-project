//-------------------------------------------
class Pakito{
	//-------------------------------------------
	constructor(_x, _y, ivx, ivy, _freq){
		this.px = _x;
		this.py = _y;
		this.radio = 20;
		this.r = 70;
		this.g = 120;
		this.b = 190;
    this.freq = _freq;
		this.velx = ivx;
		this.vely = ivy;
		this.accx = 0;
		this.accy = 0.98;
		this.friction = 0.98;

	}


	//-------------------------------------------
	draw(){
		fill(this.r, this.g, this.b);
		noStroke();
		ellipse(this.px, this.py, this.radio);
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
        this.env.play();
			} else {
        this.isDead = true;
      }
		}
		if((this.px-this.radio) < 0){
			this.px = this.radio;
			this.velx *= -1;
			if(abs(this.velx) > 1){
        this.env.play();
			}else {
        this.isDead = true;
      }
		}
		if((this.py+this.radio) > height){
			this.py = (height-this.radio);
			this.vely *= -1;
			if(abs(this.vely) > 1){

			}else {
        this.isDead = true;
      }
		}
		if((this.py-this.radio) < 0){
			this.py = this.radio;
			this.vely *= -1;
			if(abs(this.velx) > 1){
			}else {
        this.isDead = true;
      }
		}


	}

}
