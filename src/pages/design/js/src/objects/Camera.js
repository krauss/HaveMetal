/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'Camera' into the scene

	Description: This entity defines the viewport of the WebGL Render

*/
var Camera = function(canvas){

	var camera;

	camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 1000);
	camera.position.x = 55;
	camera.position.y = 12;
	camera.position.z = 45;

	this.getCamera = function(){
		return camera;
	};

	this.getPosition = function(){
		return camera.position;
	};

};
