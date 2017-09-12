/**
	Author: Jose Ricardo Krauss
	Email: jose.ricardo.k@gmail.com

	This class represents the entity 'Radius Duct'

	Description:

*/
var RadiusDuct = function(){

	var material = new THREE.MeshStandardMaterial( { color: 0xb3b3b3, emissive: 0x313131, roughness: 0.62, metalness: 0.88, side: THREE.DoubleSide } );
	var geometry = new THREE.RingGeometry( 2, 9, 32, 8, 0, 1.57 );

	var mesh_front = new THREE.Mesh( geometry, material );
	var mesh_back = new THREE.Mesh( geometry, material );
	mesh_back.position.z = -7;

	var group = new THREE.Group();
	group.add( mesh_front );
	group.add( mesh_back );

	group.name = "r_duct";

	this.getMesh = function(){
		return group;
	};

};
