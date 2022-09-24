 var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var activeMetronome = false;
var grade = 8

function Randomise() {
	switch (grade) {
		case 6:
			var thisScale = g6scales[Math.round(Math.random() * (g6scales.length - 1))];
		break;
		case 8:
			var thisScale = g8scales[Math.round(Math.random() * (g8scales.length - 1))];
		break;
	}
	

	if (thisScale.hasTriadTypes) {
		var thisTriadType = triadType[Math.round(Math.random() * (triadType.length - 1))];
	} else {
		var thisTriadType = thisScale.triadType;
	}

	if (thisTriadType == "minor") {
		var thisType = type[Math.round(Math.random() * (type.length - 1))];
	} else {
		var thisType = type2[Math.round(Math.random() * (type2.length - 1))];
	}
	
	var thisArtic = articulation[Math.round(Math.random() * (articulation.length - 1))];


	document.getElementById("scale").innerHTML = thisScale.tonic + " " + thisTriadType;

	if (thisScale.hasTriadTypes) {
		document.getElementById("type").innerHTML = thisType;
	} else {
		document.getElementById("type").innerHTML = thisScale.scaleType;
	}
	document.getElementById("articulation").innerHTML = thisArtic;
	document.getElementById("octaves").innerHTML = thisScale.octaves + " octaves";
}

function ToggleMetronome() {
	activeMetronome = !activeMetronome;

	if (activeMetronome) {
		
	}
}

function Scale(tonic, octaves, hasTriadTypes = true, scaleType, triadType = "") {
	this.tonic = tonic;
	this.octaves = octaves;
	this.hasTriadTypes = hasTriadTypes; //major and minor
	this.scaleType = scaleType; //diminished, scale in thirds, whole-tone
	this.triadType = triadType; //either major or minor
}

function ScaleType() {

}