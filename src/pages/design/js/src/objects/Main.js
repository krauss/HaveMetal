//The main function is trigered as soon as the HTML document finishes loading
window.onload = main;

var camera,
	grid,
	axis,
	scene,
	renderer,
	duct,
	controlls,
	projector,
	ray,
	container,
	canvas,
	gl,
	mouse = {x: 0, y: 0};


function main(){
	init();
	animate();
};

function init(){
	//Detecta qual e o browser usado
	BrowserDetect.init();

	//Cria o renderer "WebGLRenderer"
	renderer = new WebGLRenderer();

	//Canvas and its responsive properties
	canvas = renderer.getRender();

	gl = canvas.getContext("webgl");

	//Add the canvas element to the HTML documet
	container = document.getElementById("div_drawArea");
	container.appendChild(canvas);

	//Create the scene
	scene = new THREE.Scene();

	//Add the camera into the scene
	camera = new Camera(canvas);
	scene.add(camera.getCamera());

	//Add the GridHelper into the scene
	grid = new THREE.GridHelper(100, 200);
	scene.add(grid);

	//Add the mouse controlls into the scene
	controlls = new Controlls( camera.getCamera(), canvas);

	//Add the AxisHelper into the scene
	axis = new THREE.AxisHelper(35);
	axis.name = "axis";
	scene.add(axis);

	//Add the lights into the scene
	var luzes = new Light();
	scene.add(luzes.getLight("x"));
	//scene.add(luzes.getLight("y"));
	scene.add(luzes.getLight("z"));

};

function animate() {
	resize(canvas);
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	requestAnimationFrame( animate );
	renderer.doRender(scene, camera.getCamera());
	controlls.updateControlls();
};

//Necessary method for the responsiveness feature works properly
function resize(canvas) {
  var realToCSSPixels = window.devicePixelRatio;

  // Lookup the size the browser is displaying the canvas in CSS pixels
  // and compute a size needed to make our drawingbuffer match it in
  // device pixels.
  var displayWidth  = Math.floor(canvas.clientWidth  * realToCSSPixels);
  var displayHeight = Math.floor(canvas.clientHeight * realToCSSPixels);

  // Check if the canvas is not the same size.
  if (canvas.width  !== displayWidth || canvas.height !== displayHeight) {

    // Make the canvas the same size
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
};


document.getElementById("bu_StraightDuct").onclick = addS_Duct;
document.getElementById("bu_RadiusDuct").onclick = addR_Duct;
document.getElementById("bu_TransictionDuct").onclick = addT_Duct;

function addS_Duct(){
	//if(ductType == "s"){
		//StraightDuct Test
		var obj = scene.getObjectByName("r_duct");
		scene.remove(obj);
		var obj = scene.getObjectByName("t_duct");
		scene.remove(obj);
		duct = new StraightDuct(7, 4);
		scene.add(duct.getMesh());
	//}
};

function addR_Duct(){
	//if(ductType == "s"){
		//StraightDuct Test
		var obj = scene.getObjectByName("s_duct");
		scene.remove(obj);
		var obj = scene.getObjectByName("t_duct");
		scene.remove(obj);
		duct = new RadiusDuct();
		scene.add(duct.getMesh());
	//}
};

function addT_Duct(){
	//if(ductType == "s"){
		//StraightDuct Test
		var obj = scene.getObjectByName("s_duct");
		scene.remove(obj);
		var obj = scene.getObjectByName("r_duct");
		scene.remove(obj);
		duct = new TransictionDuct();
		scene.add(duct.getMesh());
	//}
};
