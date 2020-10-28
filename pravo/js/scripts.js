window.onload = function() {
  $(".slider_preloader").css("display","none")
  $(".slider_conteiner").css("overflow","visible")
  $(".reviews_slider_wrapper").removeClass("load")

	$(".main_slider .slide_wrapper").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.main_slider .arrow_place'),
		prevArrow: '<div class="main_arrow_prev"><img src="./img/svg/slider-arrow.svg"></div>',
		nextArrow: '<div class="main_arrow_next"><img src="./img/svg/slider-arrow.svg"></div>',
	})
	$(".activities_slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="main_arrow_prev"><img src="./img/svg/activites-slider-arrow.svg"></div>',
		nextArrow: '<div class="main_arrow_next"><img src="./img/svg/activites-slider-arrow.svg"></div>',
		responsive: [{
			breakpoint: 1300,
			settings: {
				dots: true,
				arrows: false,
			}
		}]
	})
	$(".reviews_slider_wrapper").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		prevArrow: '<div class="main_arrow_prev"><img src="./img/svg/review-arrow.svg"></div>',
		nextArrow: '<div class="main_arrow_next"><img src="./img/svg/review-arrow.svg"></div>',
		responsive: [{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}]
	})
}
$(".ham").click(function() {
	$("body").addClass("hidden")
	$(".modal_bg").fadeIn("fast");
	$(".main_menu").addClass("open")
	$(".main_menu.open .close .ham").click(function() {
		$(this).closest(".open").removeClass("open");
		$(".modal_bg").fadeOut("fast");
		$("body").removeClass("hidden")
	})
	$("body").click(function(EO) {
		if (EO.target == $(".modal_bg")[0]) {
			$(".modal_bg").fadeOut()
			$("body").removeClass("hidden")
			$(this).find(".open").removeClass("open");
		}
	})
})
$(".open_arrow").click(function() {
	$(this).toggleClass("open")
	$(this).closest(".office_wrapper").find(".office_content").slideToggle()
})
$(".current_lang").click(function() {
	$(this).toggleClass("open")
	$(".lang_list").slideToggle().css("display", "flex")
})