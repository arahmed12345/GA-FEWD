    $("button").on("click", function() {
  	var age = $("input#age").val();
  	var max = $("input#max-age").val();
  	var daily = $("input#num-per-day").val();
  	var int = (max-age)*(365 * daily);
  	var toloco = int.toLocaleString();
  	$("span#solution").text(toloco);
  	var fav = $("#item").val();
  	$("#drink").text(fav);
  });
