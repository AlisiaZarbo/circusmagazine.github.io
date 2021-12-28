//copia Js per prove modifica su mainframe2//
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
		n_css = "assets/1900-50.css"
	}  //else{
	    //n_css = "abcd.css"
	  //}
	 document.getElementById('css').href = n_css;
}


$(document).ready(function(){
	$("#artM").load("1_1.html");
	$("#artL1").load("1_2.html");
	$("#artL2").load("1_3.html");
  })

function change_issue(issue) {
	var art1, art2, art3;
	if (issue == 1) {
		art1 = "1_1.html";
		art2 = "1_2.html";
		art3 = "1_3.html";
	  	}
	if (issue == 2) {
		art1 = "2_1.html";
		art2 = "2_2.html";
		art3 = "2_3.html";
		}
	if (issue == 3) {
		art1 = "3_1.html";
		art2 = "3_2.html";
		art3 = "3_3.html";
		}
	$("#artM").load(art1);
	$("#artL1").load(art2);
	$("#artL2").load(art3);
}

counter=0
function slide_articles(){
counter=counter+1;
if (counter==1) {
      $("#artM").load("1_2.html");
	$("#artL1").load("1_3.html");
	$("#artL2").load("1_1.html");
}
if (counter==2) {
    $("#artM").load("1_3.html");
	$("#artL1").load("1_1.html");
	$("#artL2").load("1_2.html");
}	
if (counter==3) {
   	$("#artM").load("1_1.html");
	$("#artL1").load("1_2.html");
	$("#artL2").load("1_3.html");
counter = 0;
}
}

function entities(){
	$(".entity").hide(); 
	$(".entity").show(); 
}

//function browse_issue(sw) tipo quella prima ma con scorrimento lista, forse col for loop


//$(document).ready(function(){
//	$("#I1").click(function(){
//    $(function(){
//      $("#artM").load("1_1.html");
//	$("#artL1").load("1_2.html");
//	$("#artL2").load("1_3.html")
//    });
//});
// })

//$(document).ready(function(){
//	$("#I2").click(function(){
//    $(function(){
//      $("#artM").load("2_1.html");
//	$("#artL1").load("2_2.html");
//	$("#artL2").load("2_3.html")
//    });
//});
// })

//$(document).ready(function(){
//	$("#I3").click(function(){
//    $(function(){
//      $("#artM").load("3_1.html");
//	$("#artL1").load("3_2.html");
//	$("#artL2").load("3_3.html")
//    });
//});
// })
