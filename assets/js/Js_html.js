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
	$("#artM").load("art1");
	$("#artL1").load("art2");
	$("#artL2").load("art3");
	}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

//function browse_issue(sw) tipo quella prima ma con scorrimento lista, forse col for loop
