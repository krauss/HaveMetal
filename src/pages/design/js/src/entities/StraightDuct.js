/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'StraightDuct'

	Description: A normal duct with default length measurement of 1145 cm

*/
var StraightDuct = function(width, height){

	var width = width;
	var height = height;
	var length = 11.4; //default measurement

	var geometry = new THREE.Geometry();

	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ), //0
		new THREE.Vector3( width, 0, 0 ), //1
		new THREE.Vector3( 0, 0, length ), //2
		new THREE.Vector3( 0, height, 0 ), //3
		new THREE.Vector3( width, height, 0 ),	//4
		new THREE.Vector3( 0, height, length ), //5
		new THREE.Vector3( width, height, length ), //6
		new THREE.Vector3( width, 0, length ) //7
	);

	geometry.faces.push(
		new THREE.Face3( 0, 1, 2 ),
		new THREE.Face3( 1, 2, 7 ),
		new THREE.Face3( 1, 7, 4 ),
		new THREE.Face3( 7, 4, 6 ),
		new THREE.Face3( 3, 4, 6 ),
		new THREE.Face3( 5, 3, 6 ),
		new THREE.Face3( 2, 3, 5 ),
		new THREE.Face3( 2, 0, 3 )
	);
	geometry.computeFaceNormals();

	var material = new THREE.MeshStandardMaterial( { color: 0xb3b3b3, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: THREE.DoubleSide } );
	var mesh = new THREE.Mesh(geometry, material );
	mesh.name = "s_duct";

	this.getMesh = function() {
		return mesh;
	};
}
