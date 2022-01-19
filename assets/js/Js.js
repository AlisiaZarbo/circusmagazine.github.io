//copia Js2021-01-19 prova pre-def//

//function change_css//
function change_css(style) {
	document.getElementById('css').href = style
	}

//function load default article in the IssuesViewer page//
$(document).ready(function(){
	change_issue(1)
	})

//function change_issue//
function change_issue(issue) {
	issue_id = 'I' + issue;
	art1 = issue + '_1.html';
	art2 = issue + '_2.html';
	art3 = issue + '_3.html';
	$("#artM").load(art1);
	$("#artL1").load(art2);
	$("#artL2").load(art3);
	document.getElementById("issue_title").innerHTML = document.getElementById(issue_id).innerText;
	if (issue == 1) {
		metadata_issue = '<h6 id="main_art_title" title="Bolognesi, Mario Fernando. From the Fair Theatre to the Modern Circus. Revista Brasileira de Estudos da Presença 10 (2020). https://doi.org/10.1590/2237-266093237">1.1 From the Fair Theatre to the Modern Circus</h6><p id="main_art_url"><a href="https://www.scielo.br/j/rbep/a/P6MCRbbMS8srQCcqFMhDcRv/?lang=en target="_blank">original version</a></p><h6 id="guest_art_title" title="Miternique, Hugo Capellà. El lloc de la diferència a Xile: circ i transformisme. El cas del Circo Timoteo. Documents d anàlisi geogràfica 58.3 (2012): 351-372. https://raco.cat/index.php/DocumentsAnalisi/article/view/259380">1.2 El lugar de la diferencia en Chile: circo y transformismo. El caso del Circo Timoteo</h6><p id="guest_art_url"><a href="https://raco.cat/index.php/DocumentsAnalisi/article/view/259380/346596" target="_blank">original version</a></p><h6 id="rev_art_title" title="Tsakona, Villy. Book review: Bouissac, Paul (2015). The Semiotics of Clowns and Clowning: Rituals of Transgression and the Theory of Laughter. Blomsbury Advances in Semiotics. London: Bloomsbury, 218 pp. The European Journal of Humour Research 4.1 (2016): 122-125. https://europeanjournalofhumour.org/ejhr/article/view/126">1.3 Book review: Bouissac, Paul (2015). The Semiotics of Clowns and Clowning: Rituals of Transgression and the Theory of Laughter</h6><p id="rev_art_url"><a href="https://europeanjournalofhumour.org/ejhr/article/view/126" target="_blank">original version</a></p>';
		}
	if (issue == 2) {
		metadata_issue = '<h6 id="main_art_title" title="Abad Vila, M. La Parada De Los Monstruos. Freaks (1932): Dismorfismos, Solidaridad Y Venganza. Revista De Medicina Y Cine, vol. 4, n. 2, julio de 2008, pp. 58-65, https://revistas.usal.es/index.php/medicina_y_cine/article/view/68">2.1 Freaks (1932): Dysmorphisms, Solidarity and Revenge</h6><p id="main_art_url"><a href="https://revistas.usal.es/index.php/medicina_y_cine/article/view/68" target="_blank">original version</a></p><h6 id="guest_art_title" title="Pisu, G., e I. Coni. Esperienze Musicali Nel Circo Paniko. Medea, Vol. 6, n. 1, Dec. 2020, https://doi.org/10.13125/medea-4388 ">2.2 Esperienze musicali nel Circo Paniko</h6><p id="guest_art_url"><a href="https://doi.org/10.13125/medea-4388" target="_blank">original version</a></p><h6 id="rev_art_title" title="Book Review – The Circus as a Parallel Universe. We-Make-Money-Not-Art.com, 16 Aug. 2012. https://we-make-money-not-art.com/">2.3 Book review - The Circus as a Parallel Universe</h6><p id="rev_art_url"><a href="https://we-make-money-not-art.com/the_circus_as_a_parallel_unive/" target="_blank">original version</a></p>';		
		}
	if (issue == 3) {
		metadata_issue = '<h6 id="main_art_title" title="Van Es, Vera, Els Rommes, and Leontien De Kwaadsteniet. Building resilience by becoming a circus artist. Journal of Refugee Studies 34.1 (2021): 760-786. https://doi.org/10.1093/jrs/fez091">3.1 Building Resilience by Becoming a Circus Artist</h6><p id="main_art_url"><a href="https://doi.org/10.1093/jrs/fez091" target="_blank">original version</a></p><h6 id="guest_art_title" title="Coasne, Joëlle, and Monique Loquet. Enseigner les arts du cirque au collège: une dévolution artistique. eJRIEPS. Ejournal de la recherche sur l’intervention en éducation physique et sport 36 (2015). https://doi.org/10.4000/ejrieps.1362">3.2 Enseigner les arts du cirque au collège: une dévolution artistique</h6><p id="guest_art_url"><a href="https://journals.openedition.org/ejrieps/1362?lang=en" target="_blank">original version</a></p><h6 id="rev_art_title" title="Kiley-Worthington, Marthe. The Welfare of Performing Animals. A Historical Perspective. By David AH Wilson. Springer: Berlin, Germany, 2015; 278 pp; $189.00; ISBN 978-3-662-50931-9. (2016): 76. https://doi.org/10.3390/ani6110076">3.3 The Welfare of Performing Animals. A Historical Perspective</h6><p id="rev_art_url"><a href="https://doi.org/10.3390/ani6110076" target="_blank">original version</a></p>';
		}
	document.getElementById("issue_metadata").innerHTML = metadata_issue;
	document.getElementById("main_art_title").classList.add("highlighted");
	document.getElementById("main_art_url").classList.add("highlighted");
	}
	
