/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'Controlls' of the scene

	Description: All the controlls related to the scene are managed by this entity

*/
var Controlls = function(camera, render){
	var controlls;

	//Add the mouse's controlls into the camera
	controlls = new THREE.TrackballControls( camera, render );
	controlls.rotateSpeed = 3.0;
	controlls.zoomSpeed = 0.2;
	controlls.panSpeed = 0.2;
	controlls.noZoom = false;
	controlls.noRotate = false;
	controlls.noPan = false;
	controlls.staticMoving = false;
	controlls.dynamicDampingFactor = 0.3;

	this.updateControlls = function(){
		controlls.update();
	};

	this.getWidth = function(){
		return controlls.screen.width;
	};

	this.getHeigth = function(){
		return controlls.screen.height;
	};

	this.resetControlls = function(){
		controlls.reset();
	};

	this.getPosition = function(side){
		switch(side){
			case "L":
				return controlls.screen.left;
				break;
			case "R":
				return controlls.screen.right;
				break;
			case "T":
				return controlls.screen.top;
				break;
			case "B":
				return controlls.screen.bottom;
				break;
			default:
				return null;
		}
	};
}
