window.onload = function(){
  /* DROPDOWN */
  $(".dropdown__arrow").click(function(){
    $(this).toggleClass("dropdown__arrow--active")
    $(this).siblings(".dropdown__drop").slideToggle()
  })
  $("body").click(function(EO){
    if(!$(EO.target).closest(".dropdown").length){
      $(".dropdown__arrow").removeClass("dropdown__arrow--active")
      $(".dropdown__drop").css("display","none")
    }
  })

  /* BURGER */
  $('.menu').click(function() {
    if($(this).is('.active:not(.back)')) {
       $(this).addClass('back');
       $(this).removeClass('active');
    } else if ($(this).is('.back')) {
      $(this).removeClass('back');
      $(this).addClass('active');
    } else {
      $(this).addClass('active');
    }
    $(".modal_bg").toggleClass("active")
    $(".nav_menu__menu").toggleClass("active")
  });




  /* TABS */
  $(".tabs__control").click(function(){
    let active = $(this).data("tab")
    $(this).siblings(".tabs__control--active").removeClass("tabs__control--active")
    $(this).addClass("tabs__control--active")
    $(this).closest(".tabs").find(".tabs__content_tab--active").removeClass("tabs__content_tab--active")
    $(this).closest(".tabs").find(`[data-index='${active}']`).addClass("tabs__content_tab--active")
  })

  $("input[name='phone']").mask('+375 (00) 000-00-00');

  $(".footer__drop .title").click(function(){
    if(window.innerWidth <= 600){
      $(this).toggleClass("active")
      $(this).siblings(".footer__links").slideToggle().css("display", "flex")
    }
  })

  $(".switch").click(function(){
    $(this).toggleClass("switch--active")
  })
  
  $(".sort_chose").click(function(){
    $(this).toggleClass("sort_chose--active")
    $(this).find(".sort_variants").slideToggle('fast')
  })

  $(".filter_section .title").click(function(){
    if(window.innerWidth <= 1000){
      $(this).toggleClass("active")
      $(this).siblings(".filter_box").slideToggle().css("display", "flex")
    }
  })

  /* COUNTER */

  $(".product_counter")
  $(".product_counter__minus").click(function(){
    let counter = $(this).siblings(".product_counter__count").find("input")
    let val = $(counter).val()
    if(val - 1 > 0){
      $(counter).val(val - 1)
    }
  })
  $(".product_counter__plus").click(function(){
    let counter = $(this).siblings(".product_counter__count").find("input")
    let val = parseInt($(counter).val())
    $(counter).val(val + 1)
  })

  $(".popup_btn").click(function(){
    let popup = $(this).data("popup")
    $(`.modal_overlay.${popup}`).fadeToggle()
  })
  $(".modal .close").click(function(){
    $(this).closest(".modal_overlay").fadeOut()
  })
  $(".modal").click(function(EO){
    if(!$(EO.target).closest(".modal__content").length ){
      $(".modal_overlay").fadeOut()
    }
  })
  if($(".about_company").length || $(".main_page_slider_box").length || $(".error_page").length){
    $(".nav_menu").addClass("nav_menu--blur")
  }
  $(".back_link").click(function(EO){
    history.go(-1);
  })
  /* SLIDERS */

  $(".main_page_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    lazyLoad: 'ondemand',
    dots: true
  })



  $(".catalog_slider").map(function(element,index){
    $(this).on('init reInit afterChange', function(event, slick, direction){
      let slideCount = Math.ceil(slick.slideCount / slick.options.slidesToScroll)
      let control = $(this).siblings(".catalog_slider_control")
      let controlSlide = $(control).find(".catalog_slider_control__slider")
      let controlSlideWidth =  parseInt($(control).css("width")) / slideCount
      $(controlSlide).css({
        "width" : controlSlideWidth,
        "left" : `${controlSlideWidth * (Math.ceil(slick.currentSlide / slick.options.slidesToScroll)+1) -controlSlideWidth}px`,
      })
    });
    $(this).slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      arrows: false,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    })
  })

  
  $(".reviews__slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: '<div class="prev"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
    nextArrow: '<div class="next"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
  })

  $(".portfolio__slider").slick({
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 15000,
    prevArrow: '<div class="prev"><img src="assets/img/icons/slider-arrow-white.svg"></div>',
    nextArrow: '<div class="next"><img src="assets/img/icons/slider-arrow-white.svg"></div>',
    appendArrows: $(".portfolio_slider_navigation .arrows")
  })

  function comandSlider(){
    if(window.innerWidth <= 900){
      console.log($(".comand__wrapper"))
      $(".comand__wrapper").slick({
        prevArrow: '<div class="prev"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
        nextArrow: '<div class="next"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
      })
    }else{
      $(".comand__wrapper").slick('unslick');
    }
  }comandSlider()

  $(".product_card__slider").slick({
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '.product_card__control_slider',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: true,
          adaptiveHeight: true,
          swipe: true,
        }
      },
    ]
  })
  $(".product_card__control_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product_card__slider',
    focusOnSelect: true
  })
  $(".similar_products__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: true,
          prevArrow: '<div class="prev"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
          nextArrow: '<div class="next"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          arrows: true,
          prevArrow: '<div class="prev"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
          nextArrow: '<div class="next"><img src="assets/img/icons/slider-arrow-gray.svg"></div>',
        }
      },
    ]
  })
}
