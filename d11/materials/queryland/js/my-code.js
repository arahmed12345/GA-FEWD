//alert("Hello!");

//prompt("What should the title be?");

//var title=prompt("What do you want the title to be?")

//$("h1").text("title");

//$("button").on("click", function()) { //when someone clicks on the button then executes whatever may be in the function
//	var title=$("input").val();
//	$("h1").text(title);
//});
//console.log("Hello!");

// var title = prompt("What do you want the title to be?");

// $("h1").text(title);

$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
  $("h1").css("background-color", "yellow");
});

// $("p").css("color", "red");