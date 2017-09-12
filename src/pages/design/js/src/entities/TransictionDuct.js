/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'Transiction Duct'

	Description:

*/
var TransictionDuct = function(){

	var radiusTop = 7;
	var radiusBottom = 4;
	var height = 6;
	var radiusSegments = 4;
	var heightSegments = 1;
	var openEnded = true;
	var thetaStart = 0;
	var thetaLength = 6.3;


	var material = new THREE.MeshStandardMaterial( { color: 0xb3b3b3, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: THREE.DoubleSide } );
	var geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded, thetaStart, thetaLength );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = height / 2;
	mesh.name = "t_duct";

	this.getMesh = function(){
		return mesh;
	};

};