//function slide_articles() in an issue//
counter=0
function slide_articles(){
	counter=counter+1;
	if (counter==1) {
		$("#artM").load(art2);
		$("#artL1").load(art3);
		$("#artL2").load(art1);
		document.getElementById("main_art_title").classList.remove("highlighted");
		document.getElementById("main_art_url").classList.remove("highlighted");
		document.getElementById("guest_art_title").classList.add("highlighted");
		document.getElementById("guest_art_url").classList.add("highlighted");
		}
	if (counter==2) {
		$("#artM").load(art3);
		$("#artL1").load(art1);
		$("#artL2").load(art2);
		document.getElementById("guest_art_title").classList.remove("highlighted");
		document.getElementById("guest_art_url").classList.remove("highlighted");
		document.getElementById("rev_art_title").classList.add("highlighted");
		document.getElementById("rev_art_url").classList.add("highlighted");
		}	
	if (counter==3) {
		$("#artM").load(art1);
		$("#artL1").load(art2);
		$("#artL2").load(art3);
		counter = 0;
		document.getElementById("rev_art_title").classList.remove("highlighted");
		document.getElementById("rev_art_url").classList.remove("highlighted");
		document.getElementById("main_art_title").classList.add("highlighted");
		document.getElementById("main_art_url").classList.add("highlighted");
		}
	}

//function MetaDataViewer//
function MDV(selection){
	if (selection == 1){
		classname="entity person";
		id = "PE"};
	if (selection == 2){
		classname="entity place";
		id = "PL"};
	if (selection == 3){
		classname="entity keyword";
		id = "KW"};
	if (selection == 4){
		classname="entity organization";
		id = "OR"};
	var myarray = Array.from(document.getElementsByClassName(classname));
	var array_label = [];
	for (let i = 0; i < myarray.length; i++) {
		if (myarray[i].hasAttribute("data-active")){
			array_label.push(myarray[i].getAttribute("data-label"));
			}
		}
	array_label.sort();
	let text = "";
	for (let i = 0; i < array_label.length; i++) {
		text += '<button class="dropdown-item w3-button" onclick="openPopUp(this)">' + array_label[i] + '</button>'
		}
	document.getElementById(id).innerHTML = text;
	}

//set a global variable with all the entities to be recalled if needed//
var all_entities = document.getElementsByClassName("entity")

