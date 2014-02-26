$(document).ready(function(){
	$('#SwipeCarousel').hammer().on("dragright", function(event){
		$('#SwipeCarousel').carousel('prev');
	});

	$('#SwipeCarousel').hammer().on("dragleft", function(event){
		$('#SwipeCarousel').carousel('next');
	});
});