/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'TDF'

	Description: TDF is the border of the the duct

	Parameters:
		w - width of the duct
		h - height of the duct

*/
var BorderTDF = function(w, h){

	var	top_back,
			bottom_back,
			right_back,
			left_back,
			top_front,
			bottom_front,
			right_front,
			left_front,
			geometry,
			material,
			mesh,
			width,
			height;

	var x, y, z

	width = w;
	height = h;


	material = new THREE.MeshPhongMaterial( { color: 0xb5b5b5, specular: 0x000000, shininess: 0, shading: THREE.SmoothShading } );

	//Creates the bottom TDF on the back
	geometry = new THREE.BoxGeometry(width, 0.25, 0.10);
	bottom_back = new THREE.Mesh( geometry, material );
	bottom_back.position.x = width / 2;
	bottom_back.position.y = -0.12,5;
	bottom_back.position.z = 0.05;

	//Creates the right TDF on the back
	geometry = new THREE.BoxGeometry(0.25, height, 0.10);
	right_back = new THREE.Mesh( geometry, material );
	right_back.position.x = (width / -2) - 0.12,5;
	right_back.position.y = (height / 2) + 0.12,5;

	//Creates the left TDF on the back
	geometry = new THREE.BoxGeometry(0.25, height, 0.10);
	left_back = new THREE.Mesh( geometry, material );
	left_back.position.x = (width / 2) + 0.12,5;
	left_back.position.y = (height / 2) + 0.12,5;

	//Creates the top TDF on the back
	geometry = new THREE.BoxGeometry(width, 0.25, 0.10);
	top_back = new THREE.Mesh( geometry, material );
	top_back.position.x = 0;
	top_back.position.y = height + 0.25;

	bottom_back.add(right_back);
	bottom_back.add(left_back);
	bottom_back.add(top_back);



	//Creates the bottom TDF on the front
	geometry = new THREE.BoxGeometry(width, 0.25, 0.10);
	bottom_front = new THREE.Mesh( geometry, material );
	bottom_front.position.x = 0;
	bottom_front.position.y = 0;
	bottom_front.position.z = 10.90;

	//Creates the right TDF on the front
	geometry = new THREE.BoxGeometry(0.25, height, 0.10);
	right_front = new THREE.Mesh( geometry, material );
	right_front.position.x = (width / -2) - 0.12,5;
	right_front.position.y = (height / 2) + 0.12,5;

	//Creates the left TDF on the front
	geometry = new THREE.BoxGeometry(0.25, height, 0.10);
	left_front = new THREE.Mesh( geometry, material );
	left_front.position.x = (width / 2) + 0.12,5;
	left_front.position.y = (height / 2) + 0.12,5;

	//Creates the top TDF on the front
	geometry = new THREE.BoxGeometry(width, 0.25, 0.10);
	top_front = new THREE.Mesh( geometry, material );
	top_front.position.x = 0;
	top_front.position.y = height + 0.25;

	bottom_front.add(right_front);
	bottom_front.add(left_front);
	bottom_front.add(top_front);

	bottom_back.add(bottom_front);

	mesh = bottom_back;

	this.getMesh = function(){
		return mesh;
	};


	this.getWidth = function() {
		return width;
	};


	this.setWidth = function(width) {
		this.width = width;
	};


	this.getHeight = function() {
		return height;
	};


	this.setHeight = function(height) {
		this.height = height;
	};

};
