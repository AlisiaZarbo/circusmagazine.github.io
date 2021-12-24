function change_css(style) {
	document.getElementById('css').href = style
	//setAttribute('href', style);
}

function change_css2(style) {
  var n_css;
  if (style == 0) {
    n_css = "assets\default.css"
  }
  if (style == 2) {
    n_css = "assets/css/1800.css"
  }
  if (style == 4) {
    n_css = "assets\1900-50.css"
  }  //else{
    //n_css = "abcd.css"
  //}
  document.getElementById('css').href = n_css;
}


$(document).ready(function(){
	$("#A1").click(function(){
    $(function(){
      $("#artM").load("1_1.html");
	$("#artL1").load("1_2.html");
	$("#artL2").load("1_3.html")
    });
});
 })

$(document).ready(function(){
	$("#A2").click(function(){
    $(function(){
      $("#artM").load("2_1.html");
	$("#artL1").load("2_2.html");
	$("#artL2").load("2_3.html")
    });
});
 })

$(document).ready(function(){
	$("#A3").click(function(){
    $(function(){
      $("#artM").load("3_1.html");
	$("#artL1").load("3_2.html");
	$("#artL2").load("3_3.html")
    });
});
 })
