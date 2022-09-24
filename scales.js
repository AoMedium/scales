var b = new Scale("b", 2);
var c = new Scale("c", 2);
var eb = new Scale("e-flat", 2);
var fs = new Scale("f#", 3);
var g = new Scale("g", 3);

var d3rd = new Scale("d", 2, false, "scale in thirds", "major");
var f3rd = new Scale("f", 3, false, "scale in thirds", "major");

var bchro = new Scale("on b", 2, false, "chromatic");
var cchro = new Scale("on c", 2, false, "chromatic");
var ebchro = new Scale("on e-flat", 2, false, "chromatic");
var fschro = new Scale("on f#", 3, false, "chromatic");
var gchro = new Scale("on g", 3, false, "chromatic");

var dbwhole = new Scale("on d-flat", 2, false, "whole-tone");
var ewhole = new Scale("on e", 3, false, "whole-tone");

// var aext = new Scale("a", 3, false, "extended range", "major");
// var eext = new Scale("e", 3, false, "extended range", "minor");

var edom = new Scale("e", 2, false, "dominant seventh");
var fdom = new Scale("f", 2, false, "dominant seventh");
var abdom = new Scale("a-flat", 2, false, "dominant seventh");
var bdom = new Scale("b", 3, false, "dominant seventh");
var cdom = new Scale("c", 3, false, "dominant seventh");

var bdim = new Scale("on b", 2, false, "diminished seventh");
var cdim = new Scale("on c", 2, false, "diminished seventh");
var ebdim = new Scale("on e-flat", 2, false, "diminished seventh");
var fsdim = new Scale("on f#", 3, false, "diminished seventh");
var gdim = new Scale("on g", 3, false, "diminished seventh");

var g6scales = [];

var g8scales = [
	b, c, eb, fs, g, 
	d3rd, f3rd, 
	bchro, cchro, ebchro, fschro, gchro,
	dbwhole, ewhole,
	edom, fdom, abdom, bdom, cdom,
	bdim, cdim, ebdim, fsdim, gdim
	];

var triadType = ["major", "minor"];
var type = ["harmonic", "melodic", "arpeggio"];
var type2 = ["scale", "arpeggio"]; //nonminor - inefficient
var articulation = ["staccato", "legato tongued", "slurred"];

Randomise(); //to ensure that all scales are defined