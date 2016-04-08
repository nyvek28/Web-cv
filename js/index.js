
$.stellar();
$(".social").hover(function(){
	$(this).addClass("fa-3x");
	$(this).mouseout(function(){
		$(this).removeClass("fa-3x");
	});
	//alert("Hover");
});
$(".social").click(function(){
	var val = parseInt($(this).attr("value"));
	
	switch(val){

		case 1:
			window.location.assign("https://cr.linkedin.com/in/kevyn-quiros-6a7739112");
			break;

		case 2:
			window.location.assign("https://www.facebook.com/kevyn.quiros");
			break;

		case 3:
			window.location.assign("https://plus.google.com/u/0/104979355675300894209");
			break;

	}

	//alert("Hover");
});