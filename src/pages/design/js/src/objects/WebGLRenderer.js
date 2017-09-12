/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'WebGL Renderer'

	Description: -

*/
var WebGLRenderer = function(){
	var renderer;

	//It creates the WebGL renderer
	renderer = new THREE.WebGLRenderer({antialias: true});
	//It sets the background color
	renderer.setClearColor(0xF7F7F7, 1);
	//somes properties to make the canvas responsive
	// renderer.domElement.setAttribute("width", "640px");
	renderer.domElement.setAttribute("height", "220px");
	renderer.domElement.setAttribute("display", "block");
	renderer.domElement.setAttribute("class", "eleven columns");


	this.getRender = function(){
		return renderer.domElement;
	};

	this.doRender = function(scene, camera){
		renderer.render(scene, camera);
	};

};
