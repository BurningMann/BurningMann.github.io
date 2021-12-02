window.onload = function(){

  let clients = $(".clients")[0]
  let about = $(".about_company_section")[0]

  if(clients && this.pageYOffset + (window.innerHeight / 2) >= $(clients).offset().top){
    $(clients).addClass('visible')
  }else{
    $(window).scroll(function(){
      if(this.pageYOffset + (window.innerHeight / 2) >= $(clients).offset().top ){
        $(clients).addClass('visible')
      }
    })
  }
  if(clients && this.pageYOffset + (window.innerHeight / 1.5) >= $(about).offset().top){
    $(about).find(".number").addClass('number--black')
    $(about).find(".number").delay(500).spincrement({
      thousandSeparator: "",
      duration: 3000,
      leeway: 0,
    });
  }else{
    $(window).scroll(function(){
      if(this.pageYOffset + (window.innerHeight / 1.5) >= $(about).offset().top && !$(about).find(".number").hasClass('number--black')){
        $(about).find(".number").addClass('number--black')
        $(about).find(".number").delay(500).spincrement({
          thousandSeparator: "",
          duration: 3000,
          leeway: 0
        });
      }
    })
  }
  $(".description_box .text").mCustomScrollbar();

  $('.main_menu__element .parent').click(function(){
    $(this).siblings('.dropdown_menu').slideToggle()
    $(this).toggleClass('active')
  })

  $('.hamburger1').click(function(){
    $('.header .main_menu').fadeToggle()
    console.log(1)
  })
  
  $('.tab_section__tab').click(function(){
    if(!$(this).hasClass('disabled') && !$(this).hasClass('active')){
      let tabClass  = $(this).data('tab')
      let tabContainer = $(this).closest('.tab_section')
      $(tabContainer).find('.tab_section__tab.active').removeClass('active')
      $(this).addClass('active')
      $(tabContainer).find('.tab_section__content_tab.active').removeClass('active')
      $(tabContainer).find(`.${tabClass}_tab`).addClass('active')
      $('.area').map(function(index,element){
        $(element).removeAttr('style')
      })
    }
  })

  $('.accordion_box__element .opener').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.content').slideToggle()
  })
}
$(document).on('input', '.search_box__section input', function () {
  if($(this).val()){
    $(".search_box__search_container .result_box").css("display","flex")
  }else{
    $(".search_box__search_container .result_box").css("display","none")
  }
});


$('.main_page_slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.main_page_slider__dots_box',
  fade: true,
  speed: 1000,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>'
})

$('.main_page_slider__dots_box').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.main_page_slider__wrapper',
  arrows:false,
  focusOnSelect: true,
  vertical: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:3,
        vertical: false,
        centerMode: true,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow:3,
        vertical: false,
        centerMode: true,
      }
    },
  ]
});



$(".reviews__slider").slick({
  infinite: true,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
      }
    },
  ]
})

$(".reviews__slider_button").click(function(){
  $(".reviews__slider").slick('slickNext')
})

$(".slider_box-slider").slick({
  infinite: true,
  fade: true,
  cssEase: 'linear',
  arrows:false,
})

$(".slider-control .animate_arrow").click(function(){
  $(".slider_box-slider").slick('slickNext')
})
