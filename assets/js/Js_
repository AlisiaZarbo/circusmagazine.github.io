
//function to high_href() [working off-line with $(document).ready(function(){ not online]//
//function high_href(){//
//$(window).load(function(){//
//window.onload = function(){//
//function high_href(){//
$(document).ready(function(){
	$(".bib_note").click(function(){
		var target = $(this).attr("href");
		var source_id = $(this).attr("id");
		var source = document.getElementById(source_id);
		$(target).addClass('highlighted');
		$(target).click(function(){
			$(target).removeClass('highlighted');
			source.scrollIntoView();
		});
	});
})