//function openPopUp//
function openPopUp(el){
	(Array.from(all_entities)).forEach(entity => entity.classList.remove("highlighted", "highlighted_more"));
	var clicked_entity = [];
	let label = el.innerText;
	clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	clicked_entity.forEach(entity => entity.classList.add("highlighted"));
	(clicked_entity.at(0)).classList.add("highlighted_more");
	(clicked_entity.at(0)).scrollIntoView();
	//item_with_data = clicked_entity.filter(entity => entity.hasAttribute("data-active"));
	//if (item_with_data[0].hasAttribute("data-wikidata-id")) {
	if (clicked_entity.at(0).hasAttribute("data-wikidata-id")) {
		wikidataID = clicked_entity.at(0).getAttribute("data-wikidata-id");
		document.getElementById("PopUpWikidata").innerHTML = "https://www.wikidata.org/wiki/" + wikidataID;
		document.getElementById("PopUpWikidata").href = "https://www.wikidata.org/wiki/" + wikidataID;
		document.getElementById("WikidataIntro").style.display="block";
		}
	else {
		document.getElementById("WikidataIntro").style.display="none"
		}
	document.getElementById("PopUpHeader").innerHTML = label;
	document.getElementById("counter_occurrencies").innerText = 1;
	document.getElementById("tot_occurrencies").innerText = clicked_entity.length;
	document.getElementById("MOD_01").style.display="block";

	//sub functions to DragOpenPopUp//
	dragElement(document.getElementById("MOD_01"));
	function dragElement(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  	if (document.getElementById(elmnt.id + "header")) {
	    		/* if present, the header is where you move the DIV from:*/
	    		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
			} 
		else {
	    		/* otherwise, move the DIV from anywhere inside the DIV:*/
	    		elmnt.onmousedown = dragMouseDown;
			}
		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
			}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		  	}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		  	}
		}	
	}

//function to slides entities occurencies//
slide = 0
function slide_clicked_entity(go){
	let label = document.getElementById("PopUpHeader").innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	if (clicked_entity.length <= 1) {
		slide = 0
		}
	else {
		if (go == 1) {
			slide = slide+1;
			(clicked_entity.at(slide-1)).classList.remove("highlighted_more");
			};
		if (go == -1) {
			slide = slide-1;
			(clicked_entity.at(slide+1)).classList.remove("highlighted_more");
			};
		if (Math.abs(slide) == clicked_entity.length)  {
			slide = 0
			}
		}
	(clicked_entity.at(slide)).classList.add("highlighted_more");
	(clicked_entity.at(slide)).scrollIntoView();
	if (slide >= 0) {
			entity_counter=slide+1
			}
	else {
			entity_counter=clicked_entity.length+slide+1
		}
	document.getElementById("counter_occurrencies").innerText = entity_counter;
	}

//function closePopUp()//
function closePopUp(){
	document.getElementById('MOD_01').style.display='none';
	let label = document.getElementById("PopUpHeader").innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	clicked_entity.forEach(entity => entity.classList.remove("highlighted", "highlighted_more"));
	}

//TOGLIERE.function to high_href() [working off-line with $(document).ready(function(){ not online]//
/*$(".bib_note").click(function(){
		var target = $(this).attr("href");
		var source_id = $(this).attr("id");
		var source = document.getElementById(source_id);
		$(target).addClass('highlighted');
		$(target).click(function(){
			$(target).removeClass('highlighted');
			source.scrollIntoView();
		});
	})*/

//function drag//
//function high_href(){//
//$(window).load(function(){//
//window.onload = function(){//
//function high_href(){//
//$(document).ready(function(){//

//function to hide/show entities [not working]//
//function entities(){//
//	$(".entity").hide(); 
//	$(".entity").show(); 
//}


// function to set on resize the client w/h to window w/h [elements w/ position absolute/fixed and responsive measurement units needed]
document.addEventListener("resize", myRes)
function myRes() {
	var w = window.outerWidth;
  	var h = window.outerHeight;
  	if (document.documentElement.clientWidth != w ||
  	document.documentElement.clientHeight != h) {
  		document.documentElement.clientWidth = w;
  		document.documentElement.clientHeight = h;
		}
	};
