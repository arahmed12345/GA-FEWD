//console.log ("1 2 3");

  $("button").on("click", function() {
  	var temp = $("input#temperature").val();
 //	var far = $(temp * (9/5) + 32);
	$("span#converted").text((9/5)*temp+32);	
//	$("span#converted").text(far);	
//	console.log(far);
  });


//Questions: How can I reference far above? When I make fa .val() shows as an error later on with Obj Obj as the issue.

  //$("a#color-button").on("click", function() {
	//var red = $("input#red").val();
	//var green = $("input#green").val();
	//var blue = $("input#blue").val();
	//console.log(blue);

	//	$("p#colorful-text").text(rgb);
