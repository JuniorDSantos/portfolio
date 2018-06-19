$().ready(function(){
	var href = location.href;
	var pathname = href.match(/([^\/]*)\/*$/)[1];

	$("#botao").click(function(){
		alert("Função não disponível no momento!");
	});

	$('a[href^="#"]').click(function(){
		$("html, body").animate({
			scrollTop: $( $.attr(this, "href")).offset().top
		}, 600);
		return false;
	});
	
	$('a[href^="'+pathname+'"]').css("background-color", "#454658");
	// if (pathname == "sobre.html") {
	// 	$(".sobre").css("background-color", "#454658");
	// }

	// if (pathname == "index.html") {
	// 	$(".inicio").css("background-color", "#454658");
	// }
	// if(pathname == "projeto.html"){
	// 	$(".projetos").css("background-color", "#454658");
	// }
	// if(pathname == "sobre.html"){
	// 	$(".sobre").css("background-color", "#454658");
	// }
	// if (pathname == "contato.html") {
	// 	$(".contato").css("background-color", "#454658");
	// }
	$("#top").click(function(){
        $("#top").animate({left: '940px'});
    });
});   
