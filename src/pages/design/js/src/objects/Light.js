
var Light = function(){
	var targ, lightX, lightY, lightZ;
	
	
	//Light on X axel
	lightX = new THREE.DirectionalLight(0xffffff, 1.0);
	lightX.position.set(32,0,0);
	lightX.name = "lightX";
	
	
	//Light on Y axel
	lightY = new THREE.DirectionalLight(0xffffff, 1.0);
	lightY.position.set(0,32,0);
	lightY.name = "lightY";
	
	
	//Light on Z axel
	lightZ = new THREE.DirectionalLight(0xffffff, 1.0);
	lightZ.position.set(0,0,32);
	lightZ.name = "lightZ";
	
		
	targ = new THREE.Object3D();
	targ.position.set(0,0,0);
	targ.name = "target";
	lightX.target = targ;
	lightY.target = targ;
	lightZ.target = targ;
	
	this.getLight= function(direction){
		if(direction == "x"){
			return lightX;
		}else if(direction == "y"){
			return lightY;
		}else if(direction == "z"){
			return lightZ;
		}
	};	
	
}	