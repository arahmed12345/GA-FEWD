//$("#color-button").on("click", function() {
//  var red = $("#red").val();
//  var green = $("#green").val();
//  var blue = $("#blue").val();
//  $("body").css("background-color", "rgb("+red+","+blue+","+green+")");
//});

console.log("is this working?");

$("a#color-button").on("click", function() {
	var red = $("input#red").val();
	var green = $("input#green").val();
	var blue = $("input#blue").val();
	console.log(blue);
	
	var rgb = "rgb("+ red + "," + green + "," + blue + ")";
	console.log(rgb);

	$("#wrapper").css("background-color", rgb);
	$("p#colorful-text").text(rgb);
});