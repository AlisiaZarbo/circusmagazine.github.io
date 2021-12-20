$(document).ready(function(){
	var inner;
	inner = '<!doctype html><html lang="es"><head><title>1.2 El lugar de la diferencia en Chile: circo y transformismo. El caso del Circo Timoteo</title></head><body><div class="title_art"><h2>El lugar de la diferencia en Chile: circo y transformismo. El caso del Circo Timoteo</h2></div><div class="maincontent"><div id="sec_00"><h3>Introducción al rol del transformista en el circo criollo chileno</h3><p>El lugar de la diferencia en el contexto chileno ha sido escaso y marginal, pero ha encontrado un curioso refugio en el mundo del circo<sup><a href="#Nota1">1</a></sup>. El caso del transformismo en el circo, en el denominado «subgénero del circo <i>show</i>», es un excelente ejemplo para demostrar el espacio carismático y popular que adquiere el transformista en una sociedad tradicionalmente formal. Esta ambivalencia se produce frente a la complejidad de los discursos y se ha denominado usualmente «doble estándar» chileno. El circo permite la legitimación del transformismo desde su espacio marginal de libertad respecto del modelo tradicional formal.</p><p>El artículo se presenta como un ensayo analítico-interpretativo cuyo objetivo principal es intentar entender los motivos de la aparición y el rol que desempeñan los transformistas en el circo <i>show</i> chileno, a partir del caso emblemático del circo show <span class="entity place" about="Circo Timoteo" data-sort="CircoTimoteo" data-label="Circo Timoteo">Circo Timoteo</span>. En un contexto formal tradicional como el chileno, cuesta entender el gran apoyo popular de este tipo de espectáculos que incluye los públicos de las edades más variadas, desde niños hasta adultos mayores, tanto hombres como mujeres, así como de ámbitos tanto rurales como de barrio. La popularidad especial del <span class="entity organization" about="Circo Timoteo" data-sort="CircoTimoteo" data-label="Circo Timoteo">Circo Timoteo</span> lo ha convertido en un referente a escala nacional y ello ha dado pie a una proliferación de circos más chicos que se han especializado en este subgénero o han incluido transformistas en algunos de sus espectáculos. El <span class="entity organization" about="Circo Timoteo" data-sort="CircoTimoteo" data-label="Circo Timoteo">Circo Timoteo</span> se caracteriza por implementar una serie de rutinas, establecidas íntegramente con espectáculos de transformistas, que van desde números musicales hasta parodias. Además, la larga tradición de este tipo de espectáculos, junto con su gran receptividad, llevó a realizar una investigación de carácter exploratorio para indagar sobre los motivos profundos de su existencia y su razón de ser, lo cual condujo a adentrarse a estudiar, por un lado, la evolución tanto del mundo del circo, como del transformismo en <span class="entity place country" about="Chile" data-sort="Chile" data-label="Chile">Chile</span>, y, por otro lado, analizar los factores de su éxito, a partir de un análisis profundo de los roles sociales y sexuales desde una perspectiva más culturalista.</p>(figura 1).</p><img src="..\img\1.2\1_1.2.png" width="100%" alt="fig. 1 La configuración criolla del humor y del género en Chile" class="img-fluid"><caption>Figura 1. La configuración criolla del humor y del género en Chile. Fuente: elaboración propia a partir de Arango et al., 1995.</caption></div></body></html>'
	$("#A1").click(function(){
		$("#artM").html(inner);
	});
		$("#A2").click(function(){
    $.get('1_3.html', function(result){
        var addfile = $(result).find('html');
        $(this).append($('#artL2').addfile.html());
    });
	});
})
