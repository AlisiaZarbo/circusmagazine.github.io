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

function change_issue(sw) {
  var art1, art2, art3;
	if (sw == 1) {
		art1 = '1_1.html';
		art2 = '1_2.html';
		art3 = '1_3.html'
	  }
	if (sw == 2) {
		art1 = '2_1.html';
		art2 = '2_2.html';
		art3 = '2_3.html'
	}
	if (sw == 3) {
    art1 = '3_1.html';
	art2 = '3_2.html';
	art3 = '3_3.html'
  }
	  document.getElementById('artM').src = art1;
	  document.getElementById('artL1').src = art2;
	  document.getElementById('artL2').src = art3;
}

//function browse_issue(sw) tipo quella prima ma con scorrimento lista, forse col for loop
