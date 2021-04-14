$(document).ready(function(){
	
	$(".navbar-light .navbar-nav .nav-item").on("click" , function(){
		
		$(this).addClass('active').siblings().removeClass('active')
		
	});
	
//#######################################

	var widH = $(window).height(),
	
	    navH = $(".navbar").innerHeight();
		
	$(".slider .carousel-item").height(widH - navH);
	
	$(window).on("resize" , function(){
		
		var widH = $(window).height(),
		
	    navH = $(".navbar").innerHeight();
		
	$(".slider .carousel-item").height(widH - navH)
	
	});
	
//#######################################

	$(".work .hed ul li").on("click" , function(){
		
		$(this).addClass("active").siblings().removeClass('active');
		
		if ($(this).data('class') === 'all'){
		
		$('.work .image-box1 div .image1').css('opacity','1')
		
	}else{
		
		$('.work .image-box1 div .image1').css('opacity','0.08');
		
		$($(this).data('class')).css('opacity','1')
	}
	})
	
});
   